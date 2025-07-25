const SlugPage = async ({
  params
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <h2>Viewing docs for feature {slug[0]} and concept {slug[1]}</h2>
    );
  } else if (slug?.length === 1) {
    return (
      <h2>Viewing docs for feature {slug[0]}</h2>
    );
  };

  return (
    <div>SlugPage</div>
  );
};

export default SlugPage;