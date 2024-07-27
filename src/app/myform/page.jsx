"use client"

import FormList from "../components/FormList";
import { useRequireAuth } from "../hooks/useRequireAuth";

export default function FormListPage() {
  const user = useRequireAuth();

  if (!user) {
    return null; // or a loading indicator
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Your Forms</h1>
      <FormList />
    </div>
  );
}
// 