import { useLocation, useParams } from "react-router-dom";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import ProductDetails from "../Products/ProductDetails";
import ProductRow from "../Products/ProductRow";
import { plantProducts } from "../../constants/tempProducts";

export default function ProductLanding() {
  const plantName = useLocation().state.name;
  const { id } = useParams();
  const product = plantProducts.find(
    (product) => product.id == parseInt(id as string)
  );
  return (
    <div className="flex flex-col max-w-[1600px] w-full px-[5vw] mb-10">
      <div className="mt-5 mb-8">
        <BreadCrumb plantName={plantName} />
      </div>
      <ProductDetails product={product} />
      <div className="flex flex-col gap-y-20">
        <ProductRow title="Related Products" start={0} end={6} />
        <ProductRow title="You May Also Like" start={3} end={9} />
      </div>
    </div>
  );
}
