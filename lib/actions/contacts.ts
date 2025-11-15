"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import type { ContactInsert, ContactUpdate } from "@/lib/types/database.types";

export async function getContacts() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

export async function getContact(id: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}

export async function createContact(contact: ContactInsert) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { data, error } = await supabase
    .from("contacts")
    .insert({
      ...contact,
      user_id: user.id,
    })
    .select()
    .single();

  if (error) throw error;

  revalidatePath("/dashboard/contacts");
  return data;
}

export async function updateContact(id: string, contact: ContactUpdate) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { data, error } = await supabase
    .from("contacts")
    .update(contact)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  revalidatePath("/dashboard/contacts");
  revalidatePath(`/dashboard/contacts/${id}`);
  return data;
}

export async function deleteContact(id: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { error } = await supabase.from("contacts").delete().eq("id", id);

  if (error) throw error;

  revalidatePath("/dashboard/contacts");
}
