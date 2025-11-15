import { getContact } from "@/lib/actions/contacts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import DeleteContactButton from "@/components/contacts/DeleteContactButton";
import { notFound } from "next/navigation";
import type { Contact } from "@/lib/types/database.types";

interface ContactDetailPageProps {
  params: Promise<{ id: string }>;
}

const statusLabels: Record<Contact["status"], string> = {
  lead: "Lead",
  prospect: "Prospect",
  customer: "Zákazník",
};

const statusColors: Record<Contact["status"], string> = {
  lead: "bg-blue-100 text-blue-800",
  prospect: "bg-yellow-100 text-yellow-800",
  customer: "bg-green-100 text-green-800",
};

export default async function ContactDetailPage({
  params,
}: ContactDetailPageProps) {
  const { id } = await params;

  let contact: Contact;
  try {
    contact = await getContact(id);
  } catch (error) {
    notFound();
  }

  if (!contact) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/contacts">
            <Button variant="outline" size="sm">
              ← Zpět na kontakty
            </Button>
          </Link>
        </div>
        <div className="flex gap-2">
          <Link href={`/dashboard/contacts/${contact.id}/edit`}>
            <Button variant="outline">Upravit</Button>
          </Link>
          <DeleteContactButton contactId={contact.id} />
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-3xl">{contact.name}</CardTitle>
              {contact.company && (
                <p className="text-lg text-gray-600 mt-2">{contact.company}</p>
              )}
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                statusColors[contact.status]
              }`}
            >
              {statusLabels[contact.status]}
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {contact.email && (
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-blue-600 hover:underline flex items-center gap-2"
                >
                  📧 {contact.email}
                </a>
              </div>
            )}

            {contact.phone && (
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">
                  Telefon
                </p>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-blue-600 hover:underline flex items-center gap-2"
                >
                  📞 {contact.phone}
                </a>
              </div>
            )}
          </div>

          {contact.notes && (
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">Poznámky</p>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-gray-700 whitespace-pre-wrap wrap-break-word">
                  {contact.notes}
                </p>
              </div>
            </div>
          )}

          <div className="pt-4 border-t">
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <span className="font-medium">Vytvořeno:</span>{" "}
                {new Date(contact.created_at).toLocaleDateString("cs-CZ", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
              <div>
                <span className="font-medium">Poslední úprava:</span>{" "}
                {new Date(contact.updated_at).toLocaleDateString("cs-CZ", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
