// src/app/list/page.tsx
'use client';

import { useQuery } from 'react-query';
import axios from 'axios';
import { File, RefreshCw } from 'lucide-react';

export default function ListPage() {
    const { data, isLoading, error, refetch } = useQuery('posts', async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return data.slice(0, 10);
    });

    if (isLoading) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="animate-spin text-blue-500">
                <RefreshCw size={48} />
            </div>
        </div>
    );

    if (error) return (
        <div className="min-h-screen flex items-center justify-center bg-red-50">
            <div className="text-center">
                <p className="text-red-500 text-2xl mb-4">خطا در بارگذاری اطلاعات</p>
                <button
                    onClick={() => refetch()}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    تلاش مجدد
                </button>
            </div>
        </div>
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center mb-8">
                <File size={32} className="text-blue-500 ml-4" />
                <h1 className="text-3xl font-bold text-gray-800">لیست پست‌ها</h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map(post => (
                    <div
                        key={post.id}
                        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border-r-4 border-blue-500"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">
                            {post.title}
                        </h2>
                        <p className="text-gray-600 line-clamp-3">
                            {post.body}
                        </p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-sm text-blue-500">شناسه پست: {post.id}</span>
                            <button className="text-sm text-gray-500 hover:text-blue-500 transition">
                                مشاهده جزئیات
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}