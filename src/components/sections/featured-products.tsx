
import { ProductCard } from "@/components/ui/product-card";

const FEATURED_PRODUCTS = [
  {
    id: "1",
    name: "AI Image Generator Pro",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "AI Tools",
  },
  {
    id: "2",
    name: "Neural Network Framework",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "AI Software",
  },
  {
    id: "3",
    name: "Smart Assistant Bot",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "AI Chatbots",
  },
  {
    id: "4",
    name: "Deep Learning Suite",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    category: "AI Software",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-neutral-50">
            Featured AI Solutions
          </h2>
          <p className="mx-auto max-w-2xl text-neutral-400">
            Discover our handpicked selection of cutting-edge AI tools and solutions, designed to 
            transform your workflow and enhance productivity.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} className="animate-fade-up" />
          ))}
        </div>
      </div>
    </section>
  );
}
