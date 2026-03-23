import { z } from "zod";

export const contactFormSchema = z
  .object({
    firstName: z.string().min(2, "validation.minChars"),
    lastName: z.string().min(2, "validation.minChars"),
    email: z.string().email("validation.invalidEmail"),
    phone: z
      .string()
      .regex(/^05\d-?\d{7}$/, "validation.invalidPhone"),
    company: z.string().optional(),
    projectType: z.enum(
      ["website", "webapp", "automation", "consulting", "other"],
      { message: "validation.selectProject" }
    ),
    budgetRange: z
      .enum(["5k-10k", "10k-20k", "20k-50k", "50k+"])
      .optional(),
    message: z
      .string()
      .min(10, "validation.minChars")
      .max(1000, "validation.maxChars"),
  })
  .refine(
    (data) => {
      if (["website", "webapp"].includes(data.projectType) && !data.budgetRange) {
        return false;
      }
      return true;
    },
    {
      message: "validation.selectBudget",
      path: ["budgetRange"],
    }
  );

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const personalFields = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "company",
] as const;
