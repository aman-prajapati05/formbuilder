import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <Link href="/form">
        <div>Create New Form</div>
      </Link>
      <Link href="/myform">
        <div>View Your Forms</div>
      </Link>
    </div>
  );
}
