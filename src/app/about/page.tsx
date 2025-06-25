import PortraitFrame from "@/components/PortraitFrame";

export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">About Me</h2>
      <PortraitFrame small />
      <div className="prose prose-neutral mt-8">
        {/* TODO: Lägg in din riktiga presentationstext här */}
        <p>
          Hey there! I&#39;m a passionate IT enthusiast from Stockholm, Sweden, with a love for web
          development and full-stack technologies.
        </p>
      </div>
    </section>
  );
}
