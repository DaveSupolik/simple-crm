import { getContacts } from "@/lib/actions/contacts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ContactsList from "@/components/contacts/ContactsList";

export default async function ContactsPage() {
  const contacts = await getContacts();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kontakty</h1>
          <p className="text-gray-600 mt-1">
            Spravujte své kontakty a zákazníky
          </p>
        </div>
        <Link href="/dashboard/contacts/new">
          <Button>+ Nový kontakt</Button>
        </Link>
      </div>

      {contacts.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <div className="text-6xl mb-4">📇</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Zatím nemáte žádné kontakty
          </h3>
          <p className="text-gray-600 mb-6">
            Začněte přidáním vašeho prvního kontaktu
          </p>
          <Link href="/dashboard/contacts/new">
            <Button>Přidat první kontakt</Button>
          </Link>
        </div>
      ) : (
        <ContactsList contacts={contacts} />
      )}
    </div>
  );
}
