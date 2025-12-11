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
  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
      {/* HERO */}
      <motion.section
        className="relative rounded-[32px] bg-white/95 px-6 py-8 shadow-soft md:px-10 md:py-9"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          {/* LEFT */}
          <div className="flex flex-col gap-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-olive-600/80">
              Mediterranean • Little Lemon
            </p>

            <h1 className="font-display text-3xl font-semibold leading-tight text-slate-900 md:text-[2.4rem]">
              A bright corner of the Mediterranean in Chicago.
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-600 md:text-[0.95rem]">
              Little Lemon serves seasonal, citrus-forward dishes, handmade pastas, and cozy
              classics inspired by Mediterranean family recipes. Fresh, simple, and meant to be
              shared.
            </p>

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

              <p className="text-xs text-slate-500 md:text-[0.8rem]">
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
                className="h-64 w-full object-cover md:h-72 lg:h-80"
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

      {/* SPECIALS */}
      <motion.section
        className="mt-12 md:mt-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={specialsHeaderVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-olive-600/80">
              This week&apos;s specials
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-slate-900 md:text-[1.6rem]">
              Seasonal plates, fresh from our kitchen
            </h2>
          </div>

          <Link
            to="/order-online"
            className="rounded-full border border-lemon-300/70 bg-lemon-50 px-4 py-2 text-xs font-medium text-olive-800 transition hover:bg-lemon-300 hover:text-slate-900"
          >
            View full menu
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {specials.map((item, index) => (
            <motion.article
              key={item.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-olive-100 bg-white/95 shadow-soft transition hover:-translate-y-1 hover:border-lemon-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={cardVariants}
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-40 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    {item.name}
                  </h3>
                  <span className="text-sm font-semibold text-olive-700">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-slate-600">{item.desc}</p>
                <button className="mt-2 inline-flex items-center justify-center rounded-full bg-olive-800 px-4 py-2 text-xs font-semibold text-lemon-50 transition hover:bg-olive-600">
                  Add to cart
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </main>
  );
}





