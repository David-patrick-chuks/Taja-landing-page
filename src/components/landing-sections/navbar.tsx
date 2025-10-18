"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
// import { Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import PrimaryButtom from "../ui/custom-button";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const isStaticPage = pathname === "/pricing" || pathname === "/developers";
  const [showNavbar, setShowNavbar] = useState(isStaticPage ? true : false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isStaticPage) {
      setShowNavbar(latest > 0);
    }
  });

  const links = [
    // { name: "Features", href: "/#features" },
    { name: "How it works", href: "/#HIW" },
    { name: "Pricing", href: "/pricing" },
    { name: "Developers", href: "/developers" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={showNavbar ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        " z-40  flex items-center justify-between px-4 py-3  bg-neutral-900/5 backdrop-blur-xl  border-white/10",
        isStaticPage
          ? "relative h-max md:w-full top-0 border-b"
          : "fixed rounded-3xl top-4 border w-[94%] md:w-[80%] mx-auto left-1/2 -translate-x-1/2"
      )}
    >
      <Link href="/" className="text-2xl font-medium tracking-tighter flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
        <div className="w-10 aspect-square overflow-hidden relative">
          <Image
            src="/assets/logo.svg"
            alt="background"
            fill
            className="object-cover w-full h-full"
          />
        </div>
        Taja
      </Link>
      <div className="hidden md:flex items-center gap-5 tracking-tight text-lg font-light text-[#d1d1d1]">
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={index}
              href={link.href}
              className={cn(
                "cursor-pointer hover:text-white",
                isActive && "text-white"
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center ">

        <Link href="#features" className="cursor-pointer z-30">
          <PrimaryButtom>
            {/* <Terminal /> */}
            Get Started
          </PrimaryButtom>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
