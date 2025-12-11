import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// HERO image – different from the cards
import heroImg from "../assets/heroimg.jpg";

// Specials card images
import saladImg from "../assets/salad.jpg";
import dessertImg from "../assets/lemons.jpg";
import bruschettaImg from "../assets/bruchetta.svg";

const specials = [
  {
    name: "Greek Salad",
    price: "$8.99",
    img: saladImg,
    desc: "Crisp cucumbers, ripe tomatoes, briny feta, and olives with a lemon–herb vinaigrette.",
  },
  {
    name: "Bruschetta",
    price: "$7.99",
    img: bruschettaImg,
    desc: "Toasted sourdough topped with marinated tomatoes, garlic, and fresh basil.",
  },
  {
    name: "Lemon Dessert",
    price: "$10.99",
    img: dessertImg,
    desc: "Our signature lemon dessert with silky custard and a dusting of sugar.",
  },
];

// Simple variants for animations
const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const heroImageVariants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

const specialsHeaderVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i },
  }),
};

export default function Home() {
  const [featured, ...otherSpecials] = specials;

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-6 md:pt-10 md:px-6">
      {/* ===================== */}
      {/* MOBILE HERO (md:hidden) */}
      {/* ===================== */}
      <motion.section
        className="md:hidden rounded-[24px] bg-white/95 px-4 py-6 shadow-soft"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Tagline */}
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-olive-600/80 text-center">
          Little Lemon • Chicago
        </p>

        {/* Image */}
        <div className="mt-4 overflow-hidden rounded-[20px] border border-olive-100/70 bg-slate-900/5">
          <img
            src={heroImg}
            alt="Little Lemon Restaurant"
            className="h-52 w-full object-cover"
          />
        </div>

        {/* Rating chip */}
        <div className="mt-3 inline-flex items-center gap-3 rounded-2xl bg-white px-3 py-2 text-[0.7rem] text-slate-800 shadow-soft">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-lemon-400 text-[0.7rem] font-bold text-slate-900">
            4.8
          </div>
          <div>
            <p className="font-semibold">Loved by locals</p>
            <p className="text-[0.65rem] text-slate-500">2k+ reviews across Chicago</p>
          </div>
        </div>

        {/* Text + CTAs */}
        <div className="mt-5 space-y-3 text-center">
          <h1 className="font-display text-[1.4rem] font-semibold leading-snug text-slate-900">
            A bright corner of the Mediterranean.
          </h1>
          <p className="text-[0.82rem] leading-relaxed text-slate-600">
            Seasonal, citrus-forward dishes, handmade pastas, and cozy classics inspired by
            Mediterranean family recipes. Fresh, simple, and meant to be shared.
          </p>

          <div className="mt-4 space-y-2">
            <Link
              to="/reservations"
              className="block w-full rounded-full bg-lemon-400 px-6 py-2.5 text-center text-sm font-semibold text-slate-900 shadow-soft transition hover:bg-lemon-300"
            >
              Reserve a table
            </Link>
            <Link
              to="/order-online"
              className="block w-full rounded-full border border-olive-100 bg-white px-6 py-2.5 text-center text-sm font-medium text-slate-700 transition hover:border-lemon-300 hover:bg-lemon-50"
            >
              Order online
            </Link>

            <p className="pt-1 text-[0.7rem] text-slate-500">
              Open today • <span className="font-semibold">11:00am – 11:00pm</span>
            </p>
          </div>
        </div>
      </motion.section>

      {/* ===================== */}
      {/* DESKTOP HERO (hidden on mobile) */}
      {/* ===================== */}
      <motion.section
        className="hidden md:block relative rounded-[28px] bg-white/95 px-6 py-8 shadow-soft lg:rounded-[32px] lg:px-10 lg:py-9 mt-4 md:mt-0"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          {/* LEFT */}
          <div className="flex flex-col gap-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-olive-600/80">
              Mediterranean • Little Lemon
            </p>

            <h1 className="font-display text-[2.4rem] font-semibold leading-snug text-slate-900">
              A bright corner of the Mediterranean in Chicago.
            </h1>

            <p className="max-w-xl text-[0.95rem] leading-relaxed text-slate-600">
              Little Lemon serves seasonal, citrus-forward dishes, handmade pastas, and cozy
              classics inspired by Mediterranean family recipes. Fresh, simple, and meant to be
              shared.
            </p>

            {/* CTA buttons */}
            <div className="mt-1 flex flex-wrap items-center gap-4">
              <Link
                to="/reservations"
                className="rounded-full bg-lemon-400 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-soft transition hover:bg-lemon-300"
              >
                Reserve a table
              </Link>

              <Link
                to="/order-online"
                className="rounded-full border border-olive-100 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 transition hover:border-lemon-300 hover:bg-lemon-50"
              >
                Order online
              </Link>

              <p className="text-[0.8rem] text-slate-500">
                Open today • <span className="font-semibold">11:00am – 11:00pm</span>
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            className="relative"
            variants={heroImageVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="absolute inset-0 -z-10 translate-y-3 translate-x-3 rounded-[28px] bg-lemon-300/35 blur-xl" />
            <div className="overflow-hidden rounded-[28px] border border-olive-100/60 bg-slate-900/5 shadow-soft">
              <img
                src={heroImg}
                alt="Little Lemon Restaurant"
                className="h-72 w-full object-cover lg:h-80"
              />
            </div>

            <div className="mt-4 inline-flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 text-xs text-slate-800 shadow-soft">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lemon-400 text-xs font-bold text-slate-900">
                4.8
              </div>
              <div>
                <p className="font-semibold">Loved by locals</p>
                <p className="text-[0.7rem] text-slate-500">2k+ reviews across Chicago</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ===================== */}
      {/* MOBILE SPECIALS (md:hidden) */}
      {/* ===================== */}
      <motion.section
        className="mt-8 md:hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={specialsHeaderVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-olive-600/80">
              This week&apos;s specials
            </p>
            <h2 className="mt-2 font-display text-[1.1rem] font-semibold text-slate-900">
              Seasonal plates to try
            </h2>
          </div>
          <Link
            to="/order-online"
            className="rounded-full border border-lemon-300/70 bg-lemon-50 px-3 py-1.5 text-[0.7rem] font-medium text-olive-800 transition hover:bg-lemon-300 hover:text-slate-900"
          >
            View menu
          </Link>
        </div>

        <div className="mt-5 space-y-3 rounded-2xl bg-olive-50/60 p-3">
          {specials.map((item, index) => (
            <motion.article
              key={item.name}
              className="group flex items-stretch gap-3 rounded-2xl bg-white/95 p-3 shadow-soft"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
            >
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-olive-100/70">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between gap-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-[0.9rem] font-semibold text-slate-900">
                    {item.name}
                  </h3>
                  <span className="text-[0.78rem] font-semibold text-olive-700">
                    {item.price}
                  </span>
                </div>
                <p className="text-[0.75rem] leading-snug text-slate-600">
                  {item.desc}
                </p>
                <button className="mt-1 inline-flex items-center justify-center rounded-full bg-olive-800 px-3 py-1.5 text-[0.7rem] font-semibold text-lemon-50 transition hover:bg-olive-600">
                  Add to cart
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* ===================== */}
      {/* DESKTOP / TABLET SPECIALS */}
      {/* ===================== */}
      <motion.section
        className="mt-12 hidden md:block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={specialsHeaderVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Header row */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-olive-600/80">
              This week&apos;s specials
            </p>
            <h2 className="mt-2 font-display text-[1.6rem] font-semibold text-slate-900">
              Seasonal plates, curated by our kitchen
            </h2>
            <p className="mt-1 max-w-md text-xs text-slate-600">
              A small collection of dishes we&apos;re especially proud of this week — fresh, bright,
              and meant to share.
            </p>
          </div>

          <Link
            to="/order-online"
            className="inline-flex items-center justify-center rounded-full border border-lemon-300/70 bg-lemon-50 px-4 py-2 text-xs font-medium text-olive-800 transition hover:bg-lemon-300 hover:text-slate-900"
          >
            View full menu
          </Link>
        </div>

        {/* Featured + supporting layout */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
          {/* Featured card (left) */}
          <motion.article
            className="group flex flex-col overflow-hidden rounded-3xl border border-olive-100 bg-white/95 shadow-soft transition hover:-translate-y-1 hover:border-lemon-300"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={cardVariants}
          >
            <div className="overflow-hidden">
              <img
                src={featured.img}
                alt={featured.name}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Chef&apos;s pick: {featured.name}
                </h3>
                <span className="text-base font-semibold text-olive-700">
                  {featured.price}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                {featured.desc}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <button className="inline-flex items-center justify-center rounded-full bg-olive-800 px-5 py-2.5 text-xs font-semibold text-lemon-50 transition hover:bg-olive-600">
                  Add to cart
                </button>
                <p className="text-[0.75rem] text-slate-500">
                  Limited for this week only.
                </p>
              </div>
            </div>
          </motion.article>

          {/* Supporting specials (right) */}
          <div className="grid gap-5">
            {otherSpecials.map((item, index) => (
              <motion.article
                key={item.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-olive-100 bg-white/95 shadow-soft transition hover:-translate-y-1 hover:border-lemon-300"
                custom={index + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                variants={cardVariants}
              >
                <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-full max-h-40 w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-[0.98rem] font-semibold text-slate-900">
                        {item.name}
                      </h3>
                      <span className="text-sm font-semibold text-olive-700">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-[0.8rem] leading-relaxed text-slate-600">
                      {item.desc}
                    </p>
                    <button className="mt-2 inline-flex items-center justify-center rounded-full bg-olive-800 px-4 py-2 text-[0.7rem] font-semibold text-lemon-50 transition hover:bg-olive-600">
                      Add to cart
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}





