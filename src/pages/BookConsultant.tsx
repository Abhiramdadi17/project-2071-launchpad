import { getRouteApi } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import heroBg from "@/assets/book-consultant-hero-bg.jpg";

const routeApi = getRouteApi("/book-consultant");

const PRODUCTS = [
  { slug: "inventiq", label: "Inventiq" },
  { slug: "sfx9-mes", label: "SFx9 MES" },
  { slug: "factory-finite-scheduling", label: "Factory Finite Scheduling" },
  { slug: "shopfloor-digital-apps", label: "ShopFloor Digital Apps" },
];

const EXPECTATIONS = [
  {
    title: "A direct technical discussion",
    body: "Thirty minutes with someone who has deployed similar solutions — not a sales rep working from a script.",
  },
  {
    title: "An honest capability assessment",
    body: "We map your current landscape against what the solution actually needs. If there's a gap, we name it.",
  },
  {
    title: "A concrete recommendation",
    body: "You leave with a specific path — pilot scope, phased rollout, or a clear reason to wait. Not a vague proposal deck.",
  },
  {
    title: "A clear fit verdict",
    body: "If Carbynetech isn't the right partner for this engagement, we'll say so. Wasted time costs both sides.",
  },
];

const TIME_OPTIONS = [
  "Morning IST (9am–12pm)",
  "Afternoon IST (1pm–5pm)",
  "Evening IST (6pm–9pm)",
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const CONTAINER =
  "mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20";

const BookConsultant = () => {
  const search = routeApi.useSearch();
  const [product, setProduct] = useState<string>(search.product ?? "");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    challenge: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "#0A0A06", fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-white/[0.08]"
        style={{ minHeight: "640px", background: "#0A0A06" }}
      >
        {/* image confined to right 55% */}
        <img
          src={heroBg}
          alt=""
          className="absolute top-0 right-0 bottom-0"
          style={{
            width: "58%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "left 15%",
          }}
        />
        {/* feather: solid dark → transparent over the junction */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0A0A06 38%, rgba(10,10,6,0.7) 50%, rgba(10,10,6,0) 62%)",
          }}
        />
        {/* bottom fade into page */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,6,0) 55%, rgba(10,10,6,0.9) 100%)",
          }}
        />
        <div className={`${CONTAINER} relative z-10 pt-36 sm:pt-44 pb-20 sm:pb-28`}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-[#C8FF01] text-[11px] font-semibold tracking-[0.26em] uppercase mb-5"
          >
            Before You Commit
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-white font-medium leading-[1.05] mb-6"
            style={{ fontSize: "clamp(34px, 5vw, 68px)" }}
          >
            Get a straight answer<br />before you sign anything.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-white/60 text-[15px] sm:text-[17px] leading-[1.65] max-w-[500px] mb-10"
          >
            Thirty minutes with someone who's shipped production-grade solutions — not a demo, not a deck.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="flex flex-wrap gap-x-8 gap-y-3"
          >
            {["30-min working session", "Written summary in 1 business day", "No sales pitch"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-white/65 text-[13px] sm:text-[14px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF01] shrink-0" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 sm:py-20">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-14 lg:gap-16 xl:gap-24">

            {/* Left — what to expect */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease }}
            >
              <p className="text-white/45 text-[11px] font-semibold tracking-[0.24em] uppercase mb-8">
                What to expect
              </p>
              <div className="space-y-7">
                {EXPECTATIONS.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-[3px] self-stretch shrink-0 rounded-full bg-[#C8FF01]" />
                    <div>
                      <p className="text-white text-[14px] sm:text-[15px] font-semibold mb-1.5">
                        {item.title}
                      </p>
                      <p className="text-white/50 text-[13px] sm:text-[14px] leading-[1.65]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-white/[0.08]">
                <p className="text-white/35 text-[12px] leading-[1.75]">
                  Sessions run 30 minutes over Google Meet or Teams. We send a written summary within one business day.
                </p>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.8, delay: 0.12, ease }}
            >
              {submitted ? (
                <div className="rounded-2xl border border-white/10 bg-[#0F1112] p-10 sm:p-14 flex flex-col items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#C8FF01] flex items-center justify-center">
                    <Check size={22} strokeWidth={2.5} color="#0A0A06" />
                  </div>
                  <h2 className="text-white text-[26px] sm:text-[32px] font-medium leading-[1.2]">
                    You're on the list.
                  </h2>
                  <p className="text-white/55 text-[15px] leading-[1.7] max-w-[460px]">
                    We've received your request and will confirm a time within
                    one business day. Check your inbox — we may have a few
                    follow-up questions to make the session more useful.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-white/10 bg-[#0F1112] p-8 sm:p-10"
                >
                  {/* Product chips */}
                  <div className="mb-10">
                    <p className="text-white/45 text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
                      Which solution are you exploring?
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {PRODUCTS.map((p) => (
                        <button
                          key={p.slug}
                          type="button"
                          onClick={() =>
                            setProduct(product === p.slug ? "" : p.slug)
                          }
                          className="px-3 py-1.5 text-[12px] font-medium rounded-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8FF01]"
                          style={
                            product === p.slug
                              ? {
                                background: "#C8FF01",
                                color: "#0A0A06",
                                border: "1px solid transparent",
                              }
                              : {
                                background: "transparent",
                                color: "rgba(255,255,255,0.6)",
                                border: "1px solid rgba(255,255,255,0.12)",
                              }
                          }
                        >
                          {p.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {(
                      [
                        { name: "name", label: "Full Name", type: "text", required: true },
                        { name: "email", label: "Work Email", type: "email", required: true },
                        { name: "company", label: "Company", type: "text", required: true },
                        { name: "role", label: "Your Role", type: "text", required: false },
                      ] as const
                    ).map((f) => (
                      <div key={f.name}>
                        <label className="block text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-2">
                          {f.label}
                          {f.required && (
                            <span className="text-[#C8FF01] ml-0.5">*</span>
                          )}
                        </label>
                        <input
                          name={f.name}
                          type={f.type}
                          value={form[f.name]}
                          onChange={handleChange}
                          required={f.required}
                          className="w-full bg-transparent border-b border-white/15 focus:border-white/50 outline-none py-2.5 text-[14px] text-white placeholder:text-white/20 transition-colors duration-150"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Challenge */}
                  <div className="mb-8">
                    <label className="block text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-2">
                      Briefly describe your situation
                      <span className="text-[#C8FF01] ml-0.5">*</span>
                    </label>
                    <textarea
                      name="challenge"
                      value={form.challenge}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="What are you trying to solve? What have you tried?"
                      className="w-full bg-transparent border-b border-white/15 focus:border-white/50 outline-none py-2.5 text-[14px] text-white placeholder:text-white/20 resize-none transition-colors duration-150"
                    />
                  </div>

                  {/* Time preference */}
                  <div className="mb-10">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-3">
                      Preferred time{" "}
                      <span className="text-white/25 normal-case tracking-normal font-normal ml-1">
                        (optional)
                      </span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {TIME_OPTIONS.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() =>
                            setForm({ ...form, time: form.time === t ? "" : t })
                          }
                          className="px-4 py-2 text-[12px] font-medium rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                          style={
                            form.time === t
                              ? {
                                background: "rgba(255,255,255,0.1)",
                                color: "#ffffff",
                                border: "1px solid rgba(255,255,255,0.3)",
                              }
                              : {
                                background: "transparent",
                                color: "rgba(255,255,255,0.45)",
                                border: "1px solid rgba(255,255,255,0.1)",
                              }
                          }
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-7 py-3.5 text-[13px] font-semibold rounded-full transition-all duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8FF01]"
                    style={{ background: "#C8FF01", color: "#0A0A06" }}
                  >
                    Book your session
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default BookConsultant;
