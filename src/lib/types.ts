export interface Proxy {
  geo: string;
  name: string;
  server: string;
  port: number;
  secret: string;
}

export type Lang = 'ru' | 'en' | 'ir';

export interface NavStrings {
  home: string;
  howto: string;
  about: string;
  pwa: string;
  contacts: string;
}

export interface HeroStrings {
  badge: string;
  title: string;
  titleAccent: string;
  desc: string;
  btn_channel: string;
  btn_howto: string;
}

export interface ProxiesStrings {
  label: string;
  title: string;
  desc: string;
  connect: string;
  online: string;
}

export interface PinStrings {
  title: string;
  desc: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQStrings {
  label: string;
  title: string;
  items: FAQItem[];
}

export interface HowtoStep {
  title: string;
  text: string;
}

export interface HowtoStrings {
  title: string;
  desc: string;
  steps: HowtoStep[];
  manual_title: string;
  manual_text: string;
}

export interface AboutCard {
  icon: string;
  title: string;
  desc: string;
}

export interface AboutStrings {
  title: string;
  desc: string;
  what_title: string;
  what_text: string;
  how_title: string;
  how_text: string;
  updates_title: string;
  updates_text: string;
  responsibility_title: string;
  responsibility_text: string;
}

export interface PWAStepItem {
  title: string;
  desc: string;
}

export interface PWASection {
  title: string;
  steps: PWAStepItem[];
}

export interface PWAStrings {
  title: string;
  desc: string;
  subtitle: string;
  sections: PWASection[];
}

export interface ContactsStrings {
  title: string;
  desc: string;
  text: string;
  btn: string;
}

export interface FooterStrings {
  copy: string;
}

export interface Translation {
  nav: NavStrings;
  hero: HeroStrings;
  proxies: ProxiesStrings;
  pin: PinStrings;
  faq: FAQStrings;
  howto_page: HowtoStrings;
  about_page: AboutStrings;
  pwa_page: PWAStrings;
  contacts_page: ContactsStrings;
  footer: FooterStrings;
}
