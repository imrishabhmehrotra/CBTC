import React from 'react';
import Header from '../components/Header';
import '@/app/globals.css';

export const metadata = {
  title: 'To-Do App',
  description: 'todo app for your daily work, this is made by ayush mehrotra',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
            <Header />
            {children}
      </body>
    </html>
  );
}
