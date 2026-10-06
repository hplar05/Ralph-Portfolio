"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  SuggestionSchema,
  SuggestionType,
} from "@/lib/validation/suggestionSchema";
import toast from "react-hot-toast";

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
    toast("UPLOADING MESSAGE...", { icon: "⌛" });

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      toast.success("TRANSMISSION SUCCESSFUL!");
      reset();
    } catch (error) {
      toast.error("TRANSMISSION FAILED. RETRY.");
    }
  };

  return (
    <div className="retro-window w-full min-w-[300px] max-w-md mx-auto p-4 text-[var(--fg-color)] font-['Space_Mono'] uppercase">
      <div className="retro-window-header mb-4 text-sm">
        <span>CONTACT_FORM.EXE</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block mb-1">&gt; NAME:</label>
          <input 
            {...register("name")} 
            id="name"
            placeholder="_" 
            className="w-full bg-[var(--window-bg)] border-2 border-[var(--border-color)] text-[var(--fg-color)] p-2 outline-none focus:bg-[var(--bg-color)] shadow-[inset_2px_2px_0px_rgba(44,44,44,0.2)]"
          />
          {errors.name && (
            <p className="text-red-600 text-xs mt-1 font-bold">ERR: {errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-1">&gt; EMAIL:</label>
          <input 
            {...register("email")} 
            id="email"
            placeholder="_" 
            className="w-full bg-[var(--window-bg)] border-2 border-[var(--border-color)] text-[var(--fg-color)] p-2 outline-none focus:bg-[var(--bg-color)] shadow-[inset_2px_2px_0px_rgba(44,44,44,0.2)]"
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1 font-bold">ERR: {errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block mb-1">&gt; MESSAGE:</label>
          <textarea
            {...register("text")}
            id="message"
            placeholder="_"
            rows={4}
            className="w-full bg-[var(--window-bg)] border-2 border-[var(--border-color)] text-[var(--fg-color)] p-2 outline-none focus:bg-[var(--bg-color)] resize-none shadow-[inset_2px_2px_0px_rgba(44,44,44,0.2)]"
          />
          {errors.text && (
            <p className="text-red-600 text-xs mt-1 font-bold">ERR: {errors.text.message}</p>
          )}
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="retro-btn w-full mt-2"
        >
          {isSubmitting ? "[ TRANSMITTING... ]" : "[ SEND TRANSMISSION ]"}
        </button>
      </form>
    </div>
  );
}
