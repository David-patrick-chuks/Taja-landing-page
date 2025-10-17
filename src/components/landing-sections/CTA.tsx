import { Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PrimaryButtom from "../ui/custom-button";

const CTA = () => {
  return (
    <div className="w-[94%] h-[420px] mt-2 mx-auto relative bg-transparent lg:bg-gradient-to-r from-white via-[#101010] to-white z-10 flex flex-col gap-6 items-center justify-center lg:p-[60px] rounded-3xl overflow-hidden">
      <Image
        src="/assets/ctagradient.svg"
        alt="cal"
        width={100}
        height={100}
        className="absolute inset-0 w-full h-full -z-10 object-cover rounded-3xl"
      />
      <div className="space-y-4">
        <h2 className="text-4xl text-[40px] w-full lg:text-7xl font-medium text-balance text-center max-w-4xl tracking-tighter ">
          Shop & Sell Through WhatsApp Conversations
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 text-center max-w-2xl mx-auto">
          Start your free WhatsApp store on taja. No apps, no websites — just chat.
        </p>
      </div>
      <Link href="#features" className="cursor-pointer z-30">
        <PrimaryButtom>
          <Terminal />
          Start Free Today
        </PrimaryButtom>
      </Link>
    </div>
  );
};

export default CTA;
