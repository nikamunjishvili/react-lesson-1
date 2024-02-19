const Image = ({ image_url, width }) => {
  return (
    <img style={{ width: width }} src={require(`../../assets/${image_url}`)} />
  );
};

export default Image;
