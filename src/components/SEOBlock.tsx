'use client';

import { useI18n } from '@/i18n';

const seoContent: Record<string, { title: string; paragraphs: string[] }> = {
  ru: {
    title: 'MTProto прокси для Telegram — бесплатно и безопасно',
    paragraphs: [
      'MTProxy — это сервис бесплатных MTProto-прокси для мессенджера Telegram. Наши прокси-серверы расположены в Европе (Германия, Польша, Финляндия) и обеспечивают стабильное соединение с высокой скоростью. Подключение занимает несколько секунд — достаточно нажать одну кнопку.',
      'MTProto — это протокол, разработанный командой Telegram специально для быстрой и защищённой передачи данных. В отличие от VPN, MTProto-прокси работает только с трафиком Telegram, не замедляя другие приложения. Весь трафик шифруется, и прокси-сервер не имеет доступа к содержимому ваших сообщений.',
      'Если Telegram заблокирован вашим провайдером или работает нестабильно — используйте наши прокси для обхода блокировок. Список серверов регулярно обновляется. Сервис работает на всех устройствах: Android, iPhone, iPad, Windows, macOS, Linux. Добавьте сайт на главный экран, чтобы всегда иметь доступ к актуальному списку рабочих прокси.',
    ],
  },
  en: {
    title: 'Free MTProto Proxy for Telegram — Fast & Secure',
    paragraphs: [
      'MTProxy is a free MTProto proxy service for Telegram messenger. Our proxy servers are located across Europe (Germany, Poland, Finland) and provide stable, high-speed connections. Connecting takes just seconds — simply tap one button.',
      'MTProto is a protocol developed by the Telegram team specifically for fast and secure data transfer. Unlike VPNs, MTProto proxies only handle Telegram traffic without slowing down other apps. All traffic is encrypted, and the proxy server has no access to your message content.',
      'If Telegram is blocked by your ISP or works unstably — use our proxies to bypass restrictions. The server list is regularly updated. The service works on all devices: Android, iPhone, iPad, Windows, macOS, Linux. Add this site to your home screen for instant access to working proxy servers.',
    ],
  },
  ir: {
    title: 'پروکسی رایگان MTProto برای تلگرام — سریع و امن',
    paragraphs: [
      'MTProxy یک سرویس پروکسی رایگان MTProto برای پیام‌رسان تلگرام است. سرورهای پروکسی ما در اروپا (آلمان، لهستان، فنلاند) قرار دارند و اتصال پایدار با سرعت بالا را فراهم می‌کنند. اتصال فقط چند ثانیه طول می‌کشد — کافیست یک دکمه را بزنید.',
      'MTProto پروتکلی است که توسط تیم تلگرام به‌طور ویژه برای انتقال سریع و امن داده‌ها توسعه داده شده است. برخلاف VPN، پروکسی MTProto فقط ترافیک تلگرام را مدیریت می‌کند و سایر برنامه‌ها را کند نمی‌کند. تمام ترافیک رمزگذاری شده و سرور پروکسی به محتوای پیام‌های شما دسترسی ندارد.',
      'اگر تلگرام توسط ISP شما مسدود شده یا ناپایدار کار می‌کند — از پروکسی‌های ما برای دور زدن فیلتر استفاده کنید. لیست سرورها به‌طور مرتب به‌روزرسانی می‌شود. این سرویس روی تمام دستگاه‌ها کار می‌کند: اندروید، آیفون، آیپد، ویندوز، مک، لینوکس.',
    ],
  },
};

export default function SEOBlock() {
  const { lang } = useI18n();
  const content = seoContent[lang] || seoContent.en;

  return (
    <section className="seo-block" aria-label="About service">
      <h2>{content.title}</h2>
      {content.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </section>
  );
}
