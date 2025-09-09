"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { formSchema } from "./FormCreateInterview.form";
import { Mic } from "lucide-react";
import { roles, difficulty } from "./FormCreateInterview.data";

export function FormCreateInterview() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      rol: "",
      level: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-black"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Interview Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rol"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select the rol</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {roles.map((role, index) => (
                    <SelectItem key={index} value={role.value}>
                      <div className="flex items-center gap-2">
                        <span>{role.icon}</span>
                        <span>{role.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select the level</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {difficulty.map((level, index) => (
                    <SelectItem key={index} value={level.value}>
                      <div className="flex items-center gap-2">
                        <span>{level.icon}</span>
                        <span>{level.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="bg-gradient-to-r from-purple-500 to-blue-600 font-bold py-3 px-6 rounded-lg hover:from-purple-700 transition-all duration-100"
          type="submit"
        >
          Comenzar la entrevista
          <Mic />
        </Button>
      </form>
    </Form>
  );
}
