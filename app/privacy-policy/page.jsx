import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'سياسة الخصوصية | The Community',
  description: 'سياسة الخصوصية لشركة تواجد',
};

export default function PrivacyPolicyPage() {
  return <LegalPage type="privacy" />;
}