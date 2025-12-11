import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Notification from "./Notification";

import salad from "../assets/salad.jpg";
import Bruschetta from "../assets/bruchetta.svg";
import lemons from "../assets/lemons.jpg";
import spag from "../assets/spagetti.jpg";
import pizza from "../assets/pizza3.jpg";
import lasagna from "../assets/lasagna.jpg";
import Tiramisu from "../assets/tiramisu.jpg";
import lemonIcon from "../assets/lemon.png";
import logo from "../assets/Logo.svg";

const menuItems = [
  {
    id: 1,
    name: "Greek Salad",
    price: 8.99,
    image: salad,
    tag: "Light & fresh",
    desc: "Crisp cucumbers, tomatoes, olives, and feta with a lemon–herb dressing.",
  },
  {
    id: 2,
    name: "Lemon Dessert",
    price: 10.99,
    image: lemons,
    tag: "House favorite",
    desc: "Our signature lemon dessert with silky custard and bright citrus zest.",
  },
  {
    id: 3,
    name: "Bruschetta",
    price: 7.99,
    image: Bruschetta,
    tag: "Perfect starter",
    desc: "Toasted bread with marinated tomatoes, garlic, and fresh basil.",
  },
  {
    id: 4,
    name: "Spaghetti & Meatballs",
    price: 12.99,
    image: spag,
    tag: "Comfort classic",
    desc: "Slow-simmered tomato sauce over handmade pasta and meatballs.",
  },
  {
    id: 5,
    name: "Chicago Pizza",
    price: 15.99,
    image: pizza,
    tag: "Shareable",
    desc: "Deep-dish pizza with generous cheese pull and rich sauce.",
  },
  {
    id: 6,
    name: "Lasagna",
    price: 14.99,
    image: lasagna,
    tag: "Oven baked",
    desc: "Layered pasta, rich ragù, and béchamel baked to perfection.",
  },
  {
    id: 7,
    name: "Tiramisu",
    price: 9.99,
    image: Tiramisu,
    tag: "Sweet finish",
    desc: "Espresso-soaked ladyfingers with mascarpone and cocoa.",
  },
];

