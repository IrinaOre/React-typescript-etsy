import "./App.css";
import Listing from "./components/LIsting";
import CatalogItemProps from "./components/CatalogueItem";
import etsy from "./components/etsy.json";

export default function App() {
  const activeEtsy = etsy.filter((item) => item.state === "active");

  const catalog: CatalogItemProps[] = [];

  activeEtsy.forEach((item) => {
    catalog.push({
      id: item.listing_id,
      url: item.url || "",
      img: item.MainImage?.url_570xN || "",
      title: item.title || "",
      currencyCode: item.currency_code || "",
      price: item.price || "",
      quantity: item.quantity || 0,
    });
  });

  return <Listing catalog={catalog} />;
}
