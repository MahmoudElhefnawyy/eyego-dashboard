'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { AppDispatch } from '../../lib/store';
import { login } from '../../lib/features/authSlice';
import { LogIn } from 'lucide-react';

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'candidate@eyego.com' && password === 'password123') {
      dispatch(login('Valued Candidate'));
      router.push('/dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-100">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-10 shadow-sm">
        <div className="text-center">
            <LogIn className="mx-auto h-12 w-auto text-primary-600" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-neutral-800">
                Sign in to your account
            </h2>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          {error && <p className="rounded-md bg-red-100 p-3 text-center text-sm font-medium text-red-600">{error}</p>}
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-600" htmlFor="email">Email address</label>
            <input
              id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="candidate@eyego.com" required
              className="w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-600" htmlFor="password">Password</label>
            <input
              id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="password123" required
              className="w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <button type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-3 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

