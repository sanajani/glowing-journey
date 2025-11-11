import { Link } from "react-router-dom"
const LinksInsideForm = ({textLink2,link2, textLink1, link1}) => {
  return (
          <div className="col-span-2 text-sm md:text-lg mt-5 font-bold md:mt-0 flex justify-between">
        <Link
          className="border-b flex-1 pb-2 text-green-700"
          to={link2}
        >
            {textLink2}
        </Link>
        <Link
          className="flex-1 pb-2 border-b text-blue-700"
          to={link1}
        >
            {textLink1}
        </Link>
      </div>
  )
}

export default LinksInsideForm