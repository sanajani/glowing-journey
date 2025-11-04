const ImageContainer = ({imageUrl,styles , title}) => {
  return (
    <div className={`p-1 overflow-hidden ${styles}`} >
      <img
        className="w-full h-full object-cover rounded-lg p-2"
        src={imageUrl}
        alt={title || 'beautifull house'}
      />
    </div>
  );
};

export default ImageContainer;
