import { Link } from 'react-router-dom';
import { useMemo } from 'react';

// custom hooks
import { useHasError } from "../../../hooks/useHasError";
import {useIsLoading} from '../../../hooks/useIsLoading';

// components 
import { Loading } from "../../loadingAndError/Loading";
// import {Loading}
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

  // Memoized to prevent unnecessary re-renders
  const wrapperProps = useMemo(() => (
    { 
      className: `relative overflow-hidden rounded-lg ${className} ${clickAble ? 'cursor-pointer hover:shadow-lg transition-shadow duration-200' : ''}`,
    ...(clickAble && linkTo ? { to: linkTo } : {}),
    ...(clickAble && !linkTo ? { 
      onClick,
      'aria-label': `View ${title}`,
      type: 'button'
    } : {})
  }), [clickAble, linkTo, className, onClick, title]);

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
      {overlayText && <OverlayText text={overlayText} />}
    </Wrapper>
  );
};

export default ImageContainer;
