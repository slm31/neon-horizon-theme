
import { FeaturedProducts } from "@/components/sections/featured-products";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-sm font-medium text-transparent">
                Welcome to the Future of AI
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-neutral-50 sm:text-6xl">
              Next-Generation AI Solutions
            </h1>
            <p className="mb-8 text-lg text-neutral-400">
              Discover powerful AI tools and solutions that will revolutionize your workflow and unlock 
              new possibilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark">
                Explore Products
              </button>
              <button className="inline-flex items-center rounded-lg border border-neutral-700 bg-neutral-800/50 px-6 py-3 font-medium text-neutral-50 backdrop-blur-sm transition-colors hover:bg-neutral-800">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* Gradient backgrounds */}
        <div className="absolute left-1/2 top-0 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 top-0 -z-10 h-[800px] w-[800px] translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      </section>

      {/* Featured Products */}
      <FeaturedProducts />
    </div>
  );
};

export default Index;
