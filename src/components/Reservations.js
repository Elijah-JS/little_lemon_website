import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Notification from "./Notification";

import lemon from "../assets/lemon.png";
import image1 from "../assets/last.jpg";
import image2 from "../assets/new.jpeg";
import image3 from "../assets/spag.jpg";
import logo from "../assets/Logo.svg";

/* Reusable fancy select component */
const FancySelect = ({ label, placeholder, value, onChange, options }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selected = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-slate-600">
        {label}
      </label>
      <div className="relative" ref={ref}>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="
            flex w-full items-center justify-between rounded-full 
            border border-olive-100 bg-olive-50/60 px-4 py-2.5 text-left 
            text-sm text-slate-800 shadow-sm transition 
            focus:border-lemon-300 focus:outline-none focus:ring-1 focus:ring-lemon-300
          "
        >
          <span className={selected ? "" : "text-slate-400"}>
            {selected ? selected.label : placeholder}
          </span>
          <span className="ml-2 text-xs text-olive-500">▼</span>
        </button>

        {open && (
          <div
            className="
              absolute z-30 mt-2 w-full overflow-hidden rounded-2xl 
              border border-olive-100 bg-white shadow-soft
            "
          >
            <ul className="max-h-60 overflow-y-auto py-1">
              {options.map((opt) => (
                <li key={opt.value}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                    className={`
                      flex w-full items-center justify-between px-4 py-2.5 text-left text-sm
                      transition hover:bg-olive-50/70
                      ${value === opt.value ? "bg-olive-50/80 font-medium" : ""}
                    `}
                  >
                    <span>{opt.label}</span>
                    {value === opt.value && (
                      <span className="text-[0.65rem] text-olive-600">
                        ✓
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

/* Shared reservation form for mobile + desktop */
const ReservationForm = ({
  seating,
  setSeating,
  date,
  setDate,
  diners,
  setDiners,
  occasion,
  setOccasion,
  time,
  setTime,
  handleReserve,
  dinerOptions,
  occasionOptions,
  timeOptions,
  className = "",
}) => {
  return (
    <form className={className} onSubmit={handleReserve}>
      {/* Seating preference */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-700/80">
          Seating preference
        </p>

        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {/* INDOOR BUTTON */}
          <button
            type="button"
            onClick={() => setSeating("indoor")}
            className="
              flex items-center justify-between rounded-2xl px-4 py-3 text-sm shadow-sm transition
              bg-olive-50 text-slate-800 hover:bg-olive-100
            "
          >
            <span>Indoor seating</span>
            <span
              className={`
                h-4 w-4 rounded-full border
                ${
                  seating === "indoor"
                    ? "bg-black border-black"
                    : "bg-white border-olive-300"
                }
              `}
            />
          </button>

          {/* OUTDOOR BUTTON */}
          <button
            type="button"
            onClick={() => setSeating("outdoor")}
            className="
              flex items-center justify-between rounded-2xl px-4 py-3 text-sm shadow-sm transition
              bg-olive-50 text-slate-800 hover:bg-olive-100
            "
          >
            <span>Outdoor seating</span>
            <span
              className={`
                h-4 w-4 rounded-full border
                ${
                  seating === "outdoor"
                    ? "bg-black border-black"
                    : "bg-white border-olive-300"
                }
              `}
            />
          </button>
        </div>
      </div>

      {/* Date + Diners */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Date */}
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-600">
            Select a date
          </label>
          <DatePicker
            selected={date}
            onChange={(d) => setDate(d)}
            dateFormat="MM/dd/yyyy"
            minDate={new Date()}
            placeholderText="Choose a date"
            className="
              w-full rounded-full border border-olive-100 bg-olive-50/60 
              px-4 py-2.5 text-sm text-slate-800 shadow-sm 
              focus:border-lemon-300 focus:outline-none 
              focus:ring-1 focus:ring-lemon-300
            "
            calendarClassName="ll-calendar"
            popperClassName="ll-calendar-popper"
          />
        </div>

        {/* Diners – FancySelect */}
        <FancySelect
          label="Number of guests"
          placeholder="Select diners"
          value={diners}
          onChange={setDiners}
          options={dinerOptions}
        />
      </div>

      {/* Occasion + Time */}
      <div className="grid gap-4 md:grid-cols-2">
        <FancySelect
          label="Occasion"
          placeholder="Select occasion"
          value={occasion}
          onChange={setOccasion}
          options={occasionOptions}
        />

        <FancySelect
          label="Time"
          placeholder="Select a time"
          value={time}
          onChange={setTime}
          options={timeOptions}
        />
      </div>

      {/* Button + tiny copy */}
      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-lemon-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-soft transition hover:bg-lemon-300"
        >
          Reserve a table
        </button>
        <p className="mt-2 text-[0.7rem] text-slate-500">
          You&apos;ll receive a confirmation at the host stand when you arrive.
        </p>
      </div>
    </form>
  );
};

/* Shared imagery / story block */
const ReservationImagery = () => {
  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-2xl border border-olive-100/70 bg-slate-950/80 shadow-soft">
        <img
          src={image1}
          alt="Chefs preparing dishes"
          className="h-52 w-full object-cover md:h-56"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent px-4 pb-4 pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lemon-200/90">
            Chef&apos;s table
          </p>
          <p className="mt-1 text-sm font-medium text-lemon-50">
            Watch our team finish your dishes from the open kitchen.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="overflow-hidden rounded-2xl border border-olive-100/70 bg-slate-900/80">
          <img
            src={image2}
            alt="Colorful Mediterranean spread"
            className="h-28 w-full object-cover md:h-32"
          />
        </div>
        <div className="overflow-hidden rounded-2xl border border-olive-100/70 bg-slate-900/80">
          <img
            src={image3}
            alt="Pasta dish"
            className="h-28 w-full object-cover md:h-32"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-lemon-100 bg-lemon-50/70 px-4 py-4 text-xs text-olive-900 shadow-soft">
        <p className="font-semibold text-slate-900">
          Need a last-minute reservation?
        </p>
        <p className="mt-1 text-[0.75rem] text-slate-700 leading-relaxed">
          Call us at <span className="font-semibold">(312) 555-0134</span> and
          we&apos;ll do our best to find you a spot this evening.
        </p>
      </div>
    </div>
  );
};

const Reservations = () => {
  const [seating, setSeating] = useState("indoor");
  const [date, setDate] = useState(null);
  const [diners, setDiners] = useState("");
  const [occasion, setOccasion] = useState("");
  const [time, setTime] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReserve = (e) => {
    e.preventDefault();

    if (!date || !diners || !time) {
      setShowNotification(true);
      return;
    }

    setShowNotification(true);
  };

  const formattedDate = date
    ? date.toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
      })
    : null;

  // Options for custom selects
  const dinerOptions = Array.from({ length: 10 }, (_, i) => {
    const n = i + 1;
    return {
      value: String(n),
      label: `${n} ${n === 1 ? "guest" : "guests"}`,
    };
  });

  const occasionOptions = [
    { value: "birthday", label: "Birthday" },
    { value: "engagement", label: "Engagement" },
    { value: "anniversary", label: "Anniversary" },
    { value: "business", label: "Business dinner" },
    { value: "just-evening", label: "Just an evening out" },
  ];

  const timeOptions = [
    "5:00 pm",
    "5:30 pm",
    "6:00 pm",
    "6:30 pm",
    "7:00 pm",
    "7:30 pm",
    "8:00 pm",
    "8:30 pm",
    "9:00 pm",
    "9:30 pm",
  ].map((t) => ({ value: t, label: t }));

  return (
    <>
      <Helmet>
        <title>Reservations | Little Lemon Restaurant</title>
        <meta
          name="description"
          content="Reserve a table at Little Lemon in Chicago. Choose your date, time, and seating preference for a relaxed Mediterranean evening."
        />
        <meta
          name="keywords"
          content="reservations, Little Lemon, book a table, dining, restaurant reservations"
        />
        <meta
          property="og:title"
          content="Reservations | Little Lemon Restaurant"
        />
        <meta
          property="og:description"
          content="Reserve a table at Little Lemon in Chicago. Choose your date, time, and seating preference."
        />
        <meta property="og:image" content={logo} />
        <meta
          property="og:url"
          content="http://www.littlelemon.com/reservations"
        />
      </Helmet>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-10 md:px-6">
        {/* Page heading */}
        <header className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-olive-700/80">
              Little Lemon • Chicago
            </p>
            <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Reserve your evening.
            </h1>
            <p className="mt-2 max-w-xl text-sm text-slate-600">
              Choose your seating, date, and time, and we&apos;ll have your
              table ready with fresh bread and olive oil when you arrive.
            </p>
          </div>

          <div className="mt-3 flex items-center gap-2 text-xs text-olive-700/80 md:mt-0">
            <span className="inline-flex h-7 items-center rounded-full bg-lemon-100 px-3 font-medium text-olive-900 shadow-soft">
              Open today · 11:00am – 11:00pm
            </span>
          </div>
        </header>

        {/* ======================= */}
        {/* MOBILE LAYOUT (md:hidden) */}
        {/* ======================= */}
        <section className="mt-4 space-y-6 md:hidden">
          {/* Card with form */}
          <div className="rounded-3xl bg-[#fffdf7]/95 p-5 shadow-soft">
            <ReservationForm
              seating={seating}
              setSeating={setSeating}
              date={date}
              setDate={setDate}
              diners={diners}
              setDiners={setDiners}
              occasion={occasion}
              setOccasion={setOccasion}
              time={time}
              setTime={setTime}
              handleReserve={handleReserve}
              dinerOptions={dinerOptions}
              occasionOptions={occasionOptions}
              timeOptions={timeOptions}
              className="space-y-6"
            />
          </div>

          {/* Imagery below form on mobile */}
          <ReservationImagery />
        </section>

        {/* ========================= */}
        {/* DESKTOP/TABLET LAYOUT     */}
        {/* ========================= */}
        <section className="mt-8 hidden gap-8 rounded-3xl bg-[#fffdf7]/95 p-6 shadow-soft md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:p-8">
          {/* LEFT — FORM */}
          <div className="border-r border-olive-100/60 pr-0 md:pr-8">
            <ReservationForm
              seating={seating}
              setSeating={setSeating}
              date={date}
              setDate={setDate}
              diners={diners}
              setDiners={setDiners}
              occasion={occasion}
              setOccasion={setOccasion}
              time={time}
              setTime={setTime}
              handleReserve={handleReserve}
              dinerOptions={dinerOptions}
              occasionOptions={occasionOptions}
              timeOptions={timeOptions}
              className="space-y-6"
            />
          </div>

          {/* RIGHT — IMAGERY / STORY */}
          <ReservationImagery />
        </section>
      </section>

      {showNotification && (
        <Notification
          message={
            date && diners && time
              ? `Your table for ${diners} ${
                  diners === "1" ? "guest" : "guests"
                } is reserved ${
                  formattedDate ? `on ${formattedDate}` : ""
                } at ${time || "your selected time"}.`
              : "Please select a date, number of guests, and time to complete your reservation."
          }
          onClose={() => setShowNotification(false)}
        />
      )}
    </>
  );
};

export default Reservations;