const OrderOnline = () => {
  // cart = [{ id, name, price, quantity }]
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((entry) => entry.id === item.id);
      if (existing) {
        return prev.map((entry) =>
          entry.id === item.id
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
  };

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((entry) =>
          entry.id === id ? { ...entry, quantity: entry.quantity - 1 } : entry
        )
        .filter((entry) => entry.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((entry) => entry.id !== id));
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (!cart.length) return;

    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
      setCart([]);
      setName("");
      setAddress("");
    }, 3000);
  };

  const totalAmount = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <>
      <Helmet>
        <title>Order Online | Little Lemon Restaurant</title>
        <meta
          name="description"
          content="Order your favorite dishes from Little Lemon Restaurant online. Enjoy convenient delivery and pickup options."
        />
        <meta
          name="keywords"
          content="order online, Little Lemon, food delivery, pickup, restaurant"
        />
        <meta property="og:title" content="Order Online | Little Lemon Restaurant" />
        <meta
          property="og:description"
          content="Order your favorite dishes from Little Lemon Restaurant online. Enjoy convenient delivery and pickup options."
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="http://www.littlelemon.com/order-online" />
      </Helmet>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* PAGE HEADER */}
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lemon-300 shadow-soft">
              <img
                src={lemonIcon}
                alt="Little Lemon"
                className="h-6 w-6 object-contain"
              />
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-olive-600/80">
                Little Lemon • Chicago
              </p>
              <h1 className="font-display text-2xl font-semibold text-slate-900 md:text-[1.7rem]">
                Order online
              </h1>
              <p className="text-xs text-slate-500 md:text-[0.8rem]">
                Freshly prepared dishes, ready for pickup or delivery.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end text-xs text-slate-500">
            <span className="rounded-full bg-white/70 px-4 py-1 shadow-soft">
              Open today • <span className="font-semibold">11:00am – 11:00pm</span>
            </span>
            <span className="mt-2 text-[0.7rem]">
              Average prep time: <span className="font-medium">20–25 minutes</span>
            </span>
          </div>
        </header>

        {/* LAYOUT: MENU GALLERY + CHECKOUT */}
        <section className="grid gap-8 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)]">
          {/* MENU GALLERY */}
          <div className="rounded-[24px] bg-white/95 p-4 shadow-soft md:p-5">
            <div className="mb-4 flex items-center justify-between gap-2">
              <div>
                <h2 className="font-display text-lg font-semibold text-slate-900">
                  Menu
                </h2>
                <p className="text-[0.75rem] text-slate-500">
                  Tap a dish to add it to your order.
                </p>
              </div>
              <span className="rounded-full bg-lemon-50 px-3 py-1 text-[0.7rem] font-medium text-olive-800 border border-lemon-200">
                {menuItems.length} items
              </span>
            </div>

            <div className="max-h-[630px] space-y-4 overflow-y-auto pr-1">
              <div className="grid gap-4 sm:grid-cols-2">
                {menuItems.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col overflow-hidden rounded-2xl border border-olive-100 bg-[#fffdf7] shadow-soft transition hover:-translate-y-[2px] hover:border-lemon-300"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-36 w-full object-cover transition duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-3.5">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-display text-[0.95rem] font-semibold text-slate-900">
                          {item.name}
                        </h3>
                        <span className="text-[0.8rem] font-semibold text-olive-800">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      <span className="inline-flex w-fit rounded-full bg-lemon-50 px-2.5 py-1 text-[0.7rem] font-medium text-olive-800 border border-lemon-100">
                        {item.tag}
                      </span>
                      <p className="text-[0.75rem] leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                     <button
  onClick={() => addToCart(item)}
  className="mt-3 inline-flex items-center justify-center rounded-full
             bg-lemon-300 px-4 py-2 text-[0.8rem] font-semibold
             text-olive-900 shadow-md transition
             hover:bg-lemon-400 hover:shadow-lg"
>
  Add to order
</button>

                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* CHECKOUT PANEL */}
          <aside className="flex flex-col gap-4">
            <div className="rounded-[24px] bg-white/95 p-5 shadow-soft">
              <h2 className="font-display text-lg font-semibold text-slate-900">
                Checkout details
              </h2>

              {/* Cart summary */}
              <div className="mt-4 rounded-2xl bg-[#fffdf7] p-3 border border-olive-100/80">
                <p className="text-[0.75rem] font-semibold text-slate-700">
                  Your order
                </p>
                {cart.length === 0 ? (
                  <p className="mt-2 text-[0.75rem] text-slate-500">
                    No items yet. Add a few dishes from the menu.
                  </p>
                ) : (
                  <ul className="mt-2 space-y-2 text-[0.75rem] text-slate-700">
                    {cart.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center justify-between gap-2"
                      >
                        <div className="flex flex-col">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-[0.7rem] text-slate-500">
                            {item.quantity} × ${item.price.toFixed(2)}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex items-center rounded-full border border-olive-100 bg-white">
                            <button
                              type="button"
                              onClick={() => decreaseQuantity(item.id)}
                              className="px-2 py-1 text-[0.7rem] font-bold text-olive-800 hover:bg-lemon-50 rounded-l-full"
                            >
                              −
                            </button>
                            <span className="px-2 text-[0.75rem]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                setCart((prev) =>
                                  prev.map((entry) =>
                                    entry.id === item.id
                                      ? { ...entry, quantity: entry.quantity + 1 }
                                      : entry
                                  )
                                )
                              }
                              className="px-2 py-1 text-[0.7rem] font-bold text-olive-800 hover:bg-lemon-50 rounded-r-full"
                            >
                              +
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-[0.7rem] text-slate-400 hover:text-red-500"
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-3 flex items-center justify-between border-t border-olive-100 pt-2 text-[0.8rem]">
                  <span className="font-semibold text-slate-800">Total</span>
                  <span className="font-semibold text-olive-800">
                    ${totalAmount}
                  </span>
                </div>
              </div>

              {/* Checkout form */}
              <form onSubmit={handleOrderSubmit} className="mt-5 space-y-3">
                <div className="space-y-1">
                  <label className="block text-[0.75rem] font-medium text-slate-700">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full rounded-full border border-olive-100 bg-[#fffdf7] px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-lemon-300 focus:ring-2 focus:ring-lemon-200/70"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[0.75rem] font-medium text-slate-700">
                    Delivery address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    className="w-full rounded-full border border-olive-100 bg-[#fffdf7] px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-lemon-300 focus:ring-2 focus:ring-lemon-200/70"
                    placeholder="Street, city, ZIP"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!cart.length}
                  className={`mt-2 w-full rounded-full px-4 py-2.5 text-sm font-semibold shadow-soft transition ${
                    cart.length
                      ? "bg-slate-900 text-lemon-50 hover:bg-slate-800"
                      : "cursor-not-allowed bg-slate-200 text-slate-500"
                  }`}
                >
                  Place order
                </button>

                <p className="pt-1 text-[0.65rem] text-slate-400">
                  You won&apos;t be charged yet – this is a demo ordering
                  experience.
                </p>
              </form>
            </div>

            <div className="rounded-[20px] border border-lemon-100 bg-lemon-50/60 px-4 py-3 text-[0.75rem] text-olive-900 shadow-soft">
              <p className="font-semibold">Delivery notes</p>
              <p className="mt-1">
                We carefully package all dishes to arrive warm and fresh. For
                allergies or special instructions, add a note at checkout or call
                us after placing your order.
              </p>
            </div>
          </aside>
        </section>

        {showNotification && (
          <Notification
            message={`Order placed by ${name} for delivery to ${address}. You'll receive a confirmation shortly.`}
            onClose={() => setShowNotification(false)}
          />
        )}
      </main>
    </>
  );
};

export default OrderOnline;


