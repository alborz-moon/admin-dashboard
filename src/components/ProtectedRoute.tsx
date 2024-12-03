// src/components/ProtectedRoute.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { checkAccess } from '@/lib/auth';
import Layout from '@/components/Layout';
import ProtectedRoute from '@/components/ProtectedRoute';
interface ProtectedRouteProps {
    children: React.ReactNode;
    requiredRole?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
                                                           children,
                                                           requiredRole = 'admin'
                                                       }) => {
    const router = useRouter();

    useEffect(() => {
        if (!checkAccess(requiredRole)) {
            router.push('/');
        }
    }, [requiredRole]);

    return checkAccess(requiredRole) ? <>{children}</> : null;
};

export default ProtectedRoute;