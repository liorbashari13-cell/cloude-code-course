"use server";

import { contactFormSchema, type ContactFormData } from "@/schemas/contact-form.schema";
import type { LeadPayload } from "@/types";

const WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL || "";

export async function submitLead(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  // Re-validate on server
  const result = contactFormSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: "Invalid form data" };
  }

  const payload: LeadPayload = {
    ...result.data,
    timestamp: new Date().toISOString(),
    source: "Landing Page - Lior Bashari",
  };

  // If no webhook configured, log and return success (dev mode)
  if (!WEBHOOK_URL) {
    console.log("[Lead submitted]:", JSON.stringify(payload, null, 2));
    return { success: true };
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { success: false, error: "Failed to send lead" };
    }

    return { success: true };
  } catch {
    return { success: false, error: "Network error" };
  }
}
