import Link from "next/link";
import type { ReactNode } from "react";
import { Card, CardContent } from "../../components/ui/Card";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="space-y-8">
            {/* Dashboard Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Manage your tasks and stay organized
                </p>
            </div>

            {/* Navigation */}
            <Card>
                <CardContent className="py-4">
                    <nav className="flex flex-wrap gap-4">
                        <Link
                            href="/dashboard/tasks"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800 dark:hover:bg-blue-900/30 transition-colors"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            View All Tasks
                        </Link>
                        <Link
                            href="/dashboard/tasks/new"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Create New Task
                        </Link>
                    </nav>
                </CardContent>
            </Card>

            {/* Main Content */}
            <div>{children}</div>
        </div>
    );
}