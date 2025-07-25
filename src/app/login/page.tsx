'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    function handleLogin(e: React.FormEvent) {
        e.preventDefault();

        router.push(`/dashboard?user=${encodeURIComponent(username)}`);
    }

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <label>
                username:
                <input value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                Password:
                <input value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </label>

            <button type="submit">Login</button>
        </form>
    );
}