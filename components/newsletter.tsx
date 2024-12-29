"use client"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});

export function Newsletter(props: {
  source?: string;
  className?: string;
  small?: boolean;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch("/api/newsletter-sub", {
      method: "POST",
      body: JSON.stringify({
        ...values,
        source: props.source ?? "create",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      alert("error");
    } else {
      alert("success");
      form.reset();
    }
  }


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex gap-y-2 w-full flex-row", props.className)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="votre@email.com"
                  type="email"
                  {...field}
                  className={cn(
                    "sm:rounded-r-none h-10 max-w-[300px] px-4 py-2",
                    props.small && "h-9"
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="secondary"
          className="sm:rounded-l-none"
          disabled={form.formState.isSubmitting || !form.formState.isValid}
          size={props.small ? "sm" : "lg"}
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <span>S'inscrire à la newsletter</span>
          )}
        </Button>
      </form>
    </Form>
  );
}
