import React from 'react';

export function Card({ children }) {
  return <div className="border rounded-2xl p-4 bg-white shadow">{children}</div>;
}

export function CardHeader({ children, className = '' }) {
  return <div className={`mb-2 ${className}`}>{children}</div>;
}

export function CardTitle({ children }) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
