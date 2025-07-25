'use client';

import { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getTask, updateTask } from '../../../../../../lib/tasks';
import { Card, CardContent, CardHeader } from '../../../../../components/ui/Card';
import { Input } from '../../../../../components/ui/Input';
import { Button } from '../../../../../components/ui/Button';

export default function EditTaskPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const task = getTask(resolvedParams.id);
    const [title, setTitle] = useState(task ? task.title : '');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await updateTask(resolvedParams.id, title);
            router.push(`/dashboard/tasks/${resolvedParams.id}`);
        } catch (error) {
            console.error('Failed to update task:', error);
        } finally {
            setIsSubmitting(false);
        }
    }

    if (!task) {
        return (
            <div className="max-w-2xl mx-auto">
                <Card>
                    <CardContent className="py-12">
                        <div className="text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20.5a7.962 7.962 0 01-5.657-2.343m0 0L9.172 16.172m0 0c.661.659 1.611.659 2.172 0s1.611.659 2.172 0c.661.659 1.611.659 2.172 0" />
                            </svg>
                            <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Task not found</h3>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                The task you are trying to edit does not exist or has been deleted.
                            </p>
                            <div className="mt-6">
                                <Link href="/dashboard/tasks">
                                    <Button variant="secondary">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                        Back to Tasks
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-sm text-gray-500">
                    <li>
                        <Link href="/dashboard/tasks" className="hover:text-gray-700 dark:hover:text-gray-300">
                            Tasks
                        </Link>
                    </li>
                    <li>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </li>
                    <li>
                        <Link href={`/dashboard/tasks/${resolvedParams.id}`} className="hover:text-gray-700 dark:hover:text-gray-300">
                            {task.title}
                        </Link>
                    </li>
                    <li>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </li>
                    <li className="text-gray-900 dark:text-white font-medium">
                        Edit
                    </li>
                </ol>
            </nav>

            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Task</h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Update the details of your task.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">Task Details</h2>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Task Title
                            </label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                placeholder="Enter task title..."
                                className="w-full"
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="flex items-center justify-end space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <Link href={`/dashboard/tasks/${resolvedParams.id}`}>
                                <Button
                                    type="button"
                                    variant="secondary"
                                    disabled={isSubmitting}
                                >
                                    Cancel
                                </Button>
                            </Link>
                            <Button
                                type="submit"
                                disabled={isSubmitting || !title.trim()}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Updating...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Update Task
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}