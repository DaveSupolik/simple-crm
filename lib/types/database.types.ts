export type ContactStatus = "lead" | "prospect" | "customer";

export interface Contact {
  id: string;
  user_id: string;
  name: string;
  email: string | null;
  phone: string | null;
  company: string | null;
  notes: string | null;
  status: ContactStatus;
  created_at: string;
  updated_at: string;
}

export interface ContactInsert {
  name: string;
  email?: string | null;
  phone?: string | null;
  company?: string | null;
  notes?: string | null;
  status?: ContactStatus;
}

export interface ContactUpdate {
  name?: string;
  email?: string | null;
  phone?: string | null;
  company?: string | null;
  notes?: string | null;
  status?: ContactStatus;
}
