
const OverlayText = ({overlayText}) => {
  return (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 z-30">
          <span className="text-white font-semibold text-sm md:text-base px-2 text-center">
            {overlayText}
          </span>
        </div>
  )
}

export default OverlayText