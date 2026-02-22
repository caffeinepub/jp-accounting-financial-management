import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success('Message sent successfully!', {
      description: 'We will get back to you within 24 hours.',
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      <Toaster />
      
      {/* Hero Section */}
      <section className="section-spacing-sm bg-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-serif text-5xl font-bold text-gold lg:text-6xl">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200">
              Get in touch to discuss your international accounting needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-20 grid gap-10 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Email */}
            <div className="group rounded-xl border border-gray-200 bg-white p-10 text-center shadow-sm transition-all hover:border-gold hover:shadow-premium">
              <div className="mb-6 inline-flex rounded-full bg-gold/10 p-6">
                <Mail className="h-10 w-10 text-gold" />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-bold text-navy">
                Email
              </h3>
              <p className="mb-6 text-gray-600">jpfinance6419@gmail.com</p>
              <a
                href="mailto:jpfinance6419@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gold text-navy hover:bg-gold/90 font-semibold px-8 py-6 rounded-full">
                  Send Email
                </Button>
              </a>
            </div>

            {/* WhatsApp */}
            <div className="group rounded-xl border border-gray-200 bg-white p-10 text-center shadow-sm transition-all hover:border-gold hover:shadow-premium">
              <div className="mb-6 inline-flex rounded-full bg-gold/10 p-6">
                <SiWhatsapp className="h-10 w-10 text-gold" />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-bold text-navy">
                WhatsApp
              </h3>
              <p className="mb-6 text-gray-600">+91 9081710470</p>
              <a
                href="https://wa.me/919081710470"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gold text-navy hover:bg-gold/90 font-semibold px-8 py-6 rounded-full">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border border-gray-200 bg-white p-10 lg:p-16 shadow-sm">
              <div className="mb-10 text-center">
                <h2 className="mb-4 font-serif text-3xl font-bold text-navy lg:text-4xl">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 text-lg">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <Label htmlFor="name" className="text-navy font-medium text-base">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-3 border-gray-300 bg-white text-navy placeholder:text-gray-400 h-12 text-base"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-navy font-medium text-base">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-3 border-gray-300 bg-white text-navy placeholder:text-gray-400 h-12 text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-navy font-medium text-base">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="mt-3 border-gray-300 bg-white text-navy placeholder:text-gray-400 text-base"
                    placeholder="Tell us about your accounting needs..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold text-navy hover:bg-gold/90 text-lg py-7 rounded-full font-semibold shadow-premium"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 font-serif text-3xl font-bold text-navy lg:text-4xl">
              Business Hours
            </h2>
            <div className="rounded-xl border border-gray-200 bg-white p-10 shadow-sm">
              <div className="space-y-4 text-lg">
                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span className="font-medium text-navy">Monday - Friday</span>
                  <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span className="font-medium text-navy">Saturday</span>
                  <span className="text-gray-600">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-navy">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
              <p className="mt-8 text-sm text-gray-500">
                * Times shown in IST (Indian Standard Time)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
