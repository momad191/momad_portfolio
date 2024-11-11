"use server";
import { Contact } from "../../model/contact";
// import { revalidatePath } from "next/cache";

export async function creatContact(formData) {
  try {
    const first_name = formData["first_name"];
    const last_name = formData["last_name"];
    const email = formData["email"];
    const phone = formData["phone"];
    const message = formData["message"];

    // console.log(t_name, t_desc,t_employee);
    if (!first_name) return null;
    const contact = {
      first_name,
      last_name,
      email,
      phone,
      message,
    };
    await Contact.create(contact);
    // revalidatePath("/momad/contact");
  } catch (e) {
    throw new Error(e.message);
  }
}
