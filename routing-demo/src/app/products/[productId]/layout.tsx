const getRandomInteger = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ProductDetailsLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  const random = getRandomInteger(2);

  if (random === 1) {
    throw new Error('Error loading product');
  };

  return (
    <div>
      {children}
      <h2>Featured products</h2>
    </div>
  );
};

export default ProductDetailsLayout;