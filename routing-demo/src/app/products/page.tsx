import Link from 'next/link';

const ProductsListPage = () => {
  const productId = 4;

  return (
    <div>
      <h2>Products List Page</h2>
      <Link href={'/'}>
        Home
      </Link>
      <h3>
        <Link href={'/products/1'}>Product 1</Link>
      </h3>
      <h3>
        <Link href={'/products/2'}>Product 2</Link>
      </h3>
      <h3>
        <Link href={'/products/3'} replace>Product 3</Link>
      </h3>
      <h3>
        <Link href={`/products/${productId}`}>Product 4</Link>
      </h3>
    </div>
  );
};

export default ProductsListPage;