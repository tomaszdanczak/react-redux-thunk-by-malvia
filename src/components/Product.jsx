import Card from "./Card";

export default function Product({ product }) {
  const { id, title, image } = product;

  return (
    <Card>
      <div className="h-64 p-5 flex justify-center">
        <img className="max-w-full h-full" src={image} alt={title} />
      </div>
      <div className="border-t-2 p-4">
        <h2 className="font-semibold text-lg">{title}</h2>
      </div>
    </Card>
  );
}
