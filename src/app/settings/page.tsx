// src/app/settings/page.tsx
'use client';

import { Settings as SettingsIcon, User, Bell, Lock } from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function SettingsPage() {
    return (
        <ProtectedRoute>
            <div className="container mx-auto px-4 py-8">
                <div className="flex items-center mb-8">
                    <SettingsIcon size={32} className="text-blue-500 ml-4" />
                    <h1 className="text-3xl font-bold text-gray-800">تنظیمات سیستم</h1>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* User Profile Settings */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="flex items-center mb-4">
                            <User size={24} className="text-blue-500 ml-3" />
                            <h2 className="text-xl font-semibold text-gray-800">
                                تنظیمات کاربری
                            </h2>
                        </div>
                        <p className="text-gray-600 mb-4">
                            مدیریت اطلاعات شخصی و تنظیمات حساب کاربری
                        </p>
                        <button className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition">
                            ویرایش پروفایل
                        </button>
                    </div>

                    {/* Notification Settings */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="flex items-center mb-4">
                            <Bell size={24} className="text-green-500 ml-3" />
                            <h2 className="text-xl font-semibold text-gray-800">
                                تنظیمات اعلان‌ها
                            </h2>
                        </div>
                        <p className="text-gray-600 mb-4">
                            مدیریت تنظیمات اعلان‌ها و هشدارها
                        </p>
                        <button className="w-full bg-green-50 text-green-600 py-2 rounded-lg hover:bg-green-100 transition">
                            مدیریت اعلان‌ها
                        </button>
                    </div>

                    {/* Security Settings */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="flex items-center mb-4">
                            <Lock size={24} className="text-red-500 ml-3" />
                            <h2 className="text-xl font-semibold text-gray-800">
                                تنظیمات امنیتی
                            </h2>
                        </div>
                        <p className="text-gray-600 mb-4">
                            مدیریت رمز عبور و تنظیمات حریم خصوصی
                        </p>
                        <button className="w-full bg-red-50 text-red-600 py-2 rounded-lg hover:bg-red-100 transition">
                            تغییر رمز عبور
                        </button>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}