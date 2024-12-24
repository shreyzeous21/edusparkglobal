"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

// List of all Indian states and union territories
const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

// Form Schema
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  phone: z.string().regex(/^[6-9]\d{9}$/, { message: "Invalid phone number" }),
  state: z
    .string({
      required_error: "Please select a state",
    })
    .min(1, { message: "Please select a state" }),
});

export default function ContactBanner() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form with zod resolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      state: "",
    },
    mode: "onTouched",
  });

  // Form submission handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Current timestamp
      const currentTime = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      // Prepare form data for Web3Forms
      const formData = new FormData();
      formData.append("access_key", "86e9693b-516f-4cc3-8b81-222489adac4e"); // Replace with your actual Web3Forms access key
      formData.append("name", values.name);
      formData.append("phone", values.phone);
      formData.append("state", values.state);
      formData.append("timestamp", currentTime);
      formData.append("source", "UPES Online Inquiry Website");
      formData.append("page_url", typeof window !== "undefined" ? window.location.href : "Unknown");

      // Convert FormData to JSON
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      // Send form data to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      });

      const result = await response.json();

      if (result.success) {
        // Success Toast
        toast.success("Request submitted successfully!", {
          description: "We will contact you shortly.",
          position: "top-right",
          duration: 3000,
        });

        // Reset Form
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
      toast.error("Failed to submit request.", {
        description: "Please try again later.",
        position: "top-right",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact-banner"
      className="fixed bottom-0 left-0 right-0 z-50 w-full"
    >
      <div className="w-full bg-orange-500 py-4 px-2">
        <div className="max-w-6xl mx-auto">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-wrap gap-2 items-end justify-center"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1 min-w-[200px]">
                    <FormControl>
                      <Input
                        placeholder="Name"
                        {...field}
                        className="h-10 bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex-1 min-w-[200px]">
                    <FormControl>
                      <Input
                        placeholder="Phone Number"
                        {...field}
                        className="h-10 bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="flex-1 min-w-[200px]">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-10 bg-white">
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {INDIAN_STATES.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-black hover:bg-black-700 text-white h-10 px-8 whitespace-nowrap"
              >
                {isSubmitting ? "Submitting..." : "Get Free Counselling"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
