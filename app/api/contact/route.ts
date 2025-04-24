export async function POST(req: Request) {
    const data = await req.json();
  
    //const webhookUrl = process.env.N8N_WEBHOOK_URL;
    const webhookUrl = "https://karimmt.app.n8n.cloud/webhook/contact";
      
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      return new Response("Webhook failed", { status: 500 });
    }
  
    return new Response("OK", { status: 200 });
  }
  