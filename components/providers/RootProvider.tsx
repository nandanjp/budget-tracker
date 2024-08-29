"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    );
};

export default RootProvider;
