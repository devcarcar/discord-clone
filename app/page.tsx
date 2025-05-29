import { redirect, useRouter } from 'next/navigation';

export default function DefaultStart() {
  return redirect('/auth');
}
