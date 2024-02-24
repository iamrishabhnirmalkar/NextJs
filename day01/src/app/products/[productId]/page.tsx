function ProductDetails({ params }: { params: { productId: string } }) {
  return <div>Product details are here {params.productId}</div>;
}

export default ProductDetails;
