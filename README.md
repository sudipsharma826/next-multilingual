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
## Personal Data Management with usePersonalData Hook

This project uses a robust, scalable approach to manage all profile and resume data (name, bio, experience, education, etc.) with full multilingual support. Here’s how it works:

### Step-by-Step Process

1. **Define Data with Locales:**
   - All personal, experience, education, and related data is stored in a single JSON file: `lib/data/personal.json`.
   - Fields that need translation (like name, title, bio, etc.) are defined as objects with language keys, e.g.:
     ```json
     {
       "fullName": { "en": "Sudip Sharma", "np": "सुदीप शर्मा" },
       "title": { "en": "Full Stack Developer", "np": "फुल स्ट्याक डेभलपर" }
     }
     ```

2. **Create a Centralized Data Hook:**
   - The custom React hook [`usePersonalData`](hooks/usePersonalData.ts) reads the current locale, loads the JSON, and returns all data with the correct language values.
   - The hook handles all transformation and localization logic, so components only receive ready-to-use, localized data.

3. **Central Data Handling in Pages:**
   - In your main page (e.g., `app/[locale]/page.tsx`), call the hook once to get all personal data for the current locale.
   - Pass the relevant data as props to each section/component (About, Experience, Education, etc.), ensuring a single source of truth and consistent locale support.

### Example Usage

```tsx
// app/[locale]/page.tsx
import { usePersonalData } from '@/hooks/usePersonalData';
import AboutSection from '@/sections/about-section';
// ...other imports

export default function Page() {
  const data = usePersonalData();
  return (
    <>
      <AboutSection personalData={data.personalData} /> with hooks intergration
      {/* Pass other data as needed */}
    </>
  );
}

// In AboutSection: ( defined props type)
export default function AboutSection({ personalData }) {
  return (
    <section>
      <h1>{personalData.fullName}</h1>
      <h2>{personalData.title}</h2>
      <p>{personalData.bio}</p>
      {/* ...other fields... */}
    </section>
  );
}
```

### Why this approach?

- **Centralization:** All data is in one place, making updates easy and consistent.
- **Localization:** The hook provides the correct language (English or Nepali) automatically based on the current locale.
- **Type Safety:** Strongly-typed data reduces bugs and improves developer experience.
- **Reusability:** Any component can access up-to-date, localized data by calling the hook or receiving it as a prop.
- **Separation of Concerns:** UI components focus on rendering, while the hook handles data transformation and localization.
- **Consistent Props:** Passing data as props from the page ensures all sections use the same, up-to-date data and locale.

---
**In summary:**
1. Define your data with both English and Nepali values in JSON.
2. Use a single hook to handle locale and data transformation.
3. Pass the localized data as props from your main page to all sections.
This keeps your profile and resume data maintainable, scalable, and ready for multilingual support.
