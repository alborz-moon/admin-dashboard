// src/components/Sidebar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    List,
    Settings,
    Home,
    LogOut,
    Lock
} from 'lucide-react';
import { checkAccess, logout } from '@/lib/auth';

const menuItems = [
    {
        href: '/',
        label: 'خانه',
        icon: Home,
        requireAdmin: false
    },
    {
        href: '/list',
        label: 'لیست',
        icon: List,
        requireAdmin: false
    },
    {
        href: '/settings',
        label: 'تنظیمات',
        icon: Settings,
        requireAdmin: true
    }
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const isAdmin = checkAccess();

    const handleLogout = () => {
        logout();
        window.location.href = '/';
    };

    return (
        <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} z-50`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute top-4 left-4 z-60 bg-blue-500 text-white p-2 rounded-full"
            >
                {isOpen ? '×' : '☰'}
            </button>

            <nav className="pt-16 px-4">
                {menuItems.map((item) => {
                    if (item.requireAdmin && !isAdmin) return null;

                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`
                flex items-center p-3 rounded-lg mb-2 transition-all duration-300
                ${isActive
                                ? 'bg-blue-100 text-blue-600'
                                : 'hover:bg-gray-100 text-gray-700'
                            }
              `}
                        >
                            <Icon size={24} className="ml-3" />
                            {isOpen && <span>{item.label}</span>}
                        </Link>
                    );
                })}

                <button
                    onClick={handleLogout}
                    className="
            flex items-center p-3 rounded-lg mt-4 w-full
            text-red-600 hover:bg-red-50 transition-all duration-300
          "
                >
                    <LogOut size={24} className="ml-3" />
                    {isOpen && <span>خروج</span>}
                </button>
            </nav>
        </div>
    );
}