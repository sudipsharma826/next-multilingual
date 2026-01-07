'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

const SUPPORTED_LOCALES = ['en', 'np'];

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;

    const segments = pathname.split('/');
    // If the first segment is empty (because path starts with '/'), locale is at index 1
    if (SUPPORTED_LOCALES.includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    const newPath = segments.join('/') || '/';
    router.push(newPath);
  };

  return (
    <select
      value={locale}
      onChange={(e) => switchLocale(e.target.value)}
      aria-label="Select language"
    >
      <option value="en">English</option>
      <option value="np">नेपाली</option>
    </select>
  );
}