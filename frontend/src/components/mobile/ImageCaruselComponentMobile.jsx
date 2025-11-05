import { Link } from "react-router-dom"

let imageaddress = 'https://a0.muscache.com/im/pictures/dc9f2e94-efda-4bd2-a0f4-2bde6152b9a9.jpg?im_w=1200'
let imageaddress1 = 'https://a0.muscache.com/im/pictures/7f2f5963-3324-4996-8259-4fd06599992f.jpg?im_w=720'
let imageaddress2 = 'https://a0.muscache.com/im/pictures/d3d082a1-2f0e-4772-8aa4-62468f245ceb.jpg?im_w=720'
let imageaddress3 = 'https://a0.muscache.com/im/pictures/cfe9eca5-0f1f-4bb9-bb50-0a4044a50e7c.jpg?im_w=720'
let imageaddress4 = 'https://a0.muscache.com/im/pictures/11ddf357-03fd-4135-94f4-2335e9b54c7e.jpg?im_w=720'

import ImageContainer from "../image/ImageContainer"

const ImageCaruselComponentMobile = () => {
  return (
    <div className="relative m-3 h-96 ">
        <div className="grid grid-flow-col overflow-hidden auto-cols-[100%] overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x no-scrollbar [direction:ltr] gap-3">
            <Link to='/about/new-component'>
                <ImageContainer imageUrl={imageaddress1} styles={'snap-center'}/>
            </Link>
            <ImageContainer imageUrl={imageaddress2} styles={'snap-center'}/>
            <ImageContainer imageUrl={imageaddress3} styles={'snap-center'}/>
            <ImageContainer imageUrl={imageaddress4} styles={'snap-center'}/>
            <ImageContainer imageUrl={imageaddress} styles={'snap-center'}/>
            <ImageContainer imageUrl={imageaddress} styles={'snap-center'}/>
            <ImageContainer imageUrl={imageaddress} styles={'snap-center'}/>
            <ImageContainer imageUrl={imageaddress} styles={'snap-center'}/>
            <ImageContainer imageUrl={imageaddress} styles={'snap-center'}/>
            <ImageContainer imageUrl={imageaddress} styles={'snap-center'}/>
            <ImageContainer imageUrl={imageaddress} styles={'snap-center'}/>
        </div>
        <span className="bg-black text-white text-xl w-20 text-center absolute m-2 rounded-xl top-0 right-0 block">
            4 / 19
        </span>
    </div>
  )
}

export default ImageCaruselComponentMobile
