import CatalogItemProps from "./CatalogueItem";

type ProductItemProps = {
  item: CatalogItemProps;
};

const ProductItem = ({ item }: ProductItemProps) => {
  const title =
    item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title;

  let currency = `${item.price} ${item.currencyCode}`;

  switch (item.currencyCode) {
    case "USD":
      currency = `$${item.price}`;
      break;
    case "EUR":
      currency = `€${item.price}`;
      break;
    case "GBP":
      currency = `${item.price} £`;
      break;
    case "CAD":
      currency = `${item.price} C$`;
  }

  let levelClass = "low";

  if (item.quantity > 20) {
    levelClass = "high";
  } else if (item.quantity > 10) {
    levelClass = "medium";
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.img} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{currency}</p>
        <p className={`item-quantity level-${levelClass}`}>
          {`${item.quantity} left`}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
