import ProductItem from "./ProductItem";
import CatalogItemProps from "./CatalogueItem";

type ListingProps = {
  catalog: CatalogItemProps[];
};

const Listing = ({ catalog }: ListingProps) => {
  return (
    <div className="item-list">
      {catalog.map((item, idx) => (
        <ProductItem key={idx} item={item} />
      ))}
    </div>
  );
};

export default Listing;
