import { createTRPCRouter, protectedProcedure, publicProcedure } from "@/backend/trpc/init";
import { z } from "zod";
import { cookies } from "next/headers";

export const appRouter = createTRPCRouter({
  sampleProcedure: publicProcedure.query(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      status: 'OK',
      message: 'Welcome Backend',
    }

  }),
  sampleWithInput: publicProcedure
    .input(z.object({
      text: z.string()
    }))
    .query(async (opts) => {

    const { input } = opts;
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      status: 'OK',
      message: `Welcome ${input.text}`,
    }

  }),
  sampleProtectedRoute: protectedProcedure.query(
    async () => {

      await new Promise(resolve => setTimeout(resolve, 5000));

      const cookiesRes = await cookies();
      cookiesRes.set('some value', 'value')

      return {
        status: 'OK',
        message: 'You called a protected procedure',
      }

    })

});
export type AppRouter = typeof appRouter;