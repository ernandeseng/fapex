'use server';

/**
 * @fileOverview A delivery route optimization AI agent.
 *
 * - optimizeDeliveryRoutes - A function that optimizes delivery routes.
 * - OptimizeDeliveryRoutesInput - The input type for the optimizeDeliveryRoutes function.
 * - OptimizeDeliveryRoutesOutput - The return type for the optimizeDeliveryRoutes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeDeliveryRoutesInputSchema = z.object({
  deliveries: z
    .array(
      z.object({
        address: z.string().describe('The delivery address.'),
        priority: z.enum(['high', 'medium', 'low']).describe('The delivery priority.'),
      })
    )
    .describe('An array of delivery addresses and priorities.'),
  currentLocation: z.string().describe('The current location of the delivery vehicle.'),
  trafficConditions: z
    .enum(['light', 'moderate', 'heavy'])
    .describe('The current traffic conditions.'),
});
export type OptimizeDeliveryRoutesInput = z.infer<typeof OptimizeDeliveryRoutesInputSchema>;

const OptimizeDeliveryRoutesOutputSchema = z.object({
  optimizedRoutes: z
    .array(
      z.object({
        address: z.string().describe('The delivery address.'),
        priority: z.enum(['high', 'medium', 'low']).describe('The delivery priority.'),
      })
    )
    .describe('An array of delivery addresses and priorities, optimized for delivery order.'),
  estimatedTravelTime: z.string().describe('The estimated travel time for the optimized route.'),
  fuelConsumption: z.string().describe('The estimated fuel consumption for the optimized route.'),
});
export type OptimizeDeliveryRoutesOutput = z.infer<typeof OptimizeDeliveryRoutesOutputSchema>;

export async function optimizeDeliveryRoutes(
  input: OptimizeDeliveryRoutesInput
): Promise<OptimizeDeliveryRoutesOutput> {
  return optimizeDeliveryRoutesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeDeliveryRoutesPrompt',
  input: {schema: OptimizeDeliveryRoutesInputSchema},
  output: {schema: OptimizeDeliveryRoutesOutputSchema},
  prompt: `You are an expert logistics manager, specializing in optimizing delivery routes in real-time, considering traffic conditions and delivery priorities.

  Given the following deliveries, current location, and traffic conditions, optimize the delivery route to minimize delivery times and fuel costs.

  Deliveries: {{deliveries}}
Current Location: {{currentLocation}}
Traffic Conditions: {{trafficConditions}}

  Prioritize high-priority deliveries and adjust the route based on traffic conditions.

  Return the optimized route, estimated travel time, and estimated fuel consumption.

  Format the output as a JSON object with the following schema:
  ${JSON.stringify(OptimizeDeliveryRoutesOutputSchema.shape, null, 2)}`,
});

const optimizeDeliveryRoutesFlow = ai.defineFlow(
  {
    name: 'optimizeDeliveryRoutesFlow',
    inputSchema: OptimizeDeliveryRoutesInputSchema,
    outputSchema: OptimizeDeliveryRoutesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
