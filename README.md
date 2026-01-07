## Internationalization Setup with next-intl

This project uses [next-intl](https://next-intl-docs.vercel.app/) for multilingual support in Next.js.

### 1. Install Required Packages

```bash
npm install next-intl
```

### 2. Configure Next.js

Update your `next.config.ts` to enable internationalized routing:

```ts
// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'fr', 'es'], // Add your supported locales here
    defaultLocale: 'en',
  },
  // ...other config
};

module.exports = nextConfig;
```

### 3. Create Middleware Proxy

Add a `proxy.ts` file at the root of your project to handle locale-based routing or middleware logic as needed.

```ts
// proxy.ts
// Example: You can add custom logic here for handling requests or locale redirects
```

### 4. Set Up the `i18n` Folder

Create an `i18n` directory at the root with the following files:

- `request.ts`: Handles locale detection and request helpers.
- `routing.ts`: Contains locale-aware routing helpers and configuration.
- `navigation.ts`: Manages navigation items and translations.

Example structure:

```
i18n/
  ├─ request.ts
  ├─ routing.ts
  └─ navigation.ts
```

### 5. Use next-intl in Your App

Wrap your app with `NextIntlClientProvider` and use the locale from params:

```tsx
// app/[locale]/layout.tsx
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

### 6. Add Global CSS Support

If you import global CSS (e.g., `import "./globals.css";`), add a TypeScript declaration file at the root:

```ts
// global.d.ts
declare module "*.css";
```
### 7. Create a Dynamic Route for Locale

Create a new folder named `[locale]` inside your `app/` directory. Inside `[locale]`, add a `layout.tsx` file:

```tsx
// app/[locale]/layout.tsx
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

- The `[locale]` route enables locale-based routing.
- The `locale` is extracted from `params`.
- `hasLocale` checks if the locale is supported.
- Children are wrapped in `NextIntlClientProvider` for translation support.

---

This ensures all pages under the `[locale]` route are properly internationalized.
---

### 8. Add Messages for Each Locale

Create a `messages` folder in the root of your project. Inside, add two files: `en.json` and `np.json` (for English and Nepali).

Example structure:
```
messages/
  ├─ en.json
  └─ np.json
```

Each file should contain key-value pairs for your translations:

**en.json**
```json
{
  "about": "About Me",
  "projects": "Projects",
  "contact": "Contact",
  // ...other keys
}
```

**np.json**
```json
{
  "about": "मेरो बारेमा",
  "projects": "परियोजनाहरू",
  "contact": "सम्पर्क",
  // ...other keys
}
```

Update your app to load the correct messages based on the locale. For example, in your `[locale]/layout.tsx`:

```tsx
import { NextIntlClientProvider } from "next-intl";
import messagesEn from "@/messages/en.json";
import messagesNp from "@/messages/np.json";

const messages = {
  en: messagesEn,
  np: messagesNp,
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  // ...locale check logic...
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages[locale]}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

Now your Next.js app is ready for multilingual support using next-intl!

---

## Next-intl Implementation Summary

- Implemented a LocaleSwitcher component that toggles the site language between English (`en`) and Nepali (`np`).
- Created `app/[locale]/page.tsx` to get the locale from route params and render the correct language content.
- In `app/[locale]/layout.tsx`, set `setRequestLocale(locale)` so the locale is applied to all pages inside the `[locale]` route automatically.
- Added `generateStaticParams` for static site generation, telling Next.js which dynamic routes (`en`, `np`) to pre-render at build time.
- Created a `messages` folder in the project root with two files: `en.json` (all English text) and `np.json` (all Nepali text).
- All application UI data (labels, buttons, section titles, footer text, etc.) is integrated with next-intl using the `useTranslations` hook. All sections and the footer now use translation keys for multilingual support.

---