import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations();
    return (
        <footer className="mt-32 w-full text-center py-3 text-gray-500 border-t border-gray-200">
            <div>
                {t('footer.name')} &copy; {t('footer.year')}
            </div>
        </footer>
    );
}
