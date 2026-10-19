/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Film,
  MapPin,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  PhoneCall,
  Mail,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  Camera,
  Layers,
  Award,
} from 'lucide-react';
import { RitaLogo } from './components/RitaLogo';

// Image assets generated for RITA Galicia Production Services
import heroImg from './assets/images/hero_galicia_film_shoot_1792420978824.jpg';
import testimonialCarmen from './assets/images/testimonial_carmen_director_1792420979266.jpg';
import testimonialMateo from './assets/images/testimonial_mateo_producer_1792420981034.jpg';
import locationsImg from './assets/images/galicia_production_locations_1792420980528.jpg';

export default function App() {
  const formUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSf1PiDsPzNeBD0bwE8kTh8WpyIgxtA6MMYa8HZ8rYkWwvMjRw/viewform?usp=publish-editor';

  // State for interactive FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: '¿Con cuánta antelación se deben tramitar los permisos en Galicia?',
      answer:
        'Gracias a nuestro contacto directo y continuo con los concellos gallegos, Demarcación de Costas, Augas de Galicia y Patrimonio, gestionamos autorizaciones de rodaje en plazos de 3 a 10 días laborables, dependiendo de la envergadura del proyecto.',
    },
    {
      question: '¿Cubrís rodajes en toda Galicia o solo en ciudades principales?',
      answer:
        'Damos cobertura integral en las cuatro provincias: A Coruña, Pontevedra, Lugo y Ourense. Contamos con fixers locales en Rías Baixas, Costa da Morte, Ferrolterra, Ribeira Sacra y las principales áreas urbanas.',
    },
    {
      question: '¿Qué tipo de equipamiento técnico podéis proporcionar?',
      answer:
        'Cámaras de cine digital (ARRI Alexa 35, Mini LF, RED V-Raptor, Sony FX9), ópticas fijas y anamórficas, iluminación LED de alta potencia, unidades de sonido directo, furgones de rodaje y operadores de dron con titulación oficial AESA.',
    },
    {
      question: '¿Asesoráis sobre incentivos fiscales y subvenciones de la Xunta de Galicia?',
      answer:
        'Sí. Te guiamos para acceder a las deducciones fiscales por rodajes cinematográficos en España y los fondos específicos de Agadic y Galicia Film Commission para producciones en territorio gallego.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-red-500 selection:text-white">
      {/* ------------------------------------------------------------- */}
      {/* 0. TOP BAR CONTRACT: Brand | 4-5 Nav Links | 1 Primary Action */}
      {/* ------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark / brand logo */}
          <a
            href="#"
            className="shrink-0 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-md"
            aria-label="RITA - Galicia Production Services"
          >
            <RitaLogo size="md" />
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a
              href="#beneficios"
              className="whitespace-nowrap shrink-0 hover:text-red-600 transition-colors"
            >
              Servicios & Fixer
            </a>
            <a
              href="#localizaciones"
              className="whitespace-nowrap shrink-0 hover:text-blue-600 transition-colors"
            >
              Localizaciones
            </a>
            <a
              href="#autoridad"
              className="whitespace-nowrap shrink-0 hover:text-green-600 transition-colors"
            >
              Autoridad
            </a>
            <a
              href="#testimonios"
              className="whitespace-nowrap shrink-0 hover:text-red-600 transition-colors"
            >
              Testimonios
            </a>
            <a
              href="#preguntas"
              className="whitespace-nowrap shrink-0 hover:text-slate-950 transition-colors"
            >
              Preguntas
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action CTA Button */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            >
              <span>+ INFO</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* ------------------------------------------------------------- */}
        {/* 1. HERO SECTION                                               */}
        {/* Lado izquierdo: Título grande, subtítulo, botón CTA           */}
        {/* Lado derecho: Imagen o ilustración relevante                  */}
        {/* Debajo: Lista de 3 puntos destacados (beneficios rápidos)     */}
        {/* ------------------------------------------------------------- */}
        <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-slate-50/80 via-white to-white overflow-hidden border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top 2-Column Split: Text + CTA (Left) & Image Asset (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column: Headline, Subtitle, CTA */}
              <div className="lg:col-span-7 flex flex-col items-start">
                {/* Visual Brand Indicator using Logo Band-Aid Colors */}
                <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-slate-500 tracking-wider uppercase">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" aria-hidden="true" />
                  <span className="ml-1 text-slate-700 font-bold">Producción Integral en Galicia</span>
                  <span aria-hidden="true">·</span>
                  <span>Sin complicaciones</span>
                </div>

                {/* Main Large Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08] text-balance mb-6">
                  Audiovisual fácil en Galicia.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-blue-600">
                    Deja que lo haga Rita!
                  </span>
                </h1>

                {/* Clear Subtitle */}
                <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight mb-3">
                  Deja que lo haga Rita!
                </p>

                {/* Clarifying Proposition Paragraph */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Tu partner local para rodajes de cine, publicidad y televisión. Gestionamos
                  permisos exprés, localizaciones paradisíacas, equipamiento de cámara de primer nivel,
                  casting y fixers expertos sobre el terreno. Tú rueda, Rita resuelve.
                </p>

                {/* Eye-catching Primary Call To Action (CTA) */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <a
                    href={formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-extrabold text-lg shadow-lg hover:shadow-red-500/25 transition-all transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-400 text-center"
                  >
                    <span>+ INFO</span>
                    <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                  </a>

                  <a
                    href="#beneficios"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-base transition-colors"
                  >
                    <Film className="w-4 h-4 text-slate-600" />
                    <span>Ver Servicios</span>
                  </a>
                </div>

                {/* Trust mini-badge */}
                <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-green-600" />
                  <span>Respuesta presupuestaria garantizada en menos de 24h</span>
                </div>
              </div>

              {/* Right Column: Hero Visual Image Asset */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 group">
                  <img
                    src={heroImg}
                    alt="Equipo de rodaje cinematográfico filmando con cámara de cine en los acantilados de Galicia"
                    className="w-full h-[380px] sm:h-[440px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Gradient Scrim for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Pill-free Brand Badge */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60">
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-600" />
                        <span className="font-bold text-slate-900">En rodaje en Galicia</span>
                      </div>
                      <span className="font-mono text-slate-500">Fixer 24/7</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Costa da Morte · Rías Baixas · Ribeira Sacra · Santiago
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ----------------------------------------------------------- */}
            {/* DEBAJO DEL HERO: Lista de 3 puntos destacados (beneficios rápidos) */}
            {/* ----------------------------------------------------------- */}
            <div className="mt-16 pt-12 border-t border-slate-200">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 text-center md:text-left">
                Ventajas clave para productoras y directores
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Quick Highlight 1 */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-green-50 text-green-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      Permisos y localizaciones exprés
                    </h3>
                    <p className="text-sm text-slate-600 leading-snug">
                      Tramitación directa con concellos, costas, puertos y patrimonio sin atascos
                      burocráticos ni sorpresas de última hora.
                    </p>
                  </div>
                </div>

                {/* Quick Highlight 2 */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Camera className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      Equipamiento de cine y crews bilingües
                    </h3>
                    <p className="text-sm text-slate-600 leading-snug">
                      Cámaras de cine digital, drones con piloto certificado, sonido directo y
                      técnicos gallegos con amplia experiencia internacional.
                    </p>
                  </div>
                </div>

                {/* Quick Highlight 3 */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      Fixer y resolución inmediata
                    </h3>
                    <p className="text-sm text-slate-600 leading-snug">
                      Más de 15 años resolviendo incidencias en Galicia. Clima, accesos, transporte:
                      si surge un problema, Rita ya lo tiene previsto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 2. SECCIÓN DE BENEFICIOS                                      */}
        {/* Grid de 3 columnas: Título, icono y breve descripción         */}
        {/* Debajo: Botón CTA centrado (+ INFO)                           */}
        {/* ------------------------------------------------------------- */}
        <section id="beneficios" className="py-20 bg-slate-50/60 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-red-600 tracking-wider uppercase mb-2 block">
                Servicios Audiovisuales en Galicia
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
                Todo lo que necesitas para rodar en Galicia sin quebraderos de cabeza
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 text-balance">
                Nos encargamos de las partes complejas y pesadas de la producción para que tú puedas
                enfocarte en tu visión creativa y en el plano perfecto.
              </p>
            </div>

            {/* 3-Column Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefit 1: Fixer & Producción (Red Accent from Logo) */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-6">
                    <Film className="w-7 h-7 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Producción & Fixer Integral
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Coordinación operativa total en las 4 provincias gallegas. Bases de operaciones,
                    logística de traslados, permisos de rodaje, catering de producto local y
                    resolución inmediata de cualquier imprevisto en set.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-500">
                  A Coruña · Pontevedra · Lugo · Ourense
                </div>
              </div>

              {/* Benefit 2: Scouting & Localizaciones (Green Accent from Logo) */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-6">
                    <MapPin className="w-7 h-7 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Scouting & Localizaciones Únicas
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Catálogo exclusivo de enclaves: playas salvajes, pazos centenarios, cañones
                    del Sil, puertos pesqueros y fragas atlánticas. Scouting a medida con fotos,
                    vídeos y coordenadas técnicas de acceso.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-500">
                  Rías Baixas · Costa da Morte · Ribeira Sacra
                </div>
              </div>

              {/* Benefit 3: Casting & Talento (Blue Accent from Logo) */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Casting & Talento Técnico Local
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Acceso a actores gallegos reconocidos, figuración autóctona de todas las edades
                    y jefes de equipo técnicos cualificados (DoP, sonido, gaffer, maquillaje y arte)
                    con tarifas transparentes y exenciones fiscales.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-500">
                  Crews bilingües · Asesoría fiscal Agadic
                </div>
              </div>
            </div>

            {/* Location Showcase Teaser Image */}
            <div id="localizaciones" className="mt-12 rounded-2xl overflow-hidden border border-slate-200 shadow-md relative">
              <img
                src={locationsImg}
                alt="Localizaciones de cine en Galicia: Ribeira Sacra y pazos históricos"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent flex items-center p-6 sm:p-10">
                <div className="max-w-lg text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-green-400 mb-2 block">
                    Localizaciones de película
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                    Galicia: el plató natural más versátil de Europa
                  </h3>
                  <p className="text-sm text-slate-200 mb-4">
                    Más de 1.500 km de costa salvaje, arquitectura en piedra medieval, densos
                    bosques de niebla y moderna arquitectura contemporánea.
                  </p>
                </div>
              </div>
            </div>

            {/* Debajo: Botón CTA centrado (+ INFO) */}
            <div className="mt-14 text-center">
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-extrabold text-lg shadow-lg hover:shadow-red-500/30 transition-all transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-400"
              >
                <span>+ INFO</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </a>
              <p className="mt-3 text-xs text-slate-500">
                Responde unas breves preguntas en nuestro formulario y recibe propuesta personalizada
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 3. SECCIÓN DE AUTORIDAD                                       */}
        {/* Bloque horizontal con fondo de color sólido para resaltar     */}
        {/* elementos de confianza (logotipos, métricas, frases)          */}
        {/* ------------------------------------------------------------- */}
        <section id="autoridad" className="py-20 bg-slate-950 text-white border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Autoridad: Frase central contundente */}
            <div className="text-center max-w-4xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 mb-4">
                <Award className="w-3.5 h-3.5 text-red-400" />
                <span>Experiencia contrastada en Galicia</span>
              </div>
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-snug">
                “El partner de confianza para productoras nacionales e internacionales que buscan
                rodar en Galicia con máxima solvencia, agilidad y cero sorpresas.”
              </blockquote>
            </div>

            {/* Métricas clave de autoridad */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-slate-800/80 mb-12">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400 font-mono tabular-nums">
                  +120
                </div>
                <div className="mt-2 text-sm sm:text-base font-semibold text-slate-200">
                  Rodajes Facilitados
                </div>
                <div className="text-xs text-slate-400">Largometrajes, series y spots</div>
              </div>

              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 font-mono tabular-nums">
                  4/4
                </div>
                <div className="mt-2 text-sm sm:text-base font-semibold text-slate-200">
                  Provincias Cubiertas
                </div>
                <div className="text-xs text-slate-400">Bases y fixers locales</div>
              </div>

              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-mono tabular-nums">
                  100%
                </div>
                <div className="mt-2 text-sm sm:text-base font-semibold text-slate-200">
                  Permisos a Tiempo
                </div>
                <div className="text-xs text-slate-400">Sin demoras burocráticas</div>
              </div>

              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-slate-100 font-mono tabular-nums">
                  15+
                </div>
                <div className="mt-2 text-sm sm:text-base font-semibold text-slate-200">
                  Años en el Sector
                </div>
                <div className="text-xs text-slate-400">Equipo profesional senior</div>
              </div>
            </div>

            {/* Elementos de confianza / Logotipos y Sellos del sector */}
            <div>
              <div className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
                En estrecha colaboración con las instituciones del audiovisual gallego y español
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all">
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-300">
                  <Film className="w-5 h-5 text-red-500" />
                  <span>Galicia Film Commission</span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-300">
                  <Award className="w-5 h-5 text-green-500" />
                  <span>AGAPI</span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-300">
                  <ShieldCheck className="w-5 h-5 text-blue-500" />
                  <span>Spain Film Commission</span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-300">
                  <Layers className="w-5 h-5 text-slate-400" />
                  <span>Clúster Audiovisual Galego</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 4. SECCIÓN DE PRUEBA SOCIAL                                   */}
        {/* Dos testimonios con foto (circular), nombre y opinión          */}
        {/* ------------------------------------------------------------- */}
        <section id="testimonios" className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-red-600 tracking-wider uppercase mb-2 block">
                Prueba Social & Opiniones
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
                Productores y directores que ya han dejado que lo haga Rita
              </h2>
              <p className="mt-3 text-slate-600">
                Experiencias reales de equipos de rodaje que confiaron su producción en Galicia.
              </p>
            </div>

            {/* Exactly Two Testimonials with circular photo, name, and opinion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Testimonial 1: Carmen Méndez */}
              <div className="bg-slate-50/70 rounded-2xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
                <div>
                  {/* Circular Photo + Name + Role Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonialCarmen}
                      alt="Carmen Méndez - Directora de Cine & Ficción"
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-red-100 shadow-sm shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 leading-tight">
                        Carmen Méndez
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600">
                        Directora de Ficción & Largometrajes (Premio Mestre Mateo)
                      </p>
                      <div className="text-xs text-red-600 font-medium mt-0.5">
                        Rodaje de largometraje en Costa da Morte
                      </div>
                    </div>
                  </div>

                  {/* Opinion */}
                  <p className="text-slate-700 italic leading-relaxed text-base">
                    “Rodar en la Costa da Morte en pleno otoño parecía una odisea logística. Rita nos
                    consiguió los permisos en tiempo récord, localizó acantilados idílicos y su
                    equipo de fixers resolvió cada cambio meteorológico al instante. Fue como rodar en
                    casa.”
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span>Permisos exprés + Fixing en set</span>
                  <span className="text-green-600 font-semibold">100% Recomendado</span>
                </div>
              </div>

              {/* Testimonial 2: Mateo Varela */}
              <div className="bg-slate-50/70 rounded-2xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
                <div>
                  {/* Circular Photo + Name + Role Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonialMateo}
                      alt="Mateo Varela - Productor Ejecutivo en BlueWave Media"
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 shadow-sm shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 leading-tight">
                        Mateo Varela
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600">
                        Productor Ejecutivo en BlueWave Media (Madrid / Londres)
                      </p>
                      <div className="text-xs text-blue-600 font-medium mt-0.5">
                        Campaña publicitaria internacional en Rías Baixas
                      </div>
                    </div>
                  </div>

                  {/* Opinion */}
                  <p className="text-slate-700 italic leading-relaxed text-base">
                    “Cuando ruedas para clientes internacionales en Galicia, no puedes permitirte
                    fallos ni retrasos con las administraciones. Con Rita todo fue rodado,
                    transparente y con un nivel técnico que superó las expectativas del cliente.
                    Repetiremos seguro.”
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span>Cámaras cine + Crews locales</span>
                  <span className="text-green-600 font-semibold">100% Recomendado</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* Interactive FAQ Section                                       */}
        {/* ------------------------------------------------------------- */}
        <section id="preguntas" className="py-16 bg-slate-50/50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">
                Resolvemos tus dudas
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Preguntas frecuentes sobre rodar en Galicia
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-red-600 transition-colors focus-visible:outline-none focus-visible:bg-slate-50"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? 'rotate-180 text-red-600' : ''
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 5. SECCIÓN FINAL (LAST CALL)                                   */}
        {/* Bloque de cierre con fondo oscuro, un título que refuerce     */}
        {/* la oferta y un botón CTA final (+ INFO)                       */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
          {/* Subtle branding ambient glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Logo Mark Centered in Dark Section */}
            <div className="flex justify-center mb-6">
              <RitaLogo size="lg" variant="white" />
            </div>

            {/* Offer reinforcement headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight text-balance mb-6">
              ¿Tienes un rodaje en mente?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-blue-400 block sm:inline">
                No te compliques la vida en Galicia:
              </span>{' '}
              ¡Deja que lo haga Rita!
            </h2>

            {/* Subtitle clarifying the offer */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
              Cuéntanos tu proyecto y recibe en menos de 24 horas nuestra propuesta de localizaciones,
              estimación de equipo y asesoría de permisos sin ningún compromiso.
            </p>

            {/* Botón CTA Final */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-extrabold text-xl shadow-xl hover:shadow-red-500/40 transition-all transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-400"
              >
                <span>+ INFO</span>
                <ArrowRight className="w-6 h-6 stroke-[2.5]" />
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Formulario directo · Sin llamadas no deseadas · Tratamiento confidencial de proyectos
            </p>
          </div>
        </section>
      </main>

      {/* ------------------------------------------------------------- */}
      {/* FOOTER                                                        */}
      {/* ------------------------------------------------------------- */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <RitaLogo size="sm" variant="white" />
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
              <a href="#beneficios" className="hover:text-white transition-colors">
                Servicios
              </a>
              <a href="#localizaciones" className="hover:text-white transition-colors">
                Localizaciones
              </a>
              <a href="#autoridad" className="hover:text-white transition-colors">
                Autoridad
              </a>
              <a href="#testimonios" className="hover:text-white transition-colors">
                Testimonios
              </a>
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 font-bold transition-colors inline-flex items-center gap-1"
              >
                Formulario + INFO
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
            <p>© {new Date().getFullYear()} RITA Galicia Production Services. Todos los derechos reservados.</p>
            <p className="text-center sm:text-right">
              Servicios de producción audiovisual, fixing y localizaciones en Galicia (España).
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
