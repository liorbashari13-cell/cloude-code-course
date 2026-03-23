"use client";

import { useTranslations } from "next-intl";
import type { UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ContactFormData } from "@/schemas/contact-form.schema";
import { PROJECT_TYPES, BUDGET_RANGES } from "@/lib/constants";

interface FormStepProjectProps {
  form: UseFormReturn<ContactFormData>;
}

export function FormStepProject({ form }: FormStepProjectProps) {
  const t = useTranslations("contact");
  const {
    setValue,
    watch,
    register,
    formState: { errors },
  } = form;

  const projectType = watch("projectType");
  const showBudget = ["website", "webapp"].includes(projectType);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>{t("form.projectType")}</Label>
        <Select
          value={projectType}
          onValueChange={(val) =>
            setValue("projectType", val as ContactFormData["projectType"], {
              shouldValidate: true,
            })
          }
        >
          <SelectTrigger className={errors.projectType ? "border-destructive" : ""}>
            <SelectValue placeholder={t("form.projectType")} />
          </SelectTrigger>
          <SelectContent>
            {PROJECT_TYPES.map((type) => (
              <SelectItem key={type} value={type}>
                {t(`projectTypes.${type}`)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.projectType && (
          <p className="text-sm text-destructive">{errors.projectType.message}</p>
        )}
      </div>

      {showBudget && (
        <div className="space-y-2">
          <Label>{t("form.budgetRange")}</Label>
          <Select
            value={watch("budgetRange") || ""}
            onValueChange={(val) =>
              setValue("budgetRange", val as ContactFormData["budgetRange"], {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger className={errors.budgetRange ? "border-destructive" : ""}>
              <SelectValue placeholder={t("form.budgetRange")} />
            </SelectTrigger>
            <SelectContent>
              {BUDGET_RANGES.map((range) => (
                <SelectItem key={range} value={range}>
                  {t(`budgetRanges.${range}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.budgetRange && (
            <p className="text-sm text-destructive">{errors.budgetRange.message}</p>
          )}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="message">{t("form.message")}</Label>
        <Textarea
          id="message"
          rows={4}
          {...register("message")}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>
    </div>
  );
}
