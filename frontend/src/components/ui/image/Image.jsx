const Image = ({ 
  imageUrl, 
  isLoading, 
  title, 
  lazyLoad = true, 
  onError, 
  onLoad 
}) => {
  if(!imageUrl) return <div className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>No Image</div>
    
  return (
    <img
      src={imageUrl}
      alt={title}
      className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      loading={lazyLoad ? "lazy" : "eager"}
      onError={onError}
      onLoad={onLoad}
    />
  );
};

export default Image;