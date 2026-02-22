import { Award, Globe, Shield, Target, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Over a decade and a half of proven expertise in international accounting and taxation services.',
    },
    {
      icon: Globe,
      title: 'International Compliance Knowledge',
      description: 'Deep understanding of US, UK, and Australian accounting standards, tax regulations, and compliance requirements.',
    },
    {
      icon: Shield,
      title: 'Data Confidentiality',
      description: 'Your financial data is protected with bank-level security and strict confidentiality protocols.',
    },
    {
      icon: Target,
      title: 'Accuracy & Precision',
      description: 'Meticulous attention to detail ensuring error-free bookkeeping and tax compliance.',
    },
    {
      icon: Headphones,
      title: 'Global Remote Support',
      description: 'Seamless remote accounting services with dedicated support across all time zones.',
    },
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="mb-6 font-serif text-4xl font-bold text-navy lg:text-5xl">
            Why Choose Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover what sets us apart in the world of international accounting and taxation
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-gold hover:shadow-premium"
              >
                <div className="mb-6 inline-flex rounded-full bg-gold/10 p-4">
                  <Icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="mb-4 font-serif text-xl font-bold text-navy">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <img
            src="/assets/generated/why-choose-global.dim_800x600.png"
            alt="Global connectivity"
            className="mx-auto rounded-xl shadow-premium"
          />
        </div>
      </div>
    </section>
  );
}
