import { createClient } from "@/lib/supabase/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Vítejte zpět, {user?.email}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Kontakty</CardTitle>
            <CardDescription>Spravujte své kontakty</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-600 mt-2">Celkem kontaktů</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Úkoly</CardTitle>
            <CardDescription>Sledujte své úkoly</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-600 mt-2">Aktivních úkolů</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dealy</CardTitle>
            <CardDescription>Vaše obchodní příležitosti</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-600 mt-2">Aktivních dealů</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Rychlý start</CardTitle>
          <CardDescription>Začněte s vaším CRM</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-gray-600">✅ Účet vytvořen</p>
          <p className="text-gray-400">⬜ Přidat první kontakt</p>
          <p className="text-gray-400">⬜ Vytvořit první úkol</p>
          <p className="text-gray-400">⬜ Založit první deal</p>
        </CardContent>
      </Card>
    </div>
  );
}
