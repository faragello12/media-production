import { FormEvent, useState } from "react";
import emailjs from '@emailjs/browser';
import heroImage from "../assets/contact/Rectangle 2.png";

/*
EMAILJS SETUP INSTRUCTIONS:
1. Sign up at https://www.emailjs.com/
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - {{from_name}}
   - {{from_email}}
   - {{phone}}
   - {{inquiry_type}}
   - {{message}}
   - {{to_email}} (set to: limitedmediaproduction@gmail.com)
4. Replace the placeholder values in handleSubmit with your actual:
   - Service ID
   - Template ID
   - Public Key
*/

const contactDetails = [
  { label: "Email", value: "limitedmediaproduction@gmail.com" },
  { label: "Landline", value: "+20 2 25320272" },
  { label: "Phone / WhatsApp", value: "+20 121 118 3575" },
  { label: "Address", value: "3 Labib Al Batanony, Manyal, Cairo, Egypt" },
];

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiry, setInquiry] = useState("Music Production");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Initialize EmailJS with your service credentials from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      const templateParams = {
        from_name: name,
        from_email: email,
        phone: phone,
        inquiry_type: inquiry,
        message: message,
        to_email: 'limitedmediaproduction@gmail.com',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setInquiry("Music Production");
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid gap-14 pb-16 lg:pb-20">
      <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-soft">
        <img
          src={heroImage}
          alt="Contact Us"
          className="h-[520px] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <h1 className="font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="mp-card overflow-hidden rounded-[28px] border border-white/10 bg-black/20 shadow-soft" data-animate="fade-up">
        <div className="grid gap-0 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="text-xs uppercase tracking-[0.3em] text-mp-faint">Start Your Project With Us</div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
              Let’s Create Something That <span className="text-mp-accent">Lasts</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-mp-muted">
              Whether you're an artist with a sound to share, a brand with a story to tell, or a company ready to make a visual impact, we're here to build it with you.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 grid gap-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="h-12 rounded-lg border border-white/10 bg-black/25 px-4 text-sm text-white/90 outline-none placeholder:text-white/30 focus:border-mp-accent/70"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-12 rounded-lg border border-white/10 bg-black/25 px-4 text-sm text-white/90 outline-none placeholder:text-white/30 focus:border-mp-accent/70"
                  placeholder="E-mail"
                  required
                />
              </div>
              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="h-12 rounded-lg border border-white/10 bg-black/25 px-4 text-sm text-white/90 outline-none placeholder:text-white/30 focus:border-mp-accent/70"
                placeholder="Phone Number"
              />
              <select
                value={inquiry}
                onChange={(event) => setInquiry(event.target.value)}
                className="h-12 rounded-lg border border-white/10 bg-black/25 px-4 text-sm text-white/90 outline-none focus:border-mp-accent/70"
              >
                <option>Music Production</option>
                <option>Film Production</option>
                <option>Digital Content</option>
                <option>Collaboration</option>
              </select>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="min-h-[150px] resize-none rounded-[24px] border border-white/10 bg-black/25 px-4 py-4 text-sm text-white/90 outline-none placeholder:text-white/30 focus:border-mp-accent/70"
                placeholder="Your Message"
                required
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="rounded-lg bg-mp-accent px-7 py-3 text-base font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              
              {submitStatus === "success" && (
                <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-green-400">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-red-400">
                  Sorry, there was an error sending your message. Please try again or contact us directly.
                </div>
              )}
              
              <p className="text-sm text-mp-muted">
                We typically respond within 24–48 hours. Let's make something unforgettable.
              </p>
            </form>
          </div>

          <div className="border-t border-white/10 lg:border-l lg:border-t-0 p-8 sm:p-10 lg:p-12">
            <div className="text-xs uppercase tracking-[0.3em] text-mp-faint">Reach Out Directly</div>
            <div className="mt-6 space-y-5">
              {contactDetails.map((item) => (
                <div key={item.label} className="rounded-[24px] border border-white/10 bg-black/15 p-5">
                  <div className="text-sm uppercase tracking-[0.22em] text-mp-faint">{item.label}</div>
                  <div className="mt-3 text-base text-white">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-display text-3xl text-white">Let’s Bring Your Vision to <span className="text-mp-accent">Life</span></h3>
              <p className="mt-4 text-base leading-8 text-mp-muted">
                We believe every project we take on has the power to shift culture, inspire emotion, and make your message unforgettable. We can’t wait to hear what you’re working on.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/80">
              <span className="text-mp-accent">Social Media:</span>
              <a href="https://www.instagram.com/limitedmediachannel" target="_blank" rel="noopener noreferrer" className="hover:text-mp-accent transition">Instagram</a>
              <span>•</span>
              <a href="https://www.youtube.com/@limitedmediachannel" target="_blank" rel="noopener noreferrer" className="hover:text-mp-accent transition">YouTube</a>
              <span>•</span>
              <a href="https://www.tiktok.com/@limitedmediachannel" target="_blank" rel="noopener noreferrer" className="hover:text-mp-accent transition">TikTok</a>
              <span>•</span>
              <a href="https://www.linkedin.com/company/limited-media-production-company" target="_blank" rel="noopener noreferrer" className="hover:text-mp-accent transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
