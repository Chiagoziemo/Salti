import { useNavigate } from 'react-router-dom';
import { BrandStory, Button, DiamondIcon, Marquee } from '../../src';
import { RouterLink } from '../RouterLink';

const MARQUEE_ITEMS = ['Different by Design', 'Natural Fabrics Honest Design', 'Not made to fit in', 'Become the Exception'];

// All copy on this page is pulled from Figma's own "Website Design Brief"
// pages (Project Inspo section, node 4:687) — a brand-language reference
// doc, not a designed page — rather than invented. See DESIGN_SYSTEM.md.
const PILLARS = [
  {
    name: 'Presence',
    body: 'Calm, collected, assured. Unhurried. The SALTí customer moves through the world with all faculties ready.',
  },
  {
    name: 'Excellence',
    body: 'Not perfection — excellence. Every design decision made with intention. The highest standard in typography, spacing, and image quality.',
  },
  {
    name: 'Intentionality',
    body: 'Nothing accidental. Every colour, every font size, every transition is chosen. The í in the logo is a torch — even the smallest detail carries meaning.',
  },
  {
    name: 'Love',
    body: 'Love expressed through craft. How the page feels to scroll, how descriptions read, how the thank you note sounds. The customer feels cared for.',
  },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <BrandStory
        image="/images/IMG_0074.jpg"
        alt="Salti campaign — seated portrait, calm and unhurried"
        heading="Who is SALTí?"
        body="Salti Atelier Limited is a natural fabric fashion brand. The website is not a shop — it is a world. Every person who lands on it should feel something before they buy anything."
        ctaHref="/product"
        ctaLabel="Shop Our Collection"
        linkComponent={RouterLink}
      />

      <div className="flex flex-col gap-10 px-4 py-16 sm:px-6 md:px-10 md:py-20 lg:gap-14 lg:px-[80px] lg:py-[112px]">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <DiamondIcon size={20} className="text-tertiary-200" />
            <span className="font-ui text-cream-tint text-xl font-medium">The Four Brand Pillars</span>
          </div>
          <p className="font-ui text-body max-w-[60ch] opacity-80">
            These pillars hold everything SALTí does. They inform every design decision, copy tone, and visual choice
            on this site.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {PILLARS.map((pillar) => (
            <div key={pillar.name} className="flex flex-col gap-3">
              <h3 className="font-nav text-nav uppercase tracking-wide opacity-60">{pillar.name}</h3>
              <p className="font-ui text-body">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 px-4 py-16 text-center sm:px-6 md:px-10 md:py-20 lg:gap-12 lg:px-[80px] lg:py-[120px]">
        <p className="max-w-[684px] font-ui text-statement">Natural fabrics. Honest design. Be Different.</p>
        <Button withArrow onClick={() => navigate('/product')}>
          Shop Our Collection
        </Button>
      </div>

      <Marquee items={MARQUEE_ITEMS} />
    </div>
  );
}
