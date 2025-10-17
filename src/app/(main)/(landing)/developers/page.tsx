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
    subtitle: "@blockroll/react-sdk",
    description:
      "Perfect for React and Next.js applications. Includes powerful hooks and context providers for seamless integration.",
    features: [
      "React hooks (useBlockRoll, useMyFiles, etc.)",
      "TypeScript support with full type definitions",
      "SSR support for Next.js applications",
      "Automatic state management",
      "Real-time WebSocket updates",
    ],
    installation: "npm install @blockroll/react-sdk",
    codeExample: `import { BlockRollProvider, useBlockRoll } from '@blockroll/react-sdk';

function App() {
  return (
    <BlockRollProvider apiKey={process.env.NEXT_PUBLIC_BLOCKROLL_API_KEY}>
      <YourApp />
    </BlockRollProvider>
  );
}

function UploadButton() {
  const { uploadFile, loading } = useBlockRoll();

  const handleUpload = async (file: File) => {
    const result = await uploadFile({
      file,
      accessType: 'private',
      encryption: true,
    });
    console.log('Uploaded:', result.fileId);
  };

  return (
    <button onClick={() => handleUpload(file)} disabled={loading}>
      {loading ? 'Uploading...' : 'Upload File'}
    </button>
  );
}`,
  },
  {
    id: 2,
    icon: <Box className="size-10" />,
    title: "Vue SDK",
    subtitle: "@blockroll/vue-sdk",
    description:
      "Built for Vue.js and Nuxt applications with Composition API. Reactive state management and seamless Vue integration.",
    features: [
      "Vue composables with Composition API",
      "TypeScript support included",
      "SSR support for Nuxt applications",
      "Reactive state with Vue's reactivity system",
      "Real-time updates with WebSocket",
    ],
    installation: "npm install @blockroll/vue-sdk",
    codeExample: `<script setup>
import { useBlockRoll } from '@blockroll/vue-sdk';

const { uploadFile, loading } = useBlockRoll();

const handleUpload = async (file) => {
  const result = await uploadFile({
    file,
    accessType: 'private',
    encryption: true,
  });
  console.log('Uploaded:', result.fileId);
};
</script>

<template>
  <button @click="handleUpload(file)" :disabled="loading">
    {{ loading ? 'Uploading...' : 'Upload File' }}
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
      "Global BlockRoll class available",
      "TypeScript definitions included",
      "Real-time WebSocket support",
    ],
    installation:
      '<script src="https://cdn.jsdelivr.net/npm/@blockroll/cdn@latest/dist/blockroll.min.js"></script>',
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/@blockroll/cdn@latest/dist/blockroll.min.js"></script>
</head>
<body>
  <input type="file" id="fileInput" />
  <button onclick="upload()">Upload</button>

  <script>
    const blockroll = new BlockRoll({
      apiKey: 'YOUR_API_KEY',
      realtime: true,
    });

    async function upload() {
      const file = document.getElementById('fileInput').files[0];
      const result = await blockroll.files.upload({
        file,
        accessType: 'private',
        encryption: true,
      });
      console.log('Uploaded:', result.fileId);
    }
  </script>
</body>
</html>`,
  },
];

const APIOperations = [
  {
    icon: <Upload className="size-5" />,
    name: "Upload File",
    description: "Upload files with client-side encryption",
  },
  {
    icon: <Download className="size-5" />,
    name: "Download File",
    description: "Download and decrypt files securely",
  },
  {
    icon: <Share2 className="size-5" />,
    name: "Share File",
    description: "Share files by wallet address with permissions",
  },
  {
    icon: <FileCode className="size-5" />,
    name: "List Files",
    description: "Get all files with pagination and filters",
  },
  {
    icon: <Users className="size-5" />,
    name: "Workspaces",
    description: "Create and manage team workspaces",
  },
  {
    icon: <Bell className="size-5" />,
    name: "Notifications",
    description: "Real-time notifications via WebSocket",
  },
  {
    icon: <Shield className="size-5" />,
    name: "Revoke Access",
    description: "Revoke file access from any wallet",
  },
  {
    icon: <Trash2 className="size-5" />,
    name: "Delete File",
    description: "Permanently delete files from storage",
  },
];

const WhyBlockRollKit = [
  {
    content:
      "API Key-Based Authentication - Your wallet is automatically tied to your API key, no need to pass wallet addresses",
  },
  {
    content:
      "Real-time Updates - Built-in WebSocket support for instant notifications and file updates",
  },
  {
    content:
      "Type-Safe - Full TypeScript support with autocomplete and type definitions",
  },
  {
    content:
      "Production Ready - Battle-tested code with error handling and best practices",
  },
];

const GetStartedSteps = [
  {
    step: 1,
    title: "Get Your API Key",
    description:
      "Sign in to your BlockRoll dashboard and generate an API key from the SDK settings.",
    link: "/dashboard/sdk",
    linkText: "Go to Dashboard",
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
      "Follow our code examples and start integrating secure file storage into your application.",
    link: "#examples",
    linkText: "See Examples",
  },
];

const Developers = () => {
  return (
    <>
      <main className="w-full overflow-hidden flex flex-col items-center justify-center relative">
        <Header title="BlockRoll Kit - Developer Documentation" />
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
                Integrate blockchain-based secure file storage into any
                application with our comprehensive SDKs
              </motion.p>
            </div>

            {/* Why BlockRoll Kit */}
            <div className="w-full border-b border-[#252525]">
              <div className="w-full max-w-3xl mx-auto border-b lg:border-b-0 lg:border-x border-[#252525] p-6 font-medium space-y-3">
                {WhyBlockRollKit.map((item, index) => (
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-[#252525]">
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
                  className="p-6 border-b md:border-r lg:border-r-0 lg:odd:border-r border-[#252525] flex flex-col gap-3"
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
                  link: "/dashboard/sdk",
                },
                {
                  title: "GitHub Repository",
                  description: "View source code and contribute",
                  icon: <Package className="size-6" />,
                  link: "https://github.com/blockroll",
                  external: true,
                },
                {
                  title: "NPM Packages",
                  description: "Install SDKs from NPM registry",
                  icon: <Download className="size-6" />,
                  link: "https://www.npmjs.com/search?q=%40blockroll",
                  external: true,
                },
                {
                  title: "Community Support",
                  description: "Get help from the community on Discord",
                  icon: <Users className="size-6" />,
                  link: "https://discord.gg/blockroll",
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
              Join developers building secure, decentralized applications with
              BlockRoll Kit. Get your API key and start integrating today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard/sdk">
                <PrimaryButton classname="min-w-[200px]">
                  <Terminal />
                  Get API Key
                </PrimaryButton>
              </Link>
              <Link
                href="https://github.com/blockroll"
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
              href="mailto:developers@blockroll.io"
              className="hover:underline bg-gradient-to-b from-[#a472ea] via-[#a472ea]/80 to-[#432ba0] bg-clip-text text-transparent"
            >
              developers@blockroll.io
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

