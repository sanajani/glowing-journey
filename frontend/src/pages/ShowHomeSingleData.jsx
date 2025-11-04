import { image1 } from "../assets/images"
import ImageContainer from "../components/image/ImageContainer"

const ShowHomeSingleData = () => {
  return (
    <div>
      <div>
        <div>
          <ImageContainer styles='h-96 md:w-[60%]' imageUrl={image1} title='house for rent' />
          <ImageContainer styles='h-96 md:w-[60%]' imageUrl={image1} title='house for rent' />
          <ImageContainer styles='h-96 md:w-[60%]' imageUrl={image1} title='house for rent' />
          <ImageContainer styles='h-96 md:w-[60%]' imageUrl={image1} title='house for rent' />

        </div>
        
      </div>      
    </div>
  )
}

export default ShowHomeSingleData