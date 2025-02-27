const PortfolioCard = ({ image, title, language, author }) => {
    return (
      <div className="bg-white shadow-md rounded-lg flex p-3 gap-4">
        <img src={image} alt="portfolio" className="w-24 h-24 rounded-md object-cover"/>
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{language}</p>
          <p className="text-sm text-gray-500">Oleh {author}</p>
        </div>
        <span className="bg-yellow-400 px-3 py-1 rounded-md text-white font-bold">A</span>
      </div>
    );
  };
  
  export default PortfolioCard;
  