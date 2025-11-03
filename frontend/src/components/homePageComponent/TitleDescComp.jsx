
const TitleDescComp = ({title, description}) => {
  return (
    <div>
      <h1 className="text-xl font-bold my-2 px-2 text-gray-800">{title}</h1>
      <p className="p-2 text-gray-900 leading-relaxed text-[15px]">
        {description}
      </p>
    </div>
  );
};

export default TitleDescComp;
