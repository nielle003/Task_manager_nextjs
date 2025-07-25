import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h2>Welcome to Task Manager</h2>
      <p>
        <Link href="/login"><span className="text-blue-500 hover:underline">Login</span></Link> to access your dashboard.
      </p>
    </section>
  );
}
