"use client";

import { Contact } from "@/lib/types/database.types";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ContactsListProps {
  contacts: Contact[];
}

const statusLabels = {
  lead: "Lead",
  prospect: "Prospect",
  customer: "Zákazník",
};

const statusColors = {
  lead: "bg-blue-100 text-blue-800",
  prospect: "bg-yellow-100 text-yellow-800",
  customer: "bg-green-100 text-green-800",
};

export default function ContactsList({ contacts }: ContactsListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {contacts.map((contact) => (
        <Card key={contact.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {contact.name}
                  </h3>
                  {contact.company && (
                    <p className="text-sm text-gray-600">{contact.company}</p>
                  )}
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    statusColors[contact.status]
                  }`}
                >
                  {statusLabels[contact.status]}
                </span>
              </div>

              <div className="space-y-1 text-sm">
                {contact.email && (
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2">📧</span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="hover:text-blue-600"
                    >
                      {contact.email}
                    </a>
                  </div>
                )}
                {contact.phone && (
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2">📞</span>
                    <a
                      href={`tel:${contact.phone}`}
                      className="hover:text-blue-600"
                    >
                      {contact.phone}
                    </a>
                  </div>
                )}
              </div>

              {contact.notes && (
                <p className="text-sm text-gray-600 line-clamp-2">
                  {contact.notes}
                </p>
              )}

              <div className="pt-2">
                <Link href={`/dashboard/contacts/${contact.id}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    Zobrazit detail
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
