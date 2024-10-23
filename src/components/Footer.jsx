export const Footer = () => {
    return (
      <div className="relative bg-[#1B1B1B] text-white py-10 px-6">
        <div className="container mx-auto flex justify-between items-start">
          
          {/* Логотип и текст */}
          <div className="w-1/2">
            <img src="/src/images/WhiteLogo.svg" alt="Gates Logo" className="h-20 mb-4" />
            <p className="text-gray-300 mb-4">
              Gates is a blog that focuses on Japanese art and anime.
              They feature information on Otaku conventions and other anime topics. 
              Hear from famous anime filmmakers and artists as well as plenty of news 
              about the art of cartoon creation in the Japanese culture.
            </p>
  
            {/* Псевдоэлемент для белой полосы */}
            <div className="absolute bottom-17 left-0 w-full h-[1px] bg-white"></div>
  
            <p className="text-white-500 pt-6">@copyright 2021 Gates</p>
          </div>
  
          {/* Форма подписки */}
          <div className="w-1/2 flex justify-end">
            <form className="flex items-center bg-[#E5E5E5] rounded overflow-hidden shadow-lg">
              <button 
                type="submit" 
                className="bg-black text-white px-4 py-1 ml-2 font-semibold hover:bg-gray-800 transition-all duration-300"
                style={{ background: 'linear-gradient(180deg, #2C2C2C 0%, #000000 100%)' }}
              >
                SUBSCRIBE
              </button>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 w-64 bg-[#E5E5E5] text-gray-600 placeholder-gray-500 outline-none border-0"
              />
              <button 
                type="submit" 
                className="px-4 py-3 bg-transparent text-gray-600 hover:text-black transition-all duration-300"
              >
                ➔
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  