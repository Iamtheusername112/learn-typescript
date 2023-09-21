function NestedObjects() {
  const product: {
    id: number;

    price: number;

    details: {
      title: string;
      description: string;
    };
  } = {
    id: 1,
    price: 1500,
    details: {
      title: "iphone 15 pro max",
      description: "This is the latest iphone",
    },
  };
  return (
    <div>
      <h2>Products</h2>
      <p> {product.id} </p>
      <p> ${product.price} </p>

      <p>{product.details.title}</p>
      <p>{product.details.description}</p>
    </div>
  );
}

export default NestedObjects;
