'use client';

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

  return (
    <html lang='en'>
      <body>
        <div className='p-2 bg-gray-200 text-black'>
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
      </body>
    </html>
  );
};

export default AuthLayout;