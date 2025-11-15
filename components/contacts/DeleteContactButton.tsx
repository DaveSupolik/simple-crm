"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteContact } from "@/lib/actions/contacts";
import { Button } from "@/components/ui/button";

interface DeleteContactButtonProps {
  contactId: string;
}

export default function DeleteContactButton({
  contactId,
}: DeleteContactButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteContact(contactId);
      router.push("/dashboard/contacts");
      router.refresh();
    } catch (error) {
      console.error("Chyba při mazání:", error);
      alert("Nepodařilo se smazat kontakt");
    } finally {
      setLoading(false);
    }
  };

  if (showConfirm) {
    return (
      <div className="flex gap-2">
        <Button
          variant="destructive"
          onClick={handleDelete}
          disabled={loading}
          size="sm"
        >
          {loading ? "Mazání..." : "Potvrdit"}
        </Button>
        <Button
          variant="outline"
          onClick={() => setShowConfirm(false)}
          disabled={loading}
          size="sm"
        >
          Zrušit
        </Button>
      </div>
    );
  }

  return (
    <Button variant="destructive" onClick={() => setShowConfirm(true)}>
      Smazat
    </Button>
  );
}
