
'use server';

import { optimizeDeliveryRoutes, OptimizeDeliveryRoutesInput, OptimizeDeliveryRoutesOutput } from '@/ai/flows/optimize-delivery-routes';

export type RouteOptimizationResult = {
  success: boolean;
  data?: OptimizeDeliveryRoutesOutput;
  error?: string;
};

export async function getOptimizedRouteAction(data: OptimizeDeliveryRoutesInput): Promise<RouteOptimizationResult> {
  try {
    const result = await optimizeDeliveryRoutes(data);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error optimizing route:', error);
    return { success: false, error: 'Falha ao otimizar a rota. Por favor, tente novamente mais tarde.' };
  }
}
