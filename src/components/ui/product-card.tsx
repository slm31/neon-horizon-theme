
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  className?: string;
}

export function ProductCard({ id, name, price, image, category, className }: ProductCardProps) {
  return (
    <Link
      to={`/product/${id}`}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-neutral-800/30 backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
        className
      )}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
          {category}
        </div>
        <h3 className="mb-2 text-lg font-semibold text-neutral-50">{name}</h3>
        <p className="text-sm font-medium text-accent">${price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
