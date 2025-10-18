"use client";
import Footer from "@/components/landing-sections/footer";
import PrimaryButton from "@/components/ui/custom-button";
import Header from "@/components/ui/header";
import { ShineBorder } from "@/components/ui/shine-borders";
import { motion } from "framer-motion";
import { Check, CornerDownRight, Target, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const TajaFeatures = [
  {
    id: 1,
    title: "WhatsApp Commerce Platform",
    description:
      "Shop and sell through WhatsApp conversations with complete security. AI-powered product search and secure payments.",
    features: [
      "Non-custodial commerce - you own your store",
      "AI-powered product search by image or text",
      "Secure payments through WhatsApp",
      "Digital receipts and order tracking",
      "Emergency access for business continuity",
    ],
  },
  {
    id: 2,
    title: "AI-Powered Customer Service",
    description:
      "Provide instant customer support through WhatsApp with AI-powered assistance and real-time order management.",
    features: [
      "AI chatbot handles customer inquiries",
      "Real-time order notifications",
      "Automated product recommendations",
      "Order tracking and status updates",
      "Multi-language support",
    ],
  },
  {
    id: 3,
    title: "Developer SDKs & API",
    description: [
      "Integrate Taja into your applications with our comprehensive SDKs and REST API for WhatsApp commerce.",
      "Available for React, Vue, and vanilla JavaScript with full TypeScript support.",
      <>
        Build WhatsApp commerce into any app with our{" "}
        <Link href="/developers" className="hover:underline text-[#a472ea]">
          developer tools.
        </Link>
      </>,
    ],
    features: [],
  },
];

const whySub = [
  {
    content:
      "Early access pricing - Get premium WhatsApp commerce features at 50% off during our launch period",
  },
  {
    content:
      "Bank-level security (95/100 rating) with 20+ enterprise security features for commerce",
  },
  {
    content:
      "AI-powered WhatsApp commerce bot available 24/7 for all premium users",
  },
  {
    content: "True store ownership - your products, your customers, your control",
  },
];

const freePlanCard = {
  whatYouGetImmediately: [
    "Up to 50 product listings",
    "Basic AI product search",
    "WhatsApp commerce bot",
    "Basic store management",
  ],
  whatYouGetAfterLaunch: [
    "Everything mentioned above",
    "Basic API access (100 requests/month)",
    "Community support",
  ],
};

const premiumPlanCard = {
  whatYouGetImmediately: [
    "Everything in free plan +",
    "Unlimited product listings",
    "Advanced AI product search & recommendations",
    "Unlimited WhatsApp stores & team members",
    "Priority API access (10,000 requests/month)",
    "AI-powered WhatsApp commerce bot",
    "Advanced analytics & customer insights",
    "Real-time order management",
  ],
  whatYouGetAfterLaunch: [
    "Everything mentioned above",
    "Custom store limits",
    "White-label WhatsApp commerce options",
    "Enterprise security compliance",
    "Dedicated support channel",
  ],
};

const Pricing = () => {
  return (
    <>
      <main className="w-full  overflow-hidden flex flex-col items-center justify-center relative">
        <Header title="Secure File Storage for Web3" />
        <div className="flex flex-col bg-[#151515]/20 backdrop-blur-xl relative w-full ">
          <div className="h-full  pv relative">
            <div className=" py-8 border-b border-[#252525]">
              <motion.h2
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  type: "spring",
                  delay: 0.4,
                }}
                className="text-center text-3xl tracking-tight font-medium"
              >
                What makes Taja different?
              </motion.h2>
            </div>
            <div className=" w-full h-full flex flex-col gap-6  border-b border-[#252525]">
              <ul className="flex flex-col lg:flex-row [&>li]:w-full  [&>li]:p-6 divide-y lg:divide-y-0 lg:divide-x divide-[#252525] h-full ">
                {TajaFeatures.map((feature, index) => {
                  return (
                    <motion.li
                      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        type: "spring",
                        delay: 0.5 + index * 0.1,
                      }}
                      key={index}
                      className="flex flex-col gap-4 w-full flex-1 "
                    >
                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex gap-4">
                          <div className="text-6xl font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#a472ea] to-[#341e7b]">
                            {index + 1}
                          </div>
                          <h3 className="text-2xl font-medium">
                            {feature.title}
                          </h3>
                        </div>
                        {Array.isArray(feature.description) ? (
                          <div className="font-medium">
                            {feature.description.map(
                              (sentence, sentenceIndex) => (
                                <p key={sentenceIndex} className="mb-2">
                                  {sentence}
                                </p>
                              )
                            )}
                          </div>
                        ) : (
                          <p className="font-medium">{feature.description}</p>
                        )}
                      </div>
                      <div className="flex flex-col gap-2 w-full h-full">
                        <ul className="flex flex-col gap-3 w-full h-full pb-8">
                          {feature.features.map((feature, index) => {
                            return (
                              <li
                                key={index}
                                className="font- text-sm flex items-center gap-4"
                              >
                                <CornerDownRight className="size-4 flex-shrink-0 text-[#a472ea]" />
                                {feature}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="h-full  relative ">
            <div className="py-8 border-b border-[#252525]">
              <motion.h2
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  type: "spring",
                  delay: 0.8,
                }}
                className="text-center text-3xl tracking-tight font-medium"
              >
                Why choose Taja Premium?
              </motion.h2>
            </div>
            <div className="w-full border-b border-[#252525]">
              <div className="w-full max-w-2xl mx-auto border-b lg:border-b-0 lg:border-x border-[#252525] p-6 font-medium space-y-2 ">
                {whySub.map((sub, index) => {
                  return (
                    <motion.p
                      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        type: "spring",
                        delay: 0.9 + index * 0.1,
                      }}
                      key={index}
                      className="flex items-center gap-4"
                    >
                      <Target className="size-5 flex-shrink-0 text-[#a472ea]" />
                      {sub.content}
                    </motion.p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="relative border-b border-[#252525] lg:pb-10">
            <div className="flex flex-col gap-5 lg:gap-10 py-4 bg-[#151515]/20 backdrop-blur-xl h-full relative w-full overflow-hidden  px-4 lg:px-10">
              <div className="absolute inset-0 -top-72">
                <Image
                  src="/assets/layer1.svg"
                  alt="background"
                  fill
                  className=" w-full h-full  -z-10 opacity-90"
                />
              </div>
              <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6">
                <PricingCard />
                <SecondaryPricingCard />
              </div>
            </div>
          </div>
          <TestimonialsSection />
          <div className=" border-b border-[#252525] text-center py-4 font-bold px-4">
            For any doubts or queries, feel free to ping us at{" "}
            <Link
              href="mailto:support@taja.io"
              className="hover:underline bg-gradient-to-b from-[#a472ea] via-[#a472ea]/80 to-[#432ba0] bg-clip-text text-transparent"
            >
              support@taja.io
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Pricing;

const PricingCard = () => {
  return (
    <div className="py-2">
      <div className=" border-border-primary w-full mx-auto flex h-full">
        <div className="border-dashed border-border-primary w-full lg:w-max mx-auto relative h-full">
          <div className="w-full h-full lg:w-[500px] relative overflow-hidden mx-auto py-10 pb-14 flex flex-col rounded-3xl">
            <ShineBorder shineColor={["#7150E7", "#C89BFF", "#432BA0"]} />
            <Image
              src="/assets/card_bg.svg"
              alt="background"
              fill
              className="object-cover object-bottom w-full h-full absolute -z-10"
            />
            <div className="w-full border-dashed border-border-primary px-6 lg:px-10 pb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/assets/logo_var2.svg"
                  alt="background"
                  fill
                  className="object-cover size-full"
                />
              </div>
            </div>

            <div className="w-full border-dashed border-border-primary px-6 lg:px-10  py-4">
              <h2 className="text-6xl lg:text-[90px] lg:leading-[82px] tracking-tight font-semibold">
                Free
              </h2>
            </div>
            <div className="w-full border-dashed border-border-primary px-6 lg:px-10 py-4 ">
              <div className="">
                <Link href="#pricing" className="cursor-pointer z-30">
                  <PrimaryButton classname="w-full">
                    <Terminal />
                    Get Started
                  </PrimaryButton>
                </Link>
              </div>
            </div>
            <div className="w-full border-dashed border-border-primary px-6 lg:px-10 py-4 flex flex-col gap-4 flex-1">
              <h2 className="text-lg lg:text-xl tracking-tight text-left font-bold">
                What you get immediately:
              </h2>
              <div className="space-y-3 [&>p]:flex [&>p]:items-center [&>p]:gap-2 [&>p]:font-medium">
                {freePlanCard.whatYouGetImmediately.map((item, index) => {
                  return (
                    <p key={index}>
                      <Check className="w-5 flex-shrink-0" strokeWidth={4} />{" "}
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-full border-dashed border-border-primary px-6 lg:px-10 py-4 flex flex-col gap-4 h-[244px]">
              <h2 className="text-lg lg:text-xl tracking-tight text-left font-bold">
                What you get after the launch:
              </h2>
              <div className="space-y-3 [&>p]:flex [&>p]:items-center [&>p]:gap-2 [&>p]:font-medium">
                {freePlanCard.whatYouGetAfterLaunch.map((item, index) => {
                  return (
                    <p key={index}>
                      <Check className="w-5 flex-shrink-0" strokeWidth={4} />{" "}
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="bg-white mix-blend-plus-lighter absolute h-[100px] w-full blur-[50px] right-0 -bottom-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondaryPricingCard = () => {
  return (
    <div className="py-2">
      <div className=" border-border-primary w-full mx-auto flex h-full">
        <div className="border-dashed border-border-primary w-full lg:w-max mx-auto relative h-full">
          <div className=" w-full lg:w-[500px] relative overflow-hidden mx-auto py-10 pb-14 flex flex-col h-full rounded-3xl">
            <ShineBorder shineColor={["#7150E7", "#C89BFF", "#432BA0"]} />
            <Image
              src="/assets/card_bg.svg"
              alt="background"
              fill
              className="object-cover object-bottom w-full h-full absolute -z-10"
            />
            <div className="w-full border-dashed border-border-primary px-6 lg:px-10 pb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/assets/logo_var2.svg"
                  alt="background"
                  fill
                  className="object-cover size-full"
                />
              </div>
            </div>

            <div className="w-full border-dashed border-border-primary px-6 lg:px-10  py-4">
              <h2 className="text-6xl lg:text-[90px] lg:leading-[82px] tracking-tight font-semibold">
                $99 <span className="text-4xl">/ year</span>
              </h2>
            </div>
            <div className="w-full border-dashed border-border-primary px-6 lg:px-10 py-4 ">
              <Link
                target="_blanko"
                href="https://pages.razorpay.com/pl_R6WHnm15Fm98fI/view"
                className="cursor-pointer z-30"
              >
                <PrimaryButton classname="w-full max-w-[500px] mx-auto font-semibold">
                  Get Premium
                </PrimaryButton>
              </Link>
            </div>
            <div className="w-full border-dashed border-border-primary px-6 lg:px-10 py-4 flex flex-col gap-4 flex-1">
              <h2 className="text-lg lg:text-xl tracking-tight text-left font-bold">
                What you get immediately:
              </h2>
              <div className="space-y-3 [&>p]:flex [&>p]:items-center [&>p]:gap-2 [&>p]:font-medium">
                {premiumPlanCard.whatYouGetImmediately.map((item, index) => {
                  return (
                    <p key={index}>
                      <Check className="w-5 flex-shrink-0" strokeWidth={4} />{" "}
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-full border-dashed border-border-primary px-6 lg:px-10 py-4 flex flex-col gap-4">
              <h2 className="text-lg lg:text-xl tracking-tight text-left font-bold">
                What you get after the launch:
              </h2>
              <div className="space-y-3 [&>p]:flex [&>p]:items-center [&>p]:gap-2 [&>p]:font-medium">
                {premiumPlanCard.whatYouGetAfterLaunch.map((item, index) => {
                  return (
                    <p key={index}>
                      <Check className="w-5 flex-shrink-0" strokeWidth={4} />{" "}
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="bg-white mix-blend-plus-lighter absolute h-[100px] w-full blur-[50px] right-0 -bottom-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PremiumTestimonialCard = ({
  username = "Username",
  showPremium = true,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl">{username}</p>
      {showPremium && (
        <div className="bg-gradient-to-b from-[#ad84e7] via-[#986cd6] to-[#432d8e] bg-clip-text text-transparent">
          <p className="">Taja Premium</p>
        </div>
      )}
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      username: "Sarah Chen",
      content:
        "Taja Premium has revolutionized our e-commerce business. Our sales have increased 300% since we started selling through WhatsApp. Customers love the convenience of shopping directly in their chat, and the AI bot handles most inquiries automatically. The secure payment system gives our customers confidence, and we've never had a payment issue. Highly recommend!",
      column: 1,
    },
    {
      id: 2,
      username: "Marcus Rodriguez",
      content:
        "As a small business owner, Taja has been a game-changer. No need for expensive websites or complex e-commerce platforms - our customers can browse and buy directly through WhatsApp. The AI product search helps customers find exactly what they're looking for, and the automated order tracking keeps everyone informed. Our customer satisfaction has never been higher.",
      column: 1,
    },
    {
      id: 3,
      username: "Alex Thompson",
      content: (
        <div className="space-y-3 text-pretty">
          <p>
            Taja Premium has transformed our retail business. Here&apos;s
            why it's incredible:
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              WhatsApp-first approach - customers already use it daily
            </li>
            <li>
              AI product recommendations increased our average order value by 40%
            </li>
            <li>
              Real-time inventory updates prevent overselling
            </li>
            <li>
              Secure payments with instant confirmations
            </li>
            <li>
              Customer support automation saves us 10+ hours weekly
            </li>
            <li>
              Analytics help us understand customer behavior better
            </li>
            <li>
              No app downloads required - customers love the simplicity
            </li>
          </ul>
        </div>
      ),
      column: 2,
    },
    {
      id: 4,
      username: "Dr. Emily Watson",
      content:
        "Our medical supply business has seen incredible growth with Taja. Healthcare providers can order supplies directly through WhatsApp, and the AI bot handles product questions and inventory checks instantly. The secure payment system meets our compliance requirements, and order tracking ensures timely deliveries. Game-changing platform!",
      column: 3,
    },
    {
      id: 5,
      username: "James Park",
      content:
        "We switched from traditional e-commerce to Taja and our conversion rates doubled. Customers prefer shopping through WhatsApp conversations rather than navigating complex websites. The AI search by image feature is brilliant - customers just send a photo and find similar products instantly. The automated order management has streamlined our entire operation.",
      column: 3,
    },
  ];

  const groupedTestimonials = {
    1: testimonials.filter((t) => t.column === 1),
    2: testimonials.filter((t) => t.column === 2),
    3: testimonials.filter((t) => t.column === 3),
  };

  return (
    <div className=" text-white ">
      <Header title="What our Premium customers say about us" />
      <div className="border-b  border-[#252525] w-full min-h-[80dvh] grid grid-cols-1 lg:grid-cols-7">
        <div className="lg:col-span-2 flex flex-col font-medium divide-y divide-[#252525]">
          {groupedTestimonials[1].map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 lg:p-10 flex flex-col gap-6"
            >
              <PremiumTestimonialCard username={testimonial.username} />
              <div className="text-pretty">
                {typeof testimonial.content === "string"
                  ? testimonial.content
                  : testimonial.content}
              </div>
            </div>
          ))}
        </div>

        <div className="h-full border-y lg:border-x lg:border-y-0 border-[#252525] p-6 lg:p-10 mx-auto flex flex-col gap-6 flex-shrink-0 lg:col-span-3 font-medium">
          {groupedTestimonials[2].map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col gap-6">
              <PremiumTestimonialCard username={testimonial.username} />
              <div>
                {typeof testimonial.content === "string"
                  ? testimonial.content
                  : testimonial.content}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 flex flex-col font-medium divide-y divide-[#252525]">
          {groupedTestimonials[3].map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 lg:p-10 flex flex-col gap-6"
            >
              <PremiumTestimonialCard username={testimonial.username} />
              <div className="text-pretty">
                {typeof testimonial.content === "string"
                  ? testimonial.content
                  : testimonial.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
