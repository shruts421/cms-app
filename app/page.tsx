import TopHeader from "@/components/top-header";

const title = "PRO-TECH TITAN® Software for Door and Hardware Distributors";
const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
];

export default function Home() {
  return (
    <main>
      <TopHeader title={title} breadcrumbs={breadcrumbs} />
    </main>
  );
}
