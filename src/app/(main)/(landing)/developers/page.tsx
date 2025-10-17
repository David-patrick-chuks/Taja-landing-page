"use client";
import Footer from "@/components/landing-sections/footer";
import PrimaryButton from "@/components/ui/custom-button";
import Header from "@/components/ui/header";
import { motion } from "framer-motion";
import {
    Bell,
    Box,
    Boxes,
    Check,
    Code,
    Copy,
    CornerDownRight,
    Download,
    FileCode,
    Package,
    Rocket,
    Share2,
    Shield,
    Terminal,
    Trash2,
    Upload,
    Users,
    Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SDKOptions = [
  {
    id: 1,
    icon: <Code className="size-10" />,
    title: "React SDK",
    subtitle: "@taja/react-sdk",
    description:
      "Perfect for React and Next.js applications. Includes powerful hooks and context providers for seamless integration.",
    features: [
      "React hooks (useTaja, useMyStore, etc.)",
      "TypeScript support with full type definitions",
      "SSR support for Next.js applications",
      "Automatic state management",
      "Real-time WebSocket updates",
    ],
    installation: "npm install @taja/react-sdk",
    codeExample: `import { TajaProvider, useTaja } from '@taja/react-sdk';

function App() {
  return (
    <TajaProvider apiKey={process.env.NEXT_PUBLIC_TAJA_API_KEY}>
      <YourApp />
    </TajaProvider>
  );
}

function CommerceButton() {
  const { 
    listProduct, 
    searchProducts, 
    processOrder, 
    getStoreAnalytics,
    loading 
  } = useTaja();

  const handleListProduct = async (productData) => {
    const result = await listProduct({
      name: productData.name,
      price: productData.price,
      images: productData.images,
      description: productData.description,
      category: productData.category,
    });
    console.log('Product listed:', result.productId);
  };

  const handleSearchProducts = async (searchQuery) => {
    const results = await searchProducts({
      query: searchQuery,
      filters: { category: 'electronics', maxPrice: 100 }
    });
    console.log('Found products:', results);
  };

  const handleProcessOrder = async (orderData) => {
    const result = await processOrder({
      productId: orderData.productId,
      customerId: orderData.customerId,
      paymentMethod: 'whatsapp'
    });
    console.log('Order processed:', result.orderId);
  };

  return (
    <div className="space-y-4">
      <button onClick={() => handleListProduct(productData)} disabled={loading}>
        {loading ? 'Listing...' : 'List Product'}
      </button>
      <button onClick={() => handleSearchProducts('vintage jacket')} disabled={loading}>
        {loading ? 'Searching...' : 'Search Products'}
      </button>
      <button onClick={() => handleProcessOrder(orderData)} disabled={loading}>
        {loading ? 'Processing...' : 'Process Order'}
    </button>
    </div>
  );
}`,
  },
  {
    id: 2,
    icon: <Box className="size-10" />,
    title: "Vue SDK",
    subtitle: "@taja/vue-sdk",
    description:
      "Built for Vue.js and Nuxt applications with Composition API. Reactive state management and seamless Vue integration.",
    features: [
      "Vue composables with Composition API",
      "TypeScript support included",
      "SSR support for Nuxt applications",
      "Reactive state with Vue's reactivity system",
      "Real-time updates with WebSocket",
    ],
    installation: "npm install @taja/vue-sdk",
    codeExample: `<script setup>
import { useTaja } from '@taja/vue-sdk';

const { 
  listProduct, 
  searchProducts, 
  processOrder,
  getStoreAnalytics,
  loading 
} = useTaja();

const handleListProduct = async (productData) => {
  const result = await listProduct({
    name: productData.name,
    price: productData.price,
    images: productData.images,
    description: productData.description,
    category: productData.category,
  });
  console.log('Product listed:', result.productId);
};

const handleSearchProducts = async (searchQuery) => {
  const results = await searchProducts({
    query: searchQuery,
    filters: { category: 'electronics', maxPrice: 100 }
  });
  console.log('Found products:', results);
};
};
</script>

<template>
  <button @click="handleListProduct(productData)" :disabled="loading">
    {{ loading ? 'Listing...' : 'List Product' }}
  </button>
  <button @click="handleSearchProducts('vintage jacket')" :disabled="loading">
    {{ loading ? 'Searching...' : 'Search Products' }}
  </button>
</template>`,
  },
  {
    id: 3,
    icon: <Terminal className="size-10" />,
    title: "CDN Bundle",
    subtitle: "Vanilla JavaScript",
    description:
      "No build step required! Perfect for any HTML page, WordPress, PHP, or vanilla JavaScript projects.",
    features: [
      "Works anywhere - HTML, WordPress, PHP",
      "No build tools or bundlers needed",
      "Global Taja class available",
      "TypeScript definitions included",
      "Real-time WebSocket support",
    ],
    installation:
      '<script src="https://cdn.jsdelivr.net/npm/@taja/cdn@latest/dist/taja.min.js"></script>',
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/@taja/cdn@latest/dist/taja.min.js"></script>
</head>
<body>
  <input type="file" id="fileInput" />
  <button onclick="upload()">Upload</button>

  <script>
    const taja = new Taja({
      apiKey: 'YOUR_API_KEY',
      realtime: true,
    });

    async function handleCommerce() {
      // List a product
      const productResult = await taja.store.listProduct({
        name: "Vintage Jacket",
        price: 45,
        images: [document.getElementById('imageInput').files[0]],
        description: "Beautiful vintage jacket in excellent condition",
        category: "clothing"
      });
      console.log('Product listed:', productResult.productId);

      // Search products
      const searchResults = await taja.store.searchProducts({
        query: "vintage jacket",
        filters: { category: "clothing", maxPrice: 100 }
      });
      console.log('Found products:', searchResults);

      // Process an order
      const orderResult = await taja.store.processOrder({
        productId: productResult.productId,
        customerId: "customer123",
        paymentMethod: "whatsapp"
      });
      console.log('Order processed:', orderResult.orderId);
    }
  </script>
</body>
</html>`,
  },
];

const APIOperations = [
  {
    icon: <Upload className="size-5" />,
    name: "List Product",
    description: "Add products to your WhatsApp store with images and details",
  },
  {
    icon: <Download className="size-5" />,
    name: "Search Products",
    description: "AI-powered product search by image, text, or voice",
  },
  {
    icon: <Share2 className="size-5" />,
    name: "Process Order",
    description: "Handle customer orders and payments through WhatsApp",
  },
  {
    icon: <FileCode className="size-5" />,
    name: "Manage Store",
    description: "View analytics, manage inventory, and update product info",
  },
  {
    icon: <Users className="size-5" />,
    name: "Customer Support",
    description: "AI-powered chatbot for customer inquiries and support",
  },
  {
    icon: <Bell className="size-5" />,
    name: "Order Notifications",
    description: "Real-time order updates and status notifications",
  },
  {
    icon: <Shield className="size-5" />,
    name: "Secure Payments",
    description: "End-to-end encrypted payment processing and receipts",
  },
  {
    icon: <Trash2 className="size-5" />,
    name: "Remove Product",
    description: "Remove products from your store or mark as unavailable",
  },
  {
    icon: <Package className="size-5" />,
    name: "Inventory Management",
    description: "Track stock levels and manage product availability",
  },
  {
    icon: <Rocket className="size-5" />,
    name: "Store Analytics",
    description: "Get insights on sales, customer behavior, and performance",
  },
  {
    icon: <Check className="size-5" />,
    name: "Order Tracking",
    description: "Track order status and provide updates to customers",
  },
  {
    icon: <Zap className="size-5" />,
    name: "AI Recommendations",
    description: "Generate product recommendations for customers",
  },
];

const WhyTajaKit = [
  {
    content:
      "API Key-Based Authentication - Your WhatsApp store is automatically tied to your API key, no complex setup needed",
  },
  {
    content:
      "Real-time Updates - Built-in WebSocket support for instant order notifications and store updates",
  },
  {
    content:
      "Type-Safe - Full TypeScript support with autocomplete and type definitions for commerce operations",
  },
  {
    content:
      "Production Ready - Battle-tested code with error handling and best practices for WhatsApp commerce",
  },
];

const GetStartedSteps = [
  {
    step: 1,
    title: "Get Your API Key",
    description:
      "Get your API key from the Taja platform and start building WhatsApp commerce features.",
    link: "#sdks",
    linkText: "View SDKs",
  },
  {
    step: 2,
    title: "Install the SDK",
    description:
      "Choose your preferred SDK (React, Vue, or CDN) and install it in your project.",
    link: "#sdks",
    linkText: "View SDKs",
  },
  {
    step: 3,
    title: "Start Building",
    description:
      "Follow our code examples and start integrating WhatsApp commerce into your application.",
    link: "#examples",
    linkText: "See Examples",
  },
];

const Developers = () => {
  return (
    <>
      <main className="w-full overflow-hidden flex flex-col items-center justify-center relative">
        <Header title="Taja Kit - Developer Documentation" />
        <div className="flex flex-col bg-[#151515]/20 backdrop-blur-xl relative w-full">
          {/* Introduction Section */}
          <div className="h-full relative">
            <div className="py-8 border-b border-[#252525]">
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
                Three SDKs, One Powerful API
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  type: "spring",
                  delay: 0.5,
                }}
                className="text-center text-lg mt-4 text-gray-400 max-w-2xl mx-auto px-4"
              >
                Integrate WhatsApp commerce into any application with our comprehensive SDKs
              </motion.p>
            </div>

            {/* Why Taja Kit */}
            <div className="w-full border-b border-[#252525]">
              <div className="w-full max-w-3xl mx-auto border-b lg:border-b-0 lg:border-x border-[#252525] p-6 font-medium space-y-3">
                {WhyTajaKit.map((item, index) => (
                  <motion.p
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      type: "spring",
                      delay: 0.6 + index * 0.1,
                    }}
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <Zap className="size-5 flex-shrink-0 text-[#a472ea]" />
                    {item.content}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>

          {/* Available SDKs Section */}
          <div className="h-full relative" id="sdks">
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
                Choose Your SDK
              </motion.h2>
            </div>

            <div className="w-full h-full flex flex-col gap-6 border-b border-[#252525]">
              {SDKOptions.map((sdk, index) => (
                <SDKCard key={sdk.id} sdk={sdk} index={index} />
              ))}
            </div>
          </div>

          {/* API Operations */}
          <div className="h-full relative">
            <div className="py-8 border-b border-[#252525]">
              <motion.h2
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  type: "spring",
                  delay: 1.0,
                }}
                className="text-center text-3xl tracking-tight font-medium"
              >
                Complete API Coverage
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-b border-[#252525]">
              {APIOperations.map((operation, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    type: "spring",
                    delay: 1.1 + index * 0.05,
                  }}
                  key={index}
                  className="p-6 border-b md:border-r lg:border-r-0 lg:odd:border-r xl:border-r-0 xl:odd:border-r border-[#252525] flex flex-col gap-3"
                >
                  <div className="text-[#a472ea]">{operation.icon}</div>
                  <h3 className="text-lg font-semibold">{operation.name}</h3>
                  <p className="text-sm text-gray-400">
                    {operation.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Get Started Section */}
          <div className="h-full relative">
            <div className="py-8 border-b border-[#252525]">
              <motion.h2
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  type: "spring",
                  delay: 1.2,
                }}
                className="text-center text-3xl tracking-tight font-medium"
              >
                Get Started in 3 Steps
              </motion.h2>
            </div>

            <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[#252525] border-b border-[#252525]">
              {GetStartedSteps.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    type: "spring",
                    delay: 1.3 + index * 0.1,
                  }}
                  key={index}
                  className="flex-1 p-6 lg:p-10 flex flex-col gap-4"
                >
                  <div className="text-6xl font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#a472ea] to-[#341e7b]">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-medium">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                  <Link href={item.link}>
                    <PrimaryButton classname="w-full lg:w-auto">
                      <Rocket className="size-4" />
                      {item.linkText}
                    </PrimaryButton>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="h-full relative">
            <div className="py-8 border-b border-[#252525]">
              <motion.h2
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  type: "spring",
                  delay: 1.6,
                }}
                className="text-center text-3xl tracking-tight font-medium"
              >
                Documentation & Resources
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:p-10 border-b border-[#252525]">
              {[
                {
                  title: "Quick Reference",
                  description: "Copy-paste examples for common operations",
                  icon: <FileCode className="size-6" />,
                  link: "#examples",
                },
                {
                  title: "Advanced Examples",
                  description:
                    "Production-ready patterns and complex use cases",
                  icon: <Boxes className="size-6" />,
                  link: "#sdks",
                },
                {
                  title: "API Documentation",
                  description: "Complete API reference with all methods",
                  icon: <Code className="size-6" />,
                  link: "#sdks",
                },
                {
                  title: "GitHub Repository",
                  description: "View source code and contribute",
                  icon: <Package className="size-6" />,
                  link: "https://github.com/taja",
                  external: true,
                },
                {
                  title: "NPM Packages",
                  description: "Install SDKs from NPM registry",
                  icon: <Download className="size-6" />,
                  link: "https://www.npmjs.com/search?q=%40taja",
                  external: true,
                },
                {
                  title: "Community Support",
                  description: "Get help from the community on Discord",
                  icon: <Users className="size-6" />,
                  link: "https://discord.gg/taja",
                  external: true,
                },
              ].map((resource, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    type: "spring",
                    delay: 1.7 + index * 0.05,
                  }}
                  key={index}
                >
                  <Link
                    href={resource.link}
                    target={resource.external ? "_blank" : undefined}
                    rel={resource.external ? "noopener noreferrer" : undefined}
                    className="block p-6 border border-[#252525] rounded-lg hover:border-[#a472ea] transition-colors group"
                  >
                    <div className="text-[#a472ea] mb-4 group-hover:scale-110 transition-transform">
                      {resource.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-[#a472ea] transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {resource.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="border-b border-[#252525] text-center py-8 px-4">
            <h3 className="text-2xl font-bold mb-4">Ready to Build?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join developers building WhatsApp commerce applications with
              Taja Kit. Get your API key and start integrating today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#sdks">
                <PrimaryButton classname="min-w-[200px]">
                  <Terminal />
                  Get Started
                </PrimaryButton>
              </Link>
              <Link
                href="https://github.com/taja"
                target="_blank"
                className="text-[#a472ea] hover:underline font-semibold flex items-center gap-2"
              >
                <Package className="size-5" />
                View on GitHub
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="border-b border-[#252525] text-center py-4 font-bold px-4">
            Need help? Contact us at{" "}
            <Link
              href="mailto:developers@taja.io"
              className="hover:underline bg-gradient-to-b from-[#a472ea] via-[#a472ea]/80 to-[#432ba0] bg-clip-text text-transparent"
            >
              developers@taja.io
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Developers;

const SDKCard = ({ sdk, index }: { sdk: typeof SDKOptions[0]; index: number }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        delay: 0.9 + index * 0.15,
      }}
      className="border-b border-[#252525] last:border-b-0"
    >
      <div className="p-6 lg:p-10 flex flex-col gap-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="text-[#a472ea]">{sdk.icon}</div>
            <div>
              <h3 className="text-2xl font-semibold">{sdk.title}</h3>
              <p className="text-gray-400 font-mono text-sm">{sdk.subtitle}</p>
            </div>
          </div>
          <p className="text-gray-300">{sdk.description}</p>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-lg">Features:</h4>
          <ul className="flex flex-col gap-2">
            {sdk.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm">
                <CornerDownRight className="size-4 flex-shrink-0 text-[#a472ea]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Installation */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-lg">Installation:</h4>
          <div className="relative">
            <div className="bg-[#0a0a0a] border border-[#252525] rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <code className="text-[#a472ea]">{sdk.installation}</code>
            </div>
            <button
              onClick={() => copyToClipboard(sdk.installation)}
              className="absolute top-2 right-2 p-2 rounded-md bg-[#1a1a1a] hover:bg-[#252525] border border-[#252525] transition-colors"
              title="Copy to clipboard"
            >
              {copied ? (
                <Check className="size-4 text-green-500" />
              ) : (
                <Copy className="size-4 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Code Example */}
        <div className="flex flex-col gap-3" id="examples">
          <h4 className="font-semibold text-lg">Quick Start Example:</h4>
          <div className="relative">
            <div className="bg-[#0a0a0a] border border-[#252525] rounded-lg p-4 font-mono text-xs overflow-x-auto max-h-96 overflow-y-auto">
              <pre className="text-gray-300">
                <code>{sdk.codeExample}</code>
              </pre>
            </div>
            <button
              onClick={() => copyToClipboard(sdk.codeExample)}
              className="absolute top-2 right-2 p-2 rounded-md bg-[#1a1a1a] hover:bg-[#252525] border border-[#252525] transition-colors"
              title="Copy code"
            >
              {copied ? (
                <Check className="size-4 text-green-500" />
              ) : (
                <Copy className="size-4 text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

