# Invitaciones Digitales - MVP

Sitio con **Next.js (App Router)** + **TailwindCSS** y **Supabase** para RSVP.

## Requisitos
- Node.js 18+
- Cuenta de Supabase (gratis)
- (Opcional) Vercel para deploy
- (Opcional) Mercado Pago/Stripe para cobros (placeholder)

## Pasos rápidos (local)
1. Descarga este proyecto y entra a la carpeta.
2. `cp .env.example .env.local` y coloca tus variables de Supabase.
3. Instala dependencias: `npm install`
4. Corre en desarrollo: `npm run dev` y abre http://localhost:3000

## Supabase
Crea un proyecto y agrega una tabla `rsvps`:

```sql
create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  event_id text not null,
  name text not null,
  guests int default 0,
  menu text,
  status text check (status in ('Sí','No','Pendiente')) default 'Sí'
);
-- Política para permitir inserts anónimos (solo escritura):
alter table public.rsvps enable row level security;
create policy "anon_insert_rsvps" on public.rsvps for insert
  with check (true);
```

> Nota: esta política permite que **cualquiera pueda insertar** RSVP (no leer ni editar). Más adelante puedes agregar un panel admin con Auth para consultas.

## Estructura
- `app/page.tsx` Landing
- `app/demo/[slug]/page.tsx` Demo de invitación con formulario de RSVP
- `app/plantillas/page.tsx` Listado de plantillas (placeholder)
- `components/RSVPForm.tsx` Formulario conectado a Supabase
- `lib/supabaseClient.ts` Cliente de Supabase
- `app/globals.css` Estilos base + utilidades

## Deploy en Vercel
1. Sube el repo a GitHub.
2. Importa en Vercel → Framework **Next.js**.
3. Configura variables de entorno `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` en el proyecto Vercel.
4. Deploy 🎉

## Pagos (placeholder)
- Crea una página `/checkout/[slug]` con un botón a Mercado Pago/Stripe.
- Recomendado: crear un endpoint serverless que genere la preferencia de pago y redirija al Checkout. (Pendiente por llaves secretas)

## Personalización
- Cambia colores/tipografías en `globals.css` o extiende Tailwind en `tailwind.config.ts`.
- Sustituye las portadas y galería en `/public`.
- Agrega bloque de **QR** y **muro de mensajes** en futuras iteraciones.
- 
- # Forzar redeploy sin cache

