import { serve } from "https://deno.land/std/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  const { email, course, price } = await req.json();

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL"),
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")
  );

  // Store invoice record
  await supabase.from("invoices").insert({
    email,
    course,
    price,
    date: new Date()
  });

  // Send email using Supabase email hooks
  await supabase.functions.invoke("send-email", {
    body: {
      to: email,
      subject: `Invoice for ${course}`,
      html: `
        <h1>Invoice</h1>
        <p>Thank you for your payment.</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Amount Paid:</strong> R ${price}</p>
      `
    }
  });

  return new Response("Invoice Sent");
});
