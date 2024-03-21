"use client";
import { generateQR } from "@/app/lib/actions";
import Image from "next/image";
import { useFormState } from "react-dom";

const initialState = {
  submit: false,
  dataURL: "",
  error: "",
};

const SingleQRForm = () => {
  const [state, formAction] = useFormState(generateQR, initialState);
  return (
    <div className="px-12 w-1/3 py-8 border rounded-md shadow-md">
      <form
        action={formAction}
        className="flex flex-col justify-center items-center gap-8"
      >
        <input
          type="text"
          placeholder="Enter text here.."
          className="w-full px-6 py-2 border border-gray-200"
          name="text"
        />
        <p className={`text-red-500 ${state.error ? "block" : "hidden"}`}>
          {state.error}
        </p>
        <button
          type="submit"
          className="px-6 bg-red-800 py-2 text-white rounded-sm shadow-lg hover:shadow-inner"
        >
          Generate QR
        </button>
        <h2 className="text-xl text-center">
          {state.submit
            ? "Here is your QR code"
            : "Please enter some text to generate QR code."}
        </h2>
        <Image
          src={!state.submit ? "/default.png" : state.dataURL}
          width="200"
          height="200"
          alt="QR Image"
        />
      </form>
    </div>
  );
};

export default SingleQRForm;
