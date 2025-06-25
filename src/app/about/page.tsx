import PortraitFrame from "@/components/PortraitFrame";

export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Om mig</h2>
      <PortraitFrame small />
      <div className="prose prose-neutral mt-8"></div>
    </section>
  );
}
