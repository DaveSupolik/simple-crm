import { getContact } from "@/lib/actions/contacts";
import ContactForm from "@/components/contacts/ContactForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

interface EditContactPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditContactPage({
  params,
}: EditContactPageProps) {
  const { id } = await params;

  let contact;
  try {
    contact = await getContact(id);
  } catch (error) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href={`/dashboard/contacts/${contact.id}`}>
          <Button variant="outline" size="sm">
            ← Zpět
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Upravit kontakt</h1>
          <p className="text-gray-600 mt-1">{contact.name}</p>
        </div>
      </div>

      <ContactForm contact={contact} mode="edit" />
    </div>
  );
}
