"user sever"

export async function sendEmail(prevState: unknown, formData: FormData) {
  const email = formData.get("email")
  const description = formData.get("description")

  try {
    console.log("Sending email to", email, "with message", description)
  } catch (e) {
    return { message: "Error sending email", e }
  }
}
