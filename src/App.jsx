
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Articles } from "./components/Articles ";

const articlesData = [
  {
    category: 'Fantasy',
    date: '1 Month Ago',
    title: 'Attack On Titans',
    description:
      'The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.',
    readTime: 12,
    link: '/full-article-1', // Ссылка на полную статью
    imageUrl: "./src/images/animeFON.jpeg", // Ссылка на фоновое изображение
    topLeftImageUrl: "./src/images/animegirl.jpeg"
  },
  {
    category: 'Fantasy',
    date: '1 Month Ago',
    title: 'Attack On Titans',
    description:
      'The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.',
    readTime: 12,
    link: '/full-article-2', // Ссылка на полную статью
    imageUrl: "./src/images/animeFON.jpeg", // Ссылка на фоновое изображение
    bottomRightImageUrl: "./src/images/animetitan.jpeg"
  },
  // Добавьте больше данных о статьях здесь
];



export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet></Outlet>
        <Articles articles={articlesData} />
      </main>
      <Footer />
    </div>
  );
}
