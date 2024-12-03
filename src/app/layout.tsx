// src/app/layout.tsx
'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import '@/styles/globals.css';

const queryClient = new QueryClient();

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fa">
        <body>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
        </body>
        </html>
    );
}