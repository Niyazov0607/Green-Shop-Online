"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";

export const QueryProvider = ({ children }: { children: ReactNode }) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: 3,
                        staleTime: 1000 * 60 * 5, // 5 minutes
                        // @ts-ignore
                        cacheTime: 1000 * 60 * 10, // 10 minutes
                        refetchOnWindowFocus: true,
                        enabled: true,
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
