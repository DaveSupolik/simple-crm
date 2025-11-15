import ContactForm from "@/components/contacts/ContactForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NewContactPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/contacts">
          <Button variant="outline" size="sm">
            ← Zpět
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Nový kontakt</h1>
          <p className="text-gray-600 mt-1">Přidejte nový kontakt do systému</p>
        </div>
      </div>

      <ContactForm mode="create" />
    </div>
  );
}
