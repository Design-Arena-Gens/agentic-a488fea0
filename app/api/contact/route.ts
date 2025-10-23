import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get('name') || '');
  const email = String(formData.get('email') || '');
  const message = String(formData.get('message') || '');

  // In a real app, send an email or persist to a store.
  // For demo, just return success and log to serverless logs.
  console.log('Contact form submission', { name, email, message });

  return NextResponse.json({ ok: true });
}
