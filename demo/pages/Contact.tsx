import { Marquee, FacebookIcon, InstagramIcon, TelegramIcon, WhatsAppIcon } from '../../src';

const MARQUEE_ITEMS = ['Different by Design', 'Natural Fabrics Honest Design', 'Not made to fit in', 'Become the Exception'];

export default function Contact() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-[60px] px-[80px] pb-[55px] pt-[80px]">
        <div className="w-[713px] shrink-0 overflow-hidden">
          <img src="/images/contact-hero.jpg" alt="Salti campaign — model in a cream hoodie against greenery" className="h-[576px] w-full object-cover object-top" />
        </div>

        <div className="flex flex-1 flex-col items-start gap-12 text-white">
          <h1 className="font-display text-display">Contact us</h1>
          <div className="font-ui text-detail">
            <p>hello@Salti.com</p>
            <p>076 207 3387</p>
            <p>Join our community</p>
          </div>
          <div className="flex flex-col items-start gap-6">
            <p className="font-label text-label capitalize">Socials:</p>
            <div className="flex gap-2">
              <a href="#" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Telegram">
                <TelegramIcon />
              </a>
              <a href="#" aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Marquee items={MARQUEE_ITEMS} />
    </div>
  );
}
