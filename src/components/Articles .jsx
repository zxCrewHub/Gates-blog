export const Articles = ({ articles }) => {
    return (
        <div className="container relative bg-white py-10 px-6">
            {/* Заголовок */}
            <h2 className="text-2xl font-semibold mb-2 relative z-20">New & Trendy</h2>

            {/* Черная короткая полоса под заголовком */}
            <div className="absolute top-20 left-0 w-16 h-[3px] bg-black z-20"></div>

            {/* Серая линия, проходящая через весь контейнер */}
            <div className="absolute top-20 left-0 w-full h-[2px] bg-gray-300"></div>

            {/* Контейнер статей в формате 2x2 */}
            <div className="relative grid grid-cols-2 grid-rows-2 mt-8">
                {/* Верхний левый угол — изображение */}
                <div
                    className="relative bg-cover bg-center opacity-100 shadow-lg h-full"
                    style={{ 
                        backgroundImage: `url(${articles[0].topLeftImageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
                
                {/* Верхний правый угол — статья */}
                
                <div
                    className="relative p-20 flex flex-col justify-between shadow-lg" // Полупрозрачный белый фон
                    style={{ 
                        backgroundImage: `url(${articles[0].imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ><div className="absolute w-full h-full bg-[rgba(255,255,255,0.8)] p-6 top-0 left-0"></div>
                    <div className="relative z-30"> {/* Добавлено z-30 для текста */}
                        <p className="text-black text-sm opacity-75 mb-1">
                            {articles[0].category} • {articles[0].date}
                        </p>
                        <h3 className="text-black text-xl font-semibold mb-2">
                            {articles[0].title}
                        </h3>
                        <p className="text-black opacity-75 mb-4">
                            {articles[0].description}
                        </p>
                    </div>
                    <div className="flex items-center justify-between relative z-30"> {/* Добавлено z-30 для текста */}
                        <p className="text-black text-sm opacity-75">
                            {articles[0].readTime} Min Read
                        </p>
                        <a
                            href={articles[0].link}
                            className="text-black font-semibold hover:underline flex items-center"
                        >
                            Read Full ➔
                        </a>
                    </div>
                </div>

                {/* Нижний левый угол — статья */}
                <div
                    className="relative p-20 flex flex-col justify-between shadow-lg" // Полупрозрачный белый фон
                    style={{ 
                        backgroundImage: `url(${articles[0].imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ><div className="absolute w-full h-full bg-[rgba(255,255,255,0.8)] p-6 top-0 left-0"></div>
                    <div className="relative z-30"> {/* Добавлено z-30 для текста */}
                        <p className="text-black text-sm opacity-75 mb-1">
                            {articles[0].category} • {articles[0].date}
                        </p>
                        <h3 className="text-black text-xl font-semibold mb-2">
                            {articles[0].title}
                        </h3>
                        <p className="text-black opacity-75 mb-4">
                            {articles[0].description}
                        </p>
                    </div>
                    <div className="flex items-center justify-between relative z-30"> {/* Добавлено z-30 для текста */}
                        <p className="text-black text-sm opacity-75">
                            {articles[0].readTime} Min Read
                        </p>
                        <a
                            href={articles[0].link}
                            className="text-black font-semibold hover:underline flex items-center"
                        >
                            Read Full ➔
                        </a>
                    </div>
                </div>
                {/* Нижний правый угол — изображение */}
                <div
                    className="relative bg-cover bg-center opacity-100 shadow-lg h-full"
                    style={{
                        backgroundImage: `url(${articles[1].bottomRightImageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
            </div>
        </div>
    );
};
