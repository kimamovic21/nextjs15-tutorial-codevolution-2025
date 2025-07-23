'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import '../globals.css';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
];

const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  const pathname = usePathname();

  const [input, setInput] = useState('');

  return (

    <div className='p-2 bg-gray-200 text-black'>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='border border-black rounded-sm py-1 px-2'
        />
      </div>

      <header className='flex gap-2'>
        {navLinks?.map((link) => {
          const isActive = pathname === link.href || (pathname.startsWith(link.href));

          return (
            <Link
              key={link.name}
              href={link.href}
              className={isActive ? 'font-bold' : 'text-blue-500 underline'}
            >
              {link.name}
            </Link>
          );
        })}
      </header>
      {children}
    </div>
  );
};

export default AuthLayout;