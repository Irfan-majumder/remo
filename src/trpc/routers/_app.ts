
import { baseProcedure, createTRPCRouter } from '../init';
 
export const appRouter = createTRPCRouter({
  health: baseProcedure.query(async() => {

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay of 1 second
   
    // throw new Error('Health check failed');


    return { status: 'OK' };
  }),
});
 
// export type definition of API
export type AppRouter = typeof appRouter;