"use client";
import Image from "next/image";
import Link from "next/link";
import { Discord, Email, Github, Twitter, Youtube } from "../icons/icons";

const Footer = () => {
  const handleEmailClick = () => {
    const emailSubject = encodeURIComponent("[Inquiry about taja]");
    const emailBody = encodeURIComponent(
      "Heyyo,\n\nwanna chat about taja?"
    );
    const mailtoLink = `mailto:davidchuksdev@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div
      id="Contact"
      className="border-x lg:border-x-2 border-t lg:border-t-2 border-[#252525] mt-2 mx-auto w-[98%] px-4 lg:px-10 pt-8 lg:pt-16 pb-4 lg:pb-8"
    >
      {/* Bottom Section */}
      <div className="pt-8 border-t border-[#252525] space-y-8">
        {/* Top Row - Profile Picture and Navigation */}
        <div className="relative flex items-start justify-between">
          {/* Profile Picture - Left */}
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-white text-4xl lg:text-5xl font-medium tracking-tight">
                Taja
              </h4>
              <p className="text-[#b1b1b1] text-base lg:text-lg tracking-tight mt-1">
                The first AI-powered WhatsApp marketplace. Making commerce as simple as a chat.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/logo.svg"
                alt="taja"
                width={32}
                height={32}
                className="rounded-full object-cover aspect-square w-8 h-8"
              />
              <span className="text-[#b1b1b1] text-xs font-mono">
                Built by the taja team
              </span>
            </div>
          </div>

          {/* Grid Layout - Right */}
          <div className="grid grid-cols-3 gap-6 lg:gap-8">
            {/* Sitemap Column */}
            <div>
              <h3 className="text-white text-sm lg:text-base font-medium mb-2">
                Platform
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="#features"
                  className="text-[#b1b1b1] hover:text-white transition-colors text-xs"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="text-[#b1b1b1] hover:text-white transition-colors text-xs"
                >
                  Pricing
                </Link>
                <Link
                  href="/developers"
                  className="text-[#b1b1b1] hover:text-white transition-colors text-xs"
                >
                  Developers
                </Link>
                <Link
                  href="#"
                  className="text-[#b1b1b1] hover:text-white transition-colors text-xs"
                >
                  FAQ
                </Link>
              </div>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-white text-sm lg:text-base font-medium mb-2">
                Legal
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="/legal/privacy"
                  className="text-[#b1b1b1] hover:text-white transition-colors text-xs"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/legal/terms"
                  className="text-[#b1b1b1] hover:text-white transition-colors text-xs"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Socials Column */}
            <div>
              <h3 className="text-white text-sm lg:text-base font-medium mb-2">
                Socials
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="https://x.com/david_chuks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b1b1b1] hover:text-white transition-colors text-xs flex items-center gap-1.5"
                >
                  <span className="w-3.5">
                    <Twitter />
                  </span>
                  Twitter
                </Link>
                <Link
                  href="https://github.com/david-patrick-chuks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b1b1b1] hover:text-white transition-colors text-xs flex items-center gap-1.5"
                >
                  <span className="w-3.5">
                    <Github />
                  </span>
                  GitHub
                </Link>
              
                <button
                  onClick={handleEmailClick}
                  className="text-[#b1b1b1] hover:text-white transition-colors text-xs flex items-center gap-1.5 text-left"
                >
                  <span className="w-3.5">
                    <Email />
                  </span>
                  Email
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Copyright */}
        <div className="text-center">
          <p className="font-mono text-xs lg:text-sm text-[#b1b1b1]">
            © {new Date().getFullYear()} taja. All rights reserved.
          </p>
          <p className="font-mono text-xs lg:text-xs italic text-[#b1b1b1] mt-2">
            Shop. Chat. Pay. Done.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
