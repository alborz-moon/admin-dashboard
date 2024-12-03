// src/lib/auth.ts
export const checkAccess = (requiredRole: string = 'admin'): boolean => {
    if (typeof window !== 'undefined') {
        const userRole = localStorage.getItem('userRole') || 'guest';
        return userRole === requiredRole;
    }
    return false;
};

export const login = (role: string = 'guest'): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('userRole', role);
    }
};

export const logout = (): void => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('userRole');
    }
};