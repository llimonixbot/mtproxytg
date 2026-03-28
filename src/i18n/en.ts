import { Translation } from '@/lib/types';

const en: Translation = {
  nav: {
    home: 'Home',
    howto: 'How to Connect',
    about: 'About',
    pwa: 'Add to Screen',
    contacts: 'Contacts',
  },
  hero: {
    badge: 'Free proxies',
    title: 'Fast access to ',
    titleAccent: 'Telegram',
    desc: 'MTProto proxies for a stable connection. Choose the nearest server and connect in one tap.',
    btn_channel: 'Our Channel',
    btn_howto: 'How to Connect',
  },
  proxies: {
    label: 'Locations',
    title: 'Connect',
    desc: 'Choose a country and tap "Connect".',
    connect: 'Connect ->',
    online: 'Online',
  },
  pin: {
    title: 'Keep the site handy',
    desc: "Add this page to your home screen so you don't lose quick access to the server list — one tap to open, no searching through tabs.",
  },
  faq: {
    label: 'FAQ',
    title: 'Frequently Asked Questions',
    items: [
      {
        q: 'What is MTProto Proxy?',
        a: "MTProto is Telegram's protocol. A special proxy server routes the messenger's traffic through a chosen node, which often improves stability when the connection to regular servers is unstable or slow.",
      },
      {
        q: 'Is it safe?',
        a: "MTProto proxies cannot see the content of your messages — all traffic is encrypted using Telegram's MTProto protocol. The proxy only routes the connection.",
      },
      {
        q: 'Why did the proxy stop working?',
        a: 'Servers can be blocked by ISPs. We regularly update the list — visit the site or our channel for fresh proxies.',
      },
      {
        q: 'Is it free?',
        a: "Yes. All proxies are provided for free. We don't collect data, but we can show ads inside Telegram.",
      },
      {
        q: 'Which devices are supported?',
        a: 'All of them: Android, iOS, Windows, macOS, Linux. Connection is set up directly in Telegram settings.',
      },
    ],
  },
  howto_page: {
    title: 'How to Connect',
    desc: 'Step-by-step guide for any device',
    steps: [
      {
        title: 'Tap "Connect"',
        text: 'On the home page, choose a proxy and tap the button. Telegram will open automatically.',
      },
      {
        title: 'Confirm connection',
        text: 'In the Telegram dialog, tap "Connect Proxy".',
      },
      {
        title: 'Done',
        text: 'The proxy is active. If the connection is unstable — try another server from the list.',
      },
    ],
    manual_title: 'Manual Setup',
    manual_text:
      'Open Telegram → Settings → Data and Storage → Connection Type → Use Proxy → Add Proxy. Select type "MTProto" and enter the server details.',
  },
  about_page: {
    title: 'About',
    desc: 'We maintain an up-to-date list of public MTProto proxies and provide convenient links for quick connection in Telegram.',
    what_title: 'What is MTProto Proxy',
    what_text:
      "MTProto is Telegram's protocol. A special proxy server routes the messenger's traffic through a chosen node, which often improves stability when the connection to regular servers is unstable or slow.",
    how_title: 'How to use the catalog',
    how_text:
      'No registration required: open the home page, choose a country and tap "Connect". Details are in the "How to Connect" section.',
    updates_title: 'Updates',
    updates_text:
      "New servers and announcements are published in the official channel. We recommend subscribing so you don't miss changes to the list.",
    responsibility_title: 'Disclaimer',
    responsibility_text:
      'Proxies are provided for free and "as is". Assess the risks before use and consult Telegram documentation as needed.',
  },
  pwa_page: {
    title: 'Add to Home Screen',
    desc: 'Quick access to proxies with one tap',
    subtitle: 'Choose your platform',
    sections: [
      {
        title: 'iPhone / iPad (Safari)',
        steps: [
          { title: 'Open the site in Safari', desc: "Must be Safari — it won't work from Chrome or Firefox." },
          { title: 'Tap "Share"', desc: 'The square icon with an arrow at the bottom of the screen.' },
          { title: 'Select "Add to Home Screen"', desc: 'Scroll the list and tap it. Confirm the addition.' },
        ],
      },
      {
        title: 'Android (Chrome)',
        steps: [
          { title: 'Open the site in Chrome', desc: 'Or any other Chromium-based browser.' },
          { title: 'Open the menu', desc: 'Three dots in the top-right corner.' },
          { title: 'Tap "Add to Home Screen"', desc: 'Confirm — the shortcut will appear among your apps.' },
        ],
      },
    ],
  },
  contacts_page: {
    title: 'Contacts',
    desc: 'Get in touch',
    text: 'All questions, suggestions, and requests to add proxies — in our Telegram channel.',
    btn: 'Open channel in Telegram',
  },
  footer: {
    copy: '2026 © MTProxy for Telegram. All rights reserved. Proxies are provided "as is". Use at your own risk.',
  },
};

export default en;
