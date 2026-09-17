import { Marquee, FacebookIcon, InstagramIcon, TelegramIcon, WhatsAppIcon } from '../../src';

const MARQUEE_ITEMS = ['Different by Design', 'Natural Fabrics Honest Design', 'Not made to fit in', 'Become the Exception'];

export default function Contact() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-10 px-4 pb-10 pt-8 sm:px-6 md:px-10 lg:flex-row lg:items-center lg:gap-[60px] lg:px-[80px] lg:pb-[55px] lg:pt-[80px]">
        <div className="w-full overflow-hidden lg:w-[713px] lg:shrink-0">
          <img
            src="/images/contact-hero.jpg"
            alt="Salti campaign — portrait holding a single rose"
            className="h-[320px] w-full object-cover object-top sm:h-[420px] lg:h-[576px]"
          />
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
