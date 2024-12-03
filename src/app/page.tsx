// src/app/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/lib/auth';
import { User, LogIn } from 'lucide-react';

export default function Home() {
    const [role, setRole] = useState('guest');
    const router = useRouter();

    const handleLogin = () => {
        login(role);
        router.push('/list');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div className="p-8">
                    <div className="flex justify-center mb-6">
                        <User size={64} className="text-blue-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        ورود به سیستم
                    </h1>
                    <div className="space-y-4">
                        <div className="relative">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                                انتخاب نقش
                            </label>
                            <div className="relative">
                                <select
                                    id="role"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                                >
                                    <option value="guest">کاربر عادی</option>
                                    <option value="admin">مدیر سیستم</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={handleLogin}
                            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center space-x-2 group"
                        >
                            <span>ورود</span>
                            <LogIn size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}