import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-spacing-sm bg-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-serif text-5xl font-bold text-gold lg:text-6xl">
              Mission & Vision
            </h1>
            <p className="text-xl text-gray-200">
              Our commitment to excellence in international accounting
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="flex flex-col justify-center">
              <div className="mb-8 inline-flex rounded-full bg-gold/10 p-6">
                <Target className="h-12 w-12 text-gold" />
              </div>
              <h2 className="mb-8 font-serif text-4xl font-bold text-navy lg:text-5xl">
                Our Mission
              </h2>
              <p className="text-2xl font-medium leading-relaxed text-navy mb-8">
                To deliver accurate, transparent, and dependable bookkeeping and taxation solutions 
                that empower businesses to achieve financial excellence across international markets.
              </p>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  We are dedicated to providing exceptional accounting services that businesses 
                  can rely on with complete confidence. Our mission drives us to maintain the highest 
                  standards of accuracy, transparency, and professional integrity in every client engagement.
                </p>
                <p>
                  Through our unwavering commitment to dependability and excellence, we help businesses 
                  navigate complex international accounting requirements with clarity and peace of mind, 
                  enabling them to focus on strategic growth and operational success.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src="/assets/generated/mission-vision-bg.dim_1200x600.png"
                alt="Mission and vision"
                className="rounded-xl shadow-premium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="order-2 flex items-center lg:order-1">
              <img
                src="/assets/generated/about-global.dim_1200x600.png"
                alt="Global partnership"
                className="rounded-xl shadow-premium"
              />
            </div>

            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-8 inline-flex rounded-full bg-gold/10 p-6">
                <Eye className="h-12 w-12 text-gold" />
              </div>
              <h2 className="mb-8 font-serif text-4xl font-bold text-navy lg:text-5xl">
                Our Vision
              </h2>
              <p className="text-2xl font-medium leading-relaxed text-navy mb-8">
                To become the most trusted long-term financial partner for businesses operating 
                across international borders, recognized for our expertise, integrity, and commitment 
                to client success.
              </p>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  We envision a future where businesses across the globe view JP Global Accounting 
                  not merely as service providers, but as integral strategic partners in their 
                  financial success and sustainable growth.
                </p>
                <p>
                  By building lasting relationships founded on trust, deep expertise, and exceptional 
                  service delivery, we aspire to be the premier accounting partner for businesses 
                  navigating the complexities of international financial management and regulatory compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Highlight */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-16 text-center font-serif text-4xl font-bold text-navy lg:text-5xl">
              Guided by Our Principles
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
                <h3 className="mb-3 font-serif text-xl font-bold text-navy">Accuracy</h3>
                <p className="text-gray-600">Precision and excellence in every detail</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
                <h3 className="mb-3 font-serif text-xl font-bold text-navy">Transparency</h3>
                <p className="text-gray-600">Clear and honest communication always</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
                <h3 className="mb-3 font-serif text-xl font-bold text-navy">Dependability</h3>
                <p className="text-gray-600">Reliable service you can trust completely</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
