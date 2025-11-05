import { Link } from 'react-router-dom';

// hooks
import { useHasError } from "../../../hooks/useHasError";
import { useIsLoading } from "../../../hooks/useIsLoading";


// components 
import { Loading } from "../../loadingAndError/Loading";
import HasError from "../../loadingAndError/HasError";
import Image from "./Image"; 
import OverlayText from '../../OverlayText';

const ImageContainer = ({
  imageUrl, 
  className, 
  title = "Property image", 
  clickAble = false, 
  linkTo, 
  onClick, 
  lazyLoad = true, 
  overlayText 
}) => {
  const [hasError, handleError] = useHasError();
  const [isLoading, handleLoad] = useIsLoading();

  const Wrapper = clickAble && linkTo ? Link : clickAble ? "button" : 'div';

  const wrapperProps = {
    className: `relative bg-red-500 overflow-hidden rounded-lg ${className} ${
      clickAble ? 'cursor-pointer hover:shadow-lg transition-shadow duration-200' : ''
    }`,  
    ...(clickAble && linkTo ? { to: linkTo } : {}),
    ...(clickAble && !linkTo ? { onClick } : {})
  };

  return (
    <Wrapper {...wrapperProps}>
      {isLoading && <Loading/>}
      {hasError && <HasError/>}

      {/* Actual Image */}
      {!hasError && (
        <Image 
          isLoading={isLoading} 
          imageUrl={imageUrl} 
          title={title} 
          lazyLoad={lazyLoad} 
          onError={handleError} 
          onLoad={handleLoad} 
        />
      )}

      {/* Overlay Text */}
      {overlayText && (<OverlayText overlayText/>)}
    </Wrapper>
  );
};

export default ImageContainer;
