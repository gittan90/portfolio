export default function About() {
  return (
    <section id="about" className="py-24 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="text-xs uppercase tracking-[0.28em] text-gray-500">
              About
            </h2>
          </div>

          <div className="md:col-span-8">
            <p className="text-[16px] md:text-[17px] leading-[2.05] text-gray-800">
              I'm a UX/UI designer with a frontend background and roots in
              communication and project management. I work close to users and
              business goals — translating complex needs into clear, functional
              interfaces that create real value. I'm drawn to the intersection
              of design strategy, user experience, and implementation, where
              good decisions actually make a difference for both users and the
              business.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {[
                "UX",
                "UI",
                "Design strategy",
                "Frontend",
                "Accessibility",
                "Information architecture",
              ].map((t) => (
                <span
                  key={t}
                  className="border border-gray-200 px-3 py-1 text-xs text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
