import { CalendarHeart, MapPin, Share2, ImageIcon, Music3, MessageSquare, Shield, ArrowRight, PhoneCall, Sparkles } from 'lucide-react'
import { SectionTitle, Card, CardBody, CheckList, Button } from '@/components/ui'
import Link from 'next/link'

const features = [
  { icon: CalendarHeart, title: 'RSVP en 1 clic', desc: 'Confirma asistencia y menú desde el celular.' },
  { icon: MapPin, title: 'Mapas y ruta', desc: 'Waze/Google Maps y botón de ride-hailing.' },
  { icon: ImageIcon, title: 'Galería & Reels', desc: 'Fotos y video vertical con autoplay silencioso.' },
  { icon: Music3, title: 'Música', desc: 'Lista o pista personalizada con control de audio.' },
  { icon: Share2, title: 'Compartir', desc: 'WhatsApp, Instagram y código QR listo para imprimir.' },
  { icon: MessageSquare, title: 'Muro de mensajes', desc: 'Deseos, fotos de invitados y moderación.' },
]

const plans = [
  { name: 'Básico', price: '$349 MXN', perks: ['1 plantilla', 'RSVP simple', 'Mapa & Agenda', 'Vigencia 3 meses'] },
  { name: 'Plus', price: '$599 MXN', perks: ['Todo lo del Básico', 'Galería (hasta 30 fotos)', 'Música embebida', 'QR para impresión', 'Vigencia 6 meses'] },
  { name: 'Premium', price: '$899 MXN', perks: ['Todo lo del Plus', 'Muro de mensajes', 'Subdominio personalizado', 'Soporte prioritario', 'Vigencia 12 meses'] },
]

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge"><Sparkles className="h-4 w-4" /> {children}</span>
}

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Badge>Invitaciones digitales interactivas</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Crea y comparte <span className="text-rose-600">tu invitación</span> en minutos
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            RSVP, mapas, galería, música y más en una sola página lista para WhatsApp, Instagram y código QR.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/demo/boda-ejemplo" className="btn btn-primary">Probar demo</Link>
            <Link href="/plantillas" className="btn btn-outline">Ver plantillas</Link>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
            <Shield className="h-4 w-4" /> Hosting seguro y subdominio incluido
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[9/16] rounded-2xl bg-gradient-to-br from-pink-100 via-rose-100 to-amber-100 relative overflow-hidden shadow-sm">
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/70 backdrop-blur text-sm">
                Plantilla {i+1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container pb-12">
        <SectionTitle>Todo lo que necesitas</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <Card key={i}><CardBody>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gray-50"><f.icon className="h-6 w-6" /></div>
                <div>
                  <div className="font-semibold">{f.title}</div>
                  <div className="text-sm text-gray-600">{f.desc}</div>
                </div>
              </div>
            </CardBody></Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="container py-16 bg-gray-50 rounded-3xl">
        <SectionTitle>Planes simples</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <Card key={p.name}><CardBody>
              <div className="text-xl font-semibold mb-2">{p.name}</div>
              <div className="text-3xl font-bold mb-4">{p.price}</div>
              <CheckList items={p.perks} />
              <Button className="w-full mt-6">Elegir plan <ArrowRight className="h-4 w-4" /></Button>
            </CardBody></Card>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-4">* Precios sugeridos. Ajusta a tu mercado y añade pagos con Stripe o Mercado Pago.</p>
      </section>

      {/* Footer */}
      <footer className="container py-10 text-sm text-gray-600">
        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <div>© 2025 TuMarca RSVP</div>
          <div className="flex gap-6">
            <a href="#">Aviso de privacidad</a>
            <a href="#">Términos</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
