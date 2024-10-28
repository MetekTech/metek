"use client";

import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { PhoneInput } from "./ui/phone-input";
import { Textarea } from "./ui/textarea";

const formSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters.")
      .max(50, "Name must not exceed 50 characters.")
      .transform((value) => value.trim()),
    phone: z
      .string()
      .refine(isValidPhoneNumber, { message: "Invalid phone number." })
      .optional()
      .or(z.literal("")),
    email: z
      .string()
      .email("Please enter a valid email address.")
      .transform((value) => value?.trim().toLowerCase())
      .optional()
      .or(z.literal("")),
    message: z
      .string()
      .max(1000, "Message must not exceed 1000 characters.")
      .transform((value) => value.trim()),
  })
  .refine((data) => data.email || data.phone, {
    message: "Please provide an email or phone number.",
    path: ["phone"],
  });

type FormSchema = z.infer<typeof formSchema>;

type Props = {
  onSend?: () => void;
};

export function ContactForm(props: Props) {
  const { onSend } = props;

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: FormSchema) {
    // Here you would typically send the form data to your server
    console.log(values);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    onSend?.();
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name *</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <PhoneInput placeholder="Your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Add a message. If left blank, we'll assume you're interested in more information."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Send message</Button>
      </form>
    </Form>
  );
}
