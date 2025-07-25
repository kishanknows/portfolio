"use client";
import React from "react";

export default function ContactSection() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name =
      (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const email =
      (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
    const message =
      (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";
    const mailto = `mailto:kishanknows@gmail.com?subject=Contact from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailto;
  }
  return (
    <section
      className="py-12 px-4 max-w-2xl mx-auto flex flex-col items-center"
      id="contact"
    >
      <h2 className="text-2xl font-bold mb-6 text-primary">Contact Me</h2>
      <p className="mb-6 text-center text-gray-700 dark:text-gray-200 max-w-lg">
        Interested in working together or have a question? Feel free to reach
        out!
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded border border-primary bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 rounded border border-primary bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="p-3 rounded border border-primary bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="bg-primary text-white font-bold py-3 px-6 rounded hover:bg-primary-dark transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
