import Navbar from "@/app/components/Navbar/Navbar";
import SingleQRForm from "@/app/components/Forms/SingleQRForm";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center py-24">
      <SingleQRForm />
    </main>
  );
}
