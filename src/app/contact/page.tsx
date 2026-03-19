"use client";
import { useLang } from "@/components/LangProvider";
import { FiMail, FiLinkedin, FiGithub, FiDownload } from "react-icons/fi";
import { track } from "@vercel/analytics";
import { useRouter } from "next/navigation";

const texts = {
  title: { en: "Contact", sv: "Kontakt" },
  subtitle: {
    en: "Want to get in touch? Send me an email or connect via LinkedIn or GitHub.",
    sv: "Vill du komma i kontakt? Skicka ett mejl eller connecta via LinkedIn eller GitHub.",
  },
  emailLabel: { en: "Email", sv: "E-post" },
  linkedin: { en: "LinkedIn", sv: "LinkedIn" },
  github: { en: "GitHub", sv: "GitHub" },
  downloadCV: { en: "Download CV", sv: "Ladda ner CV" },
  formTitle: { en: "Send a message", sv: "Skicka ett meddelande" },
  name: { en: "Your name", sv: "Ditt namn" },
  message: { en: "Your message", sv: "Ditt meddelande" },
  send: { en: "Send", sv: "Skicka" },
  sending: { en: "Sending...", sv: "Skickar..." },
  sent: { en: "Message sent!", sv: "Meddelandet har skickats!" },
  sentNote: {
    en: "Thanks for reaching out — I'll be in touch soon.",
    sv: "Tack för att du hörde av dig — jag återkommer snart.",
  },
  error: {
    en: "Something went wrong. Please try again later.",
    sv: "Något gick fel. Försök igen senare.",
  },
};

import React, { useState, useEffect, useRef } from "react";

export default function ContactPage() {
  const { lang } = useLang();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Dummy handler, replace with your backend/email solution
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      // Simulate sending
      await new Promise((res) => setTimeout(res, 1200));
      setStatus("sent");
      track("contact_submit");
      setForm({ name: "", message: "" });
      // Redirect back to the homepage contact section after a short delay
      timeoutRef.current = setTimeout(() => router.push("/#contact"), 2500);
    } catch {
      setStatus("error");
      timeoutRef.current = setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <section className="max-w-2xl mx-auto py-10 px-4 sm:px-6 text-center flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2">{texts.title[lang]}</h2>
      <p className="mb-8 text-brand-700 text-base sm:text-lg">{texts.subtitle[lang]}</p>

      {/* Contact links */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-xl mb-6 w-full">
        <a
          href="mailto:hi@marcusgronna.com"
          onClick={() => track("email_click")}
          className="flex items-center gap-2 text-accent-700 hover:text-accent-800 underline"
          aria-label={texts.emailLabel[lang]}
        >
          <FiMail aria-hidden="true" /> hi@marcusgronna.com
        </a>
        <a
          href="https://www.linkedin.com/in/marcus-gr%C3%B6nn%C3%A5-6a5006260/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("linkedin_click")}
          aria-label="LinkedIn"
          className="flex items-center gap-2 hover:text-accent-700"
        >
          <FiLinkedin aria-hidden="true" /> {texts.linkedin[lang]}
        </a>
        <a
          href="https://github.com/MarcusGronna"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("github_click")}
          aria-label="GitHub"
          className="flex items-center gap-2 hover:text-accent-700"
        >
          <FiGithub aria-hidden="true" /> {texts.github[lang]}
        </a>
      </div>

      {/* CV download */}
      <a
        href="/marcus-gronna-cv.pdf"
        download
        onClick={() => track("cv_download")}
        className="inline-flex items-center gap-2 bg-accent-400 text-ink-900 font-semibold rounded px-6 py-2.5 hover:bg-accent-300 transition mb-10 focus-visible:ring-2 focus-visible:ring-ink-900"
      >
        <FiDownload aria-hidden="true" size={18} />
        {texts.downloadCV[lang]}
      </a>

      {/* Contact form */}
      <form
        onSubmit={handleSubmit}
        className="bg-surface-50 rounded-xl shadow-md border border-brand-600 p-8 sm:p-10 flex flex-col gap-5 w-full"
      >
        <h3 className="text-xl font-semibold mb-2">{texts.formTitle[lang]}</h3>
        <input
          type="text"
          name="name"
          required
          placeholder={texts.name[lang]}
          className="border border-brand-600 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          disabled={status === "sending" || status === "sent"}
        />
        <textarea
          name="message"
          required
          placeholder={texts.message[lang]}
          className="border border-brand-600 rounded px-4 py-3 min-h-[140px] focus:outline-none focus:ring-2 focus:ring-accent-400"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          disabled={status === "sending" || status === "sent"}
        />
        <button
          type="submit"
          disabled={status === "sending" || status === "sent"}
          className="bg-accent-400 text-ink-900 font-semibold rounded py-3 hover:bg-accent-300 transition disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-ink-900"
        >
          {status === "sending"
            ? texts.sending[lang]
            : status === "sent"
            ? texts.sent[lang]
            : texts.send[lang]}
        </button>
        {status === "sent" && (
          <div
            role="status"
            aria-live="polite"
            className="text-accent-700 font-medium mt-1"
          >
            {texts.sentNote[lang]}
          </div>
        )}
        {status === "error" && (
          <div role="alert" className="text-red-600 mt-2">
            {texts.error[lang]}
          </div>
        )}
      </form>
    </section>
  );
}

