"use server";
import { z } from "zod";
import QRcode from "qrcode";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type state = {
  submit: boolean;
  dataURL: string;
  error: string;
};

export const generateQR = async (prevAction: state, formData: FormData) => {
  const text = formData.get("text") as string;
  const schema = z.string().min(1, { message: "Please enter some text" });

  const result = schema.safeParse(text);
  if (!result.success) {
    revalidatePath("/");
    return {
      ...prevAction,
      error: "Please enter some text",
    };
  }

  const uuid = crypto.randomUUID();
  const path = `public/qr/${uuid}.png`;
  const dataURL = await QRcode.toDataURL(text);
  revalidatePath("/");
  return {
    submit: true,
    dataURL: dataURL,
    error: "",
  };
};
