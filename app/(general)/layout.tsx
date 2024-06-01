import { Navbar } from "@/components";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Navbar />
      <section className="flex flex-col items-center p-24">
        <span className="text-lg">Hello Root Layout About</span>
        {children}
      </section>
    </>
  );
}
