"use client";

import { useTranslations } from "next-intl";
import type { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ContactFormData } from "@/schemas/contact-form.schema";

interface FormStepPersonalProps {
  form: UseFormReturn<ContactFormData>;
}

export function FormStepPersonal({ form }: FormStepPersonalProps) {
  const t = useTranslations("contact.form");
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">{t("firstName")}</Label>
          <Input
            id="firstName"
            {...register("firstName")}
            className={errors.firstName ? "border-destructive" : ""}
          />
          {errors.firstName && (
            <p className="text-sm text-destructive">{errors.firstName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">{t("lastName")}</Label>
          <Input
            id="lastName"
            {...register("lastName")}
            className={errors.lastName ? "border-destructive" : ""}
          />
          {errors.lastName && (
            <p className="text-sm text-destructive">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{t("email")}</Label>
        <Input
          id="email"
          type="email"
          dir="ltr"
          {...register("email")}
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">{t("phone")}</Label>
        <Input
          id="phone"
          type="tel"
          dir="ltr"
          placeholder="050-1234567"
          {...register("phone")}
          className={errors.phone ? "border-destructive" : ""}
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">{t("company")}</Label>
        <Input id="company" {...register("company")} />
      </div>
    </div>
  );
}
