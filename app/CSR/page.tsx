'use client'
// page.tsx
import dynamic from 'next/dynamic'

const ClientRenderingDemo = dynamic(() => import("./clientRenderingDemo"), {
  ssr: false,
});

export default function Page() {
    return <ClientRenderingDemo />;
}