import { db } from '@/db';

import { initTRPC } from '@trpc/server';
import { cache } from 'react';
import superjson from 'superjson';
//part of every request


export const createTRPCContext = cache(async () => {
  /**
   * @see: https://trpc.io/docs/server/context
   */
  const userContext= {
    user:null
  }
  return userContext;
});


export type Context = Awaited<ReturnType<typeof createTRPCContext>>;


// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.context<Context>().create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  transformer: superjson,
});
// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const protectedProcedure = t.procedure.use(async function isAuthed(opts:any) {
  
//   const {ctx} = opts;

//   if (!ctx.clerkUserId) {
//     console.log("No clerkuserid")
//     throw new TRPCError({code: 'UNAUTHORIZED'})
//   }else{
//     console.log(`Clerk userid found ${ctx.clerkUserId}`)
//   }

//   const [user] = await db 
//   .select()
//   .from(users)
//   .where(eq(users.clerkId, ctx.clerkUserId))
//   .limit(1)

//   if(!user) {
//     console.log("No user in DB")
//     throw new TRPCError({code: 'UNAUTHORIZED'})
//   }

//   //Rate Limiting
//   // const {success} = await limiter.limit(ctx.clerkUserId)

//   // if(!success) {
//   //   throw new TRPCError({code: 'TOO_MANY_REQUESTS'})
//   // }

//   return opts.next({
//     ctx:{...ctx, user}
//   })
// })