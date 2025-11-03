const ImageContainer = ({imageUrl, title}) => {
  return (
    <div className="h-48 p-1 overflow-hidden" >
      <img
        className="w-full h-full object-cover rounded-lg p-2"
        src={imageUrl}
        alt={title || 'beautifull house'}
      />
    </div>
  );
};

export default ImageContainer;
