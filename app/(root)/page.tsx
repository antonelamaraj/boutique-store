import { getLatestProducts } from "@/lib/actions/product.actions";
import { log } from "console";
import ProductList from "@/components/ui/shared/header/product/product-list";

const HomePage = async () => {

  const latestProducts = await getLatestProducts();
  return (
     <>
      <ProductList data={latestProducts} 
      title="Antonela's Products"/>
  </>

  );
}
 
export default HomePage;