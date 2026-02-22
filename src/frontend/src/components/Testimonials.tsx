import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'Tech Startup, California',
      country: '🇺🇸',
      rating: 5,
      text: 'JP Global Accounting has been instrumental in managing our US sales tax compliance. Their expertise and attention to detail are exceptional.',
    },
    {
      name: 'James Thompson',
      company: 'E-commerce Business, London',
      country: '🇬🇧',
      rating: 5,
      text: 'Outstanding VAT support and bookkeeping services. They understand UK regulations perfectly and always deliver on time.',
    },
    {
      name: 'Emma Wilson',
      company: 'Consulting Firm, Sydney',
      country: '🇦🇺',
      rating: 5,
      text: 'Professional, reliable, and knowledgeable. Their BAS preparation services have made our quarterly reporting seamless.',
    },
  ];

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="mb-6 font-serif text-4xl font-bold text-navy lg:text-5xl">
            Client Testimonials
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Hear what our clients from around the world have to say about our services
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-6 flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="mb-6 text-gray-600 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3 border-t border-gray-200 pt-6">
                <div className="text-3xl">{testimonial.country}</div>
                <div>
                  <p className="font-semibold text-navy">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
