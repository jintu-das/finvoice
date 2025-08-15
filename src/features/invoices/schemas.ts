import * as z from "zod";

export const invoiceFormSchema = z.object({
  dueDate: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  issueDate: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  client: z.string().min(2, {
    message: "Client name must be at least 2 characters.",
  }),
  note: z.string().optional(),
  items: z.array(
    z.object({
      description: z.string().min(1, {
        message: "Description is required.",
      }),
      quantity: z.number().min(1, {
        message: "Quantity must be at least 1.",
      }),
      price: z.number().min(0.01, {
        message: "Price must be at least 0.01.",
      }),
      rate: z.number().optional(),
    })
  ),
  type: z.enum(["all", "mentions", "none"], {
    message: "You need to select a notification type.",
  }),
});
