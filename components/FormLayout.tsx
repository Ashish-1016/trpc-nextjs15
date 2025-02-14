import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type } from "node:os";
import { Form } from "@/components/ui/form";

type TFormLayoutProps<T extends ZodType> = {
  formSchema: T;
  onSubmit: (values: z.infer<T>) => void;
};

export const FormLayout = <T extends ZodType>(props: TFormLayoutProps<T>) => {
  const { formSchema, onSubmit } = props;
  type TformType = z.infer<typeof formSchema>;

  const form = useForm<TformType>({
    resolver: zodResolver(formSchema),
  });

  // @ts-expect-error
  if (formSchema._def["typeName"] !== "ZodObject") {
    return <p>Zod schema is some other type</p>;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-red-400 h-full w-full"
      ></form>
    </Form>
  );
};
