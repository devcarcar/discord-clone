import { redirect } from 'next/navigation';

export default function DefaultStart() {
  return redirect('/auth');
}
