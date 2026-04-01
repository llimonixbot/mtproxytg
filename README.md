# MTProxy Site

Next.js сайт для MTProto-прокси Telegram.

## Структура

```
src/
├── app/
│   ├── layout.tsx          # Root layout (header, footer, providers)
│   ├── page.tsx            # Главная
│   ├── globals.css         # Все стили
│   ├── howto/page.tsx      # Как подключить
│   ├── about/page.tsx      # О сервисе
│   ├── pwa/page.tsx        # Добавить на экран
│   └── contacts/page.tsx   # Контакты
├── components/
│   ├── AnalyticsScript.tsx # Аналитика
│   ├── Header.tsx          # Шапка + навигация + бургер
│   ├── Footer.tsx          # Подвал
│   ├── ProxyCard.tsx       # Карточка прокси (флаг + кнопка)
│   ├── FlagIcon.tsx        # Флаг страны по ISO-коду
│   ├── FAQ.tsx             # Аккордеон FAQ
│   └── Icons.tsx           # SVG-иконки
├── i18n/
│   ├── index.tsx           # i18n провайдер + хук useI18n
│   ├── ru.ts               # Русский
│   ├── en.ts               # English
│   └── ir.ts               # فارسی
└── lib/
    ├── constants.ts        # CHANNEL_URL, DEFAULT_PROXIES
    └── types.ts            # TypeScript типы

public/
├── proxies.json            # ← РЕДАКТИРУЙ ЭТОТ ФАЙЛ
├── manifest.json           # PWA манифест
├── icon-192.png            # PWA иконка
└── icon-512.png            # PWA иконка
```

## Как обновить прокси

Редактируй `public/proxies.json`:

```json
[
  {
    "geo": "NL",
    "name": "Netherlands #1",
    "server": "proxy-nl1.example.com",
    "port": 443,
    "secret": "ee00000000000000000000000000000000"
  }
]
```

Сайт загружает этот файл при каждом открытии главной страницы.

## Запуск

```bash
npm install
npm run dev      # Development: http://localhost:3000
npm run build    # Production build (static export → out/)
```

## Деплой

Проект настроен на `output: 'export'` — после `npm run build` папку `out/` можно залить на любой статический хостинг:

- **Cloudflare Pages** — `npm run build`, директория `out`
- **Vercel** — подключить репо, всё автоматически
- **Netlify** — build command `npm run build`, publish `out`
- **GitHub Pages** — залить содержимое `out/`

## Локализация

Три языка: RU, EN, IR (фарси с RTL). Переключатель в шапке сайта.
Тексты в `src/i18n/ru.ts`, `en.ts`, `ir.ts`.
