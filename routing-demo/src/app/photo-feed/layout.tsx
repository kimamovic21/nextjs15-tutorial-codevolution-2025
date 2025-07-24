const PhotoFeedLayout = (props: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <>
      {props.modal}
      {props.children}
    </>
  );
};

export default PhotoFeedLayout;