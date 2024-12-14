import React from 'react';
import { createRoot } from 'react-dom/client';

function News() {
  // data news
  const someNews = [
    {
      title: 'CNN Acuire BEME',
      date: 'March 20 2022',
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: 'https://picsum.photos/600/400',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'March 19 2022',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image: 'https://picsum.photos/600/401',
      category: 'News',
      link: '#'
    },
    {
      title: 'Nomad Lifestyle',
      date: 'March 19 2022',
      content: 'Learn our tips and tricks on living a nomadic lifestyle.',
      image: 'https://picsum.photos/600/402',
      category: 'Travel',
      link: '#'
    }
  ];

  return (
    <div className="news_container">
      <Header title="Latest News" subtitle="Covering March & April 2022" />
      {someNews.map((news) => (
        <Card {...news} key={news.title} />
      ))}
    </div>
  );
}

function Header({ title, subtitle }) {
  return (
    <div className="header_container">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

function Card({ image, category, date, title, content, link }) {
  return (
    <div className="card-container">
      <CardHeader category={category} image={image} />
      <CardBody date={date} title={title} content={content} link={link} />
    </div>
  );
}

function CardHeader({ category, image }) {
  return (
    <div className="card-header_container">
      <strong>{category}</strong>
      <div className="article-image">
        <img src={image} />
      </div>
    </div>
  );
}

function CardBody({ date, title, content, link }) {
  return (
    <div className="card-body_container">
      <p>{date}</p>
      <h1>{title}</h1>
      <p>{content}</p>
      <Button link={link} />
    </div>
  );
}

function Button({ link }) {
  return <a href={link}>Find out more</a>;
}

const root = createRoot(document.getElementById('root'));
root.render(<News>someNews</News>);