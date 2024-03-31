import React, { ReactNode } from "react";
import StreamVideoProvider from "@/providers/SteamClientProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visual Office",
  description: "Video conferencing app",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
