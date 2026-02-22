import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

export default function Home() {
  const highlights = [
    'US, UK & Australian Compliance Expertise',
    'QuickBooks & Xero Certified',
    'Secure & Confidential Service',
    'Dedicated Account Management',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/assets/generated/hero-finance.dim_1920x800.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/70 to-navy" />
        
        <div className="container relative mx-auto px-4 py-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mb-8 font-serif text-5xl font-bold leading-tight text-gold lg:text-7xl">
              15+ Years of International Accounting & Tax Expertise
            </h1>
            <p className="mb-10 text-xl text-gray-200 lg:text-2xl">
              Trusted Bookkeeping & Tax Solutions for US, UK & Australia Businesses
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="group bg-gold text-navy hover:bg-gold/90 text-lg px-10 py-7 rounded-full font-semibold shadow-premium"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            {/* Highlights */}
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-3 rounded-xl border border-gold/30 bg-navy/50 backdrop-blur-sm p-5"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold" />
                  <span className="text-sm font-medium text-white">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <h2 className="mb-6 font-serif text-4xl font-bold text-navy lg:text-5xl">
                Your Experienced International Accounting Partner
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  JP Global Accounting is your trusted partner in navigating the complexities of 
                  international bookkeeping and taxation. With over 15 years of specialized experience, 
                  we help businesses stay compliant and financially organized across the United States, 
                  United Kingdom, and Australia.
                </p>
                <p>
                  Our team of certified professionals understands the unique challenges of managing 
                  finances across multiple jurisdictions. We provide comprehensive solutions that ensure 
                  your business remains compliant with local regulations while maintaining accurate, 
                  transparent financial records.
                </p>
                <p>
                  From bookkeeping and financial reporting to complex tax compliance, we deliver 
                  dependable services that give you peace of mind and allow you to focus on growing 
                  your business.
                </p>
              </div>
            </div>

            <div>
              <img
                src="/assets/generated/about-global.dim_1200x600.png"
                alt="JP Global Accounting - International expertise"
                className="rounded-xl shadow-premium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="section-spacing-sm bg-navy">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-6 font-serif text-4xl font-bold text-gold lg:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mb-10 text-xl text-gray-200">
            Let's discuss how we can support your international accounting needs
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-gold text-navy hover:bg-gold/90 text-lg px-10 py-7 rounded-full font-semibold shadow-premium"
            >
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
