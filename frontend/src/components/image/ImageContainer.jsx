const ImageContainer = ({imageUrl,styles , title}) => {
  return (
    <div className={`overflow-hidden ${styles}`} >
      <img
        className="w-full h-full object-cover rounded-lg"
        src={imageUrl}
        alt={title || 'beautifull house'}
      />
    </div>
  );
};

export default ImageContainer;
