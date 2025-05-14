import ProductCard from "./ProductCard";

interface Category{
    id:number,
    name:string,
    description: string,
    createdAt:string
}

interface Product{
    id:number,
    image:string,
    name:string,
    category:Category,
    prescriptionRequired:string,
    price:string,
    createdAt:string,
    description:string,
    categoryId:number,
    usage:string,
    dosage:string
    sideEffects: string,
    featured:boolean,
    inStock:boolean
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
