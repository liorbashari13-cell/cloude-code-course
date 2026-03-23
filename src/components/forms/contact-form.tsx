"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  contactFormSchema,
  type ContactFormData,
  personalFields,
} from "@/schemas/contact-form.schema";
import { submitLead } from "@/actions/submit-lead";
import { FormStepPersonal } from "./form-step-personal";
import { FormStepProject } from "./form-step-project";
import { FormSuccess } from "./form-success";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const {
    handleSubmit,
    trigger,
    formState: { isSubmitting },
  } = form;

  const handleNext = async () => {
    const valid = await trigger([...personalFields]);
    if (valid) setStep(1);
  };

  const onSubmit = async (data: ContactFormData) => {
    const result = await submitLead(data);
    if (result.success) {
      setSubmitted(true);
      toast.success(t("success"));
    } else {
      toast.error(t("error"));
    }
  };

  if (submitted) {
    return <FormSuccess />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Step indicators */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {[0, 1].map((s) => (
          <div
            key={s}
            className={`h-2 rounded-full transition-all ${
              s === step ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>

      {step === 0 && <FormStepPersonal form={form} />}
      {step === 1 && <FormStepProject form={form} />}

      <div className="flex justify-between gap-4">
        {step === 1 && (
          <Button
            type="button"
            variant="outline"
            onClick={() => setStep(0)}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("back")}
          </Button>
        )}

        {step === 0 && (
          <Button
            type="button"
            onClick={handleNext}
            className="ms-auto gap-2"
          >
            {t("next")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}

        {step === 1 && (
          <Button type="submit" disabled={isSubmitting} className="gap-2">
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t("sending")}
              </>
            ) : (
              t("submit")
            )}
          </Button>
        )}
      </div>
    </form>
  );
}
