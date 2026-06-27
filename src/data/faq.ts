// Single source of truth for the FAQ content — used by the home page (display)
// and the /faq page (display + FAQPage JSON-LD).
export interface FAQItem {
  q: string;
  a: string;
}

export const faqItems: FAQItem[] = [
  {
    q: 'Do you come to our aircraft, or do we need to fly it to a facility?',
    a: "We come to you. Our technicians travel to your aircraft at your home base, FBO, or wherever it's parked. No ferry flights, no repositioning costs.",
  },
  {
    q: 'What aircraft do you service?',
    a: "Gulfstream (GIV–G650), Bombardier Challenger and Global series, Dassault Falcon, Embraer Legacy, and Cessna Citation. If your aircraft isn't listed, call us. We likely support it.",
  },
  {
    q: 'Where are you based?',
    a: 'Our primary bases are Van Nuys (VNY) and Scottsdale (SDL), but we travel nationwide. Wherever your aircraft is, we can get there.',
  },
  {
    q: 'What types of maintenance do you perform?',
    a: 'Line and scheduled maintenance, MEL clearing, borescopes, Pitot Static/91.411/91.413 checks, avionics diagnostics, mobile interior repair, and cleaning, all levels.',
  },
  {
    q: 'Are your technicians FAA-certified?',
    a: 'Yes. Our team holds Part 65 privileges with 200+ years of combined maintenance experience across business aviation.',
  },
  {
    q: 'How do I get started?',
    a: "Call (844) 480-5387 or fill out the contact form for a free assessment. We'll discuss your aircraft, location, and service needs and get back to you within one business day.",
  },
];
