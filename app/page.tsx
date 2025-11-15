import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Simple CRM</h1>
          <p className="text-xl text-gray-600 mb-8">
            Jednoduché CRM pro živnostníky a malé firmy. Spravujte kontakty,
            úkoly a obchody na jednom místě.
          </p>

          <div className="flex gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" className="text-lg px-8">
                Začít zdarma
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Přihlásit se
              </Button>
            </Link>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📇</div>
              <h3 className="text-xl font-semibold mb-2">Kontakty</h3>
              <p className="text-gray-600">
                Uchovávejte všechny důležité informace o klientech na jednom
                místě
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Úkoly</h3>
              <p className="text-gray-600">
                Nezapomeňte na žádný follow-up díky připomínkám
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2">Pipeline</h3>
              <p className="text-gray-600">
                Sledujte postup vašich obchodních příležitostí
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
