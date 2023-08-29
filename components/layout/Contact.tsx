"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please provide a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

async function onSubmit(values: z.infer<typeof formSchema>) {
  fetch("https://submit-form.com/UiPmNRU3", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(values),
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
}

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmitWithToast = async (data: z.infer<typeof formSchema>) => {
    try {
      await onSubmit(data);
      toast({ description: "Your message has been sent." });
      form.reset();
    } catch (error) {
      toast({ description: "An error occurred. Please try again." });
    }
  };

  return (
    <section
      id="contact"
      className="border-b border-primary pb-20 pt-14 xl:grid xl:grid-cols-2 xl:gap-[220px]"
    >
      <div className="mb-10 flex flex-col gap-5 text-center xl:text-left">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p>
          Whether you're looking to collaborate on an exciting project or
          seeking a dedicated developer for your team, I'm eager to discuss how
          I can contribute. Drop me a message, and I'll respond at my earliest
          opportunity.
        </p>
      </div>
      <Form {...form}>
        <form
          method="POST"
          onSubmit={form.handleSubmit(handleSubmitWithToast)}
          className="flex flex-col space-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel aria-label="name" className="hidden">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="rounded-none border-b-primary bg-transparent "
                    placeholder="Name"
                    {...field}
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
              <FormItem>
                <FormLabel aria-label="email" className="hidden">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    className="rounded-none border-b-primary bg-transparent"
                    placeholder="Email"
                    type="email"
                    {...field}
                  />
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
                <FormLabel aria-label="message" className="hidden">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Your message..."
                    className=" rounded-none border-b-primary bg-transparent pb-16 outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="self-end bg-transparent uppercase text-white underline decoration-primary underline-offset-8 transition-all  duration-300 hover:bg-transparent hover:text-primary"
            type="submit"
          >
            Send Message
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default Contact;
