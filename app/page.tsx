import { redirect } from 'next/navigation';

export default function Home() {
  redirect('https://chaitanya-potfolio.vercel.app/');
  return <>Home Page</>;
}
