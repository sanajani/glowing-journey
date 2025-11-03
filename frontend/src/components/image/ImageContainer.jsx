const ImageContainer = ({imageUrl, title}) => {
  return (
    <div className="h-50 p-1 overflow-hidden">
      <img
        className="w-full h-full object-cover rounded-lg p-2"
        src={imageUrl}
        alt={title}
      />
    </div>
  );
};

export default ImageContainer;
