import { Award, Users, Globe, TrendingUp } from 'lucide-react';

export default function AboutUs() {
  const values = [
    {
      icon: Award,
      title: 'Accuracy',
      description: 'Precision and attention to detail in every transaction and report.',
    },
    {
      icon: Users,
      title: 'Compliance',
      description: 'Staying current with international accounting standards and regulations.',
    },
    {
      icon: Globe,
      title: 'Confidentiality',
      description: 'Your financial information is protected with the utmost security.',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'Committed to delivering exceptional service and results.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-spacing-sm bg-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-serif text-5xl font-bold text-gold lg:text-6xl">
              About Us
            </h1>
            <p className="text-xl text-gray-200">
              Your trusted partner in international accounting and financial management
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <h2 className="mb-8 font-serif text-3xl font-bold text-navy lg:text-4xl">
                15+ Years of Excellence
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  JP Global Accounting has been providing professional bookkeeping 
                  and taxation services to businesses across the United States, United Kingdom, 
                  and Australia for over 15 years.
                </p>
                <p>
                  Our team of experienced professionals brings deep expertise in international 
                  accounting standards, ensuring your business remains compliant while optimizing 
                  financial operations across multiple jurisdictions.
                </p>
                <p>
                  We understand the complexities of managing finances in today's global business 
                  environment. That's why we've built our practice on three core principles: 
                  accuracy, compliance, and confidentiality.
                </p>
              </div>
            </div>

            <div>
              <img
                src="/assets/generated/about-global.dim_1200x600.png"
                alt="Trust and partnership"
                className="rounded-xl shadow-premium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-navy lg:text-5xl">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm"
                >
                  <div className="mb-6 inline-flex rounded-full bg-gold/10 p-4">
                    <Icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="mb-4 font-serif text-xl font-bold text-navy">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* International Standards */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 font-serif text-4xl font-bold text-navy lg:text-5xl">
              International Accounting Standards
            </h2>
            <p className="mb-12 text-lg text-gray-600 leading-relaxed">
              Our team maintains current knowledge of accounting standards and regulations across 
              multiple jurisdictions, including GAAP (US), FRS (UK), and Australian Accounting 
              Standards. We ensure your business remains compliant while maximizing efficiency 
              and financial clarity.
            </p>
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-4 text-4xl">🇺🇸</div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-navy">United States</h3>
                <p className="text-sm text-gray-600">US GAAP & Sales Tax Compliance</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-4 text-4xl">🇬🇧</div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-navy">United Kingdom</h3>
                <p className="text-sm text-gray-600">UK FRS & VAT Regulations</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-4 text-4xl">🇦🇺</div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-navy">Australia</h3>
                <p className="text-sm text-gray-600">AAS & BAS Requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
