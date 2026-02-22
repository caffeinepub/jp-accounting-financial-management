import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'jp-global-accounting'
  );

  return (
    <footer className="border-t border-gold/20 bg-navy">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        {/* SEO Text */}
        <div className="mb-8 text-center">
          <p className="text-sm leading-relaxed text-gray-400">
            International Bookkeeping & Tax Services | US Accounting Support | UK VAT Specialist | 
            Australian BAS Expert | Remote Accounting Services | QuickBooks & Xero Experts
          </p>
        </div>

        {/* Company Info */}
        <div className="mb-8 text-center">
          <h3 className="mb-2 font-serif text-2xl font-bold text-gold">
            JP Global Accounting
          </h3>
          <p className="text-sm text-gray-300">
            International Bookkeeping & Taxation Experts | US, UK & Australia
          </p>
        </div>

        {/* Copyright and Attribution */}
        <div className="flex flex-col items-center justify-center gap-2 border-t border-gold/10 pt-8 text-center text-sm text-gray-500">
          <p>© {currentYear} JP Global Accounting. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="fill-gold text-gold" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
