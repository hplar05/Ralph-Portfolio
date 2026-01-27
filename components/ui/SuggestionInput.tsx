"use client";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  SuggestionSchema,
  SuggestionType,
} from "@/lib/validation/suggestionSchema";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "./button";

export default function SuggestionInput() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SuggestionType>({
    resolver: zodResolver(SuggestionSchema),
  });

  const onSubmit = async (data: SuggestionType) => {
    toast("Your message is submitting!", { icon: "⌛" });

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      toast.success("Successfully submitted!");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <div className="rounded-lg  w-auto h-auto justify-center flex items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid w-[90%] gap-5 mx-8 my-5"
      >
        <Label htmlFor="message-2 text-lg">Contact Me</Label>
        <Input {...register("name")} type="name" placeholder="Name" />
        {errors.name && (
          <p className="text-red-500">{`${errors.name.message}`}</p>
        )}
        <Input {...register("email")} placeholder="Email" />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}
        <Textarea
          {...register("text")}
          typeof="text"
          placeholder="Type your message here."
          id="message-2"
        />
        {errors.text && (
          <p className="text-red-500">{`${errors.text.message}`}</p>
        )}
        <p className="text-sm text-muted-foreground">
          Your message will be send.
        </p>
        <div>
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
