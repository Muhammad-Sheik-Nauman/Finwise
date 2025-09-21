import { inngest } from "./client";
import { db } from "../prisma";

export const helloWorld = inngest.createFunction(
  { name: "Check Budget Alert" },
  { cron:" 0 */6 * * *" },
  async ({ step }) => {
    const budget = await step.run("fetch-budget",async()=>{
      return await db.budget.findMany({
        include:{
          user:{
            include: {
              accounts:{
                where:{
                  isDefault:true,
                }
              }
            }
          }
        }
      })
    } )
  },
);