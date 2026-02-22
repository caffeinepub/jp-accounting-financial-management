import { BookOpen, Calculator, FileText, CreditCard, BarChart3, Settings } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: BookOpen,
      title: 'Bookkeeping Services',
      description: 'Complete bookkeeping solutions from transaction recording to financial reporting, ensuring your books are always accurate and up-to-date.',
    },
    {
      icon: BarChart3,
      title: 'Financial Reporting',
      description: 'Comprehensive financial statements and reports that provide clear insights into your business performance and financial health.',
    },
    {
      icon: Calculator,
      title: 'Taxation Support (US Sales Tax, UK VAT, AUS BAS)',
      description: 'Expert tax compliance services including US Sales Tax preparation and filing, UK VAT registration and returns, and Australian BAS lodgement.',
    },
    {
      icon: CreditCard,
      title: 'Payroll Processing',
      description: 'Reliable and accurate payroll services ensuring timely payments, tax withholdings, and compliance with employment regulations.',
    },
    {
      icon: Settings,
      title: 'QuickBooks & Xero',
      description: 'Certified expertise in QuickBooks and Xero accounting software, including setup, migration, training, and ongoing support.',
    },
    {
      icon: FileText,
      title: 'Bank Reconciliation',
      description: 'Accurate reconciliation of all bank and credit card accounts to ensure your financial records match your actual transactions.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-spacing-sm bg-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-serif text-5xl font-bold text-gold lg:text-6xl">
              Our Services
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive bookkeeping and taxation solutions for international businesses
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-navy lg:text-5xl">
              Professional Accounting Solutions
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              We provide a full range of bookkeeping and taxation services tailored to meet the 
              unique needs of businesses operating in the US, UK, and Australia
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-gold hover:shadow-premium"
                >
                  <div className="mb-6 inline-flex rounded-full bg-gold/10 p-4">
                    <Icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="mb-4 font-serif text-xl font-bold text-navy">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <img
              src="/assets/generated/services-bg.dim_1200x600.png"
              alt="Professional accounting services"
              className="mx-auto rounded-xl shadow-premium"
            />
          </div>
        </div>
      </section>

      {/* Software Expertise */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-navy lg:text-5xl">
              Software Expertise
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              We are certified experts in leading accounting software platforms
            </p>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-10 shadow-sm">
                <h3 className="mb-4 font-serif text-2xl font-bold text-navy">QuickBooks</h3>
                <p className="text-gray-600 leading-relaxed">
                  Certified QuickBooks ProAdvisors with extensive experience in setup, 
                  migration, and ongoing support for businesses of all sizes.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-10 shadow-sm">
                <h3 className="mb-4 font-serif text-2xl font-bold text-navy">Xero</h3>
                <p className="text-gray-600 leading-relaxed">
                  Xero certified advisors providing expert guidance and support for 
                  cloud-based accounting solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
