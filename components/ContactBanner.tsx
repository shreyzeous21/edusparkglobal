"use client";

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
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

// Initialize EmailJS globally
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "3XgNPJmb2DL32lABX");

// Form Schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Enter a valid email address." }),
  phone: z.string().min(10, { message: "Enter a 10-digit phone number." }),
  state: z.string().min(1, { message: "Select a state." }),
});

// States List
const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export default function ContactBanner() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form Hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "wd",
      phone: "wd",
      state: "wdwd",
    },
    mode: "onTouched",
  });

  // Submit Handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // EmailJS Configuration
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_SERVICE_ID || "service_cg2kfvp";
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID ||
        "template_d5qjdus";

      // Send Email
      await emailjs.send(serviceId, templateId, {
        name: values.name,
        phone: values.phone,
        state: values.state,
        reply_to: values.email,
      });

      // Success Toast
      toast.success("Request submitted successfully!", {
        description: "We will contact you shortly.",
      });

      // Reset Form
      form.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to submit request.", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Padding Fix for Banner
  useEffect(() => {
    const contactBanner = document.getElementById("contact-banner");
    if (contactBanner) {
      document.body.style.paddingBottom = `${contactBanner.offsetHeight}px`;
      return () => {
        document.body.style.paddingBottom = "0";
      };
    }
  }, []);

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
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1 min-w-[200px]">
                    <FormControl>
                      <Input
                        placeholder="Email"
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
                        {states.map((state) => (
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
