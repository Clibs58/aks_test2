export function CaseStudies() {
  return (
    <section id="about" className="py-32 bg-black/30">
      <div className="container px-6 mx-auto">

        {/* Heading */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About AKS</h2>
          <p className="text-gray-400 text-lg">
            Product leadership. Founder-first. Built for real impact.
          </p>
        </div>

        <div className="overflow-hidden border border-white/5 bg-card rounded-xl">
          <div className="flex flex-col md:flex-row min-h-[360px]">

            {/* PURPOSE */}
            <div className="relative w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />

              <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4">
                Purpose
              </span>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Building Products That Matter
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                Explain AKS identity, positioning, and long-term vision.
              </p>
            </div>

            {/* CONTENT */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10">
              <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4">
                Who We Are
              </span>

              <p className="text-lg text-white leading-relaxed mb-6">
                AKS is a product leadership ecosystem helping student-led startups
                build real products with clarity and structure.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                We work as an embedded product team, supporting strategy,
                execution, and go-to-market, while also building AKS-owned SaaS
                products and connecting founders with industry experts.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
