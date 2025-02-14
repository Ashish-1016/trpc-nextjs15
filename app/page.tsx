"use client";

import { z } from "zod";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { X } from "lucide-react";
import { FormLayout } from "@/components/FormLayout";

enum Roles {
  ADMIN = "ADMIN",
  USER = "USER",
  ANONYMOUS = "ANONYMOUS",
}

export default function FormWithFieldArray() {
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    accountInfo: z
      .array(
        z.object({
          role: z.nativeEnum(Roles),
          is_active: z.boolean().default(false),
        }),
      )
      .refine((val) => {
        const roles = val.map((v) => v.role);
        return new Set(roles).size === roles.length;
      }, "Duplicate roles are not allowed"),
  });

  const formSchema2 = z.array(
    z.object({
      ethnicity: z.string(),
    }),
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      accountInfo: [],
    },
  });

  const form2 = useForm<z.infer<typeof formSchema2>>({
    resolver: zodResolver(formSchema2),
    defaultValues: [],
  });

  const { fields, append, remove } = useFieldArray({
    name: "accountInfo",
    control: form.control,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  console.log("field errors -->", form.formState.errors);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <FormLayout formSchema={formSchema} onSubmit={onSubmit} />

      {/*<Form {...form}>*/}
      {/*  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">*/}
      {/*    <FormField*/}
      {/*      control={form.control}*/}
      {/*      name="email"*/}
      {/*      render={({ field }) => (*/}
      {/*        <FormItem>*/}
      {/*          <FormLabel>Email</FormLabel>*/}
      {/*          <FormControl>*/}
      {/*            <Input placeholder="email" {...field} />*/}
      {/*          </FormControl>*/}
      {/*          <FormMessage />*/}
      {/*        </FormItem>*/}
      {/*      )}*/}
      {/*    />*/}

      {/*    <FormField*/}
      {/*      control={form.control}*/}
      {/*      name="password"*/}
      {/*      render={({ field }) => (*/}
      {/*        <FormItem>*/}
      {/*          <FormLabel>Password</FormLabel>*/}
      {/*          <FormControl>*/}
      {/*            <Input placeholder="password" {...field} type="password" />*/}
      {/*          </FormControl>*/}
      {/*          <FormMessage />*/}
      {/*        </FormItem>*/}
      {/*      )}*/}
      {/*    />*/}

      {/*    <FormField*/}
      {/*      control={form.control}*/}
      {/*      name="accountInfo"*/}
      {/*      render={({ field }) => (*/}
      {/*        <FormItem>*/}
      {/*          <FormLabel>Password</FormLabel>*/}
      {/*          <FormControl>*/}
      {/*            <Input placeholder="password" {...field} type="password" />*/}
      {/*          </FormControl>*/}
      {/*          <FormMessage />*/}
      {/*        </FormItem>*/}
      {/*      )}*/}
      {/*    />*/}

      {/*    <div className="space-y-4">*/}
      {/*      {fields.map((field, index) => (*/}
      {/*        <div key={field.id} className="flex gap-4">*/}
      {/*          <FormField*/}
      {/*            control={form.control}*/}
      {/*            name={`accountInfo.${index}.role`}*/}
      {/*            render={({ field }) => (*/}
      {/*              <FormItem>*/}
      {/*                <FormLabel>Role</FormLabel>*/}
      {/*                <Select*/}
      {/*                  onValueChange={field.onChange}*/}
      {/*                  defaultValue={field.value}*/}
      {/*                >*/}
      {/*                  <FormControl>*/}
      {/*                    <SelectTrigger>*/}
      {/*                      <SelectValue placeholder="Select a role" />*/}
      {/*                    </SelectTrigger>*/}
      {/*                  </FormControl>*/}
      {/*                  <SelectContent>*/}
      {/*                    {Object.values(Roles).map((role) => (*/}
      {/*                      <SelectItem key={role} value={role}>*/}
      {/*                        {role}*/}
      {/*                      </SelectItem>*/}
      {/*                    ))}*/}
      {/*                  </SelectContent>*/}
      {/*                </Select>*/}
      {/*                <FormMessage />*/}
      {/*              </FormItem>*/}
      {/*            )}*/}
      {/*          />*/}

      {/*          <FormField*/}
      {/*            control={form.control}*/}
      {/*            name={`accountInfo.${index}.is_active`}*/}
      {/*            render={({ field }) => (*/}
      {/*              <FormItem className="flex items-end space-x-2">*/}
      {/*                <FormControl>*/}
      {/*                  <Checkbox*/}
      {/*                    checked={field.value}*/}
      {/*                    onCheckedChange={field.onChange}*/}
      {/*                  />*/}
      {/*                </FormControl>*/}
      {/*                <FormLabel>Active</FormLabel>*/}
      {/*              </FormItem>*/}
      {/*            )}*/}
      {/*          />*/}
      {/*          <X*/}
      {/*            className="cursor-pointer"*/}
      {/*            color="red"*/}
      {/*            onClick={() => remove(index)}*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}

      {/*    <FormMessage>*/}
      {/*      {form.formState.errors.accountInfo?.message}*/}
      {/*    </FormMessage>*/}

      {/*    <Button*/}
      {/*      type="button"*/}
      {/*      onClick={() => append({ role: Roles.USER, is_active: false })}*/}
      {/*    >*/}
      {/*      Add Account Info*/}
      {/*    </Button>*/}

      {/*    <Button type="submit">Submit</Button>*/}
      {/*  </form>*/}
      {/*</Form>*/}
    </div>
  );
}
