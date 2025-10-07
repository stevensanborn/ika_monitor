
import { createTRPCRouter, baseProcedure } from '../init';

export const appRouter = createTRPCRouter({
  // Dummy procedure to make router non-empty (remove once real procedures added)
  dummy: baseProcedure.query(() => 'dummy'),
});

// export type definition of API
export type AppRouter = typeof appRouter;