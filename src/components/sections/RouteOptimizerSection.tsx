'use client';

import { useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { getOptimizedRouteAction, RouteOptimizationResult } from '@/app/actions';
import { Loader2, Plus, Trash2, Route, Clock, Fuel } from 'lucide-react';

const formSchema = z.object({
  currentLocation: z.string().min(3, 'Localização atual é obrigatória.'),
  trafficConditions: z.enum(['light', 'moderate', 'heavy'], {
    required_error: 'Condição do trânsito é obrigatória.',
  }),
  deliveries: z
    .array(
      z.object({
        address: z.string().min(3, 'Endereço da entrega é obrigatório.'),
        priority: z.enum(['high', 'medium', 'low']),
      })
    )
    .min(1, 'Adicione pelo menos uma entrega.'),
});

type FormData = z.infer<typeof formSchema>;

const RouteOptimizerSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RouteOptimizationResult | null>(null);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentLocation: '',
      trafficConditions: 'moderate',
      deliveries: [{ address: '', priority: 'medium' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'deliveries',
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setResult(null);
    const response = await getOptimizedRouteAction(data);
    setLoading(false);

    if (response.success) {
      setResult(response);
      toast({
        title: 'Sucesso!',
        description: 'Sua rota foi otimizada.',
      });
    } else {
      toast({
        title: 'Erro',
        description: response.error,
        variant: 'destructive',
      });
    }
  };

  return (
    <section id="optimizer" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Otimizador de Rotas com IA
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Calcule a melhor rota para suas entregas e economize tempo e combustível.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Insira os Detalhes da Rota</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="currentLocation">Localização Atual</Label>
                  <Input id="currentLocation" {...register('currentLocation')} placeholder="Ex: Av. Paulista, 1000" />
                  {errors.currentLocation && <p className="text-sm text-destructive">{errors.currentLocation.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label>Condições do Trânsito</Label>
                  <Controller
                    name="trafficConditions"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o trânsito" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Leve</SelectItem>
                          <SelectItem value="moderate">Moderado</SelectItem>
                          <SelectItem value="heavy">Pesado</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                   {errors.trafficConditions && <p className="text-sm text-destructive">{errors.trafficConditions.message}</p>}
                </div>
                <div>
                  <Label>Entregas</Label>
                  {fields.map((field, index) => (
                    <div key={field.id} className="flex items-end gap-2 mt-2">
                      <div className="flex-1 space-y-1">
                        <Input {...register(`deliveries.${index}.address`)} placeholder={`Endereço ${index + 1}`} />
                      </div>
                      <div className="space-y-1">
                        <Controller
                            name={`deliveries.${index}.priority`}
                            control={control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-[120px]">
                                        <SelectValue placeholder="Prioridade" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="high">Alta</SelectItem>
                                        <SelectItem value="medium">Média</SelectItem>
                                        <SelectItem value="low">Baixa</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                      </div>
                      <Button type="button" variant="destructive" size="icon" onClick={() => remove(index)} disabled={fields.length <= 1}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  {errors.deliveries && <p className="text-sm text-destructive mt-2">{errors.deliveries.message || errors.deliveries.root?.message}</p>}
                  <Button type="button" variant="outline" className="mt-2" onClick={() => append({ address: '', priority: 'medium' })}>
                    <Plus className="mr-2 h-4 w-4" /> Adicionar Entrega
                  </Button>
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {loading ? 'Otimizando...' : 'Otimizar Rota'}
                </Button>
              </form>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Rota Otimizada</CardTitle>
              <CardDescription>O resultado aparecerá aqui.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
              {loading && <Loader2 className="h-8 w-8 animate-spin text-primary" />}
              {!loading && !result && <div className="text-center text-muted-foreground"><Route className="mx-auto h-12 w-12" />Aguardando informações para otimizar.</div>}
              {result?.success && result.data && (
                <div className="w-full space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-background rounded-lg p-4">
                        <Clock className="mx-auto h-8 w-8 text-primary mb-2" />
                        <p className="text-sm text-muted-foreground">Tempo Estimado</p>
                        <p className="text-xl font-bold">{result.data.estimatedTravelTime}</p>
                    </div>
                     <div className="bg-background rounded-lg p-4">
                        <Fuel className="mx-auto h-8 w-8 text-primary mb-2" />
                        <p className="text-sm text-muted-foreground">Combustível Estimado</p>
                        <p className="text-xl font-bold">{result.data.fuelConsumption}</p>
                    </div>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">Ordem</TableHead>
                        <TableHead>Endereço</TableHead>
                        <TableHead className="text-right">Prioridade</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {result.data.optimizedRoutes.map((route, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{index + 1}</TableCell>
                          <TableCell>{route.address}</TableCell>
                          <TableCell className="text-right capitalize">{route.priority}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RouteOptimizerSection;
