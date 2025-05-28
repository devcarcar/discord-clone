'use client';
import { redirect, useRouter } from 'next/navigation';

export default function DefaultStart() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          const condition = true;
          if (condition) {
            return router.push('/auth');
          } else {
            return router.push('/home');
          }
        }}
      >
        Enter chat
      </button>
    </div>
  );
}
