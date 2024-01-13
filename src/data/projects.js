import { RecipePic } from '../images';
import { AlpacaImage } from '../images';
const PROJECTS = [
  {
    title: 'Tasteful Tales',
    description:
      'Recipe Sharing Platform, This platform allows users to share, discover, and engage with recipes in a user-friendly and interactive environment. Built using Next.js and hosted on Vercel, this project showcases the capabilities of modern web development.',
    img: RecipePic,
    url: 'https://tasteful-tales.vercel.app/',
    year: '2024',
  },
  {
    title: 'Quack Planets',
    description: 'DJD Hackathon. Webapp displaying the planets in our galaxy',
    img: 'https://github.com/guitarkeegan/quack-planets/raw/main/assets/images/quack-planets.gif',
    url: 'https://quack-planets.vercel.app/',
    year: '2023',
  },

  {
    title: 'Alpaca Generator',
    description: 'Shortens URLs using the bitly.com API.',
    img: AlpacaImage,
    url: 'https://preeminent-dolphin-92d38e.netlify.app/',
    year: '2022',
  },
  {
    title: 'Pokedex REACT',
    description: 'A Pokedex that queries the Pokemon API.',
    img: 'https://i.imgur.com/QZG11dH.jpeg',
    url: 'https://vigorous-chandrasekhar-8ced84.netlify.app/',
    year: '2022',
  },
  {
    title: 'RSS Feed Reader',
    description:
      ' Most news websites, blogs, podcasts, maintain a RSS feed which gives real-time content updates. This site is a tool for fetching and converting the feed with a given RSS feed URL.',
    img: 'https://i.imgur.com/YcRdw2x.jpeg',
    url: 'https://rss-feed-reader.herokuapp.com/',
    year: '2021',
  },
  {
    title: 'News and Weather app',
    description:
      'A rookie day project that I hold to remind myself. Get the latest weather for any city by searching the city name and retrieving data from the openweather.org API. This project was created using Gatsby. This project was created following the project requirements for Code Louisville which are detailed below.',
    img: 'https://camo.githubusercontent.com/9c3220a91cf815cf7c5aa5fa5ebbd85e33754754294b8f62a5bb26f88a526d22/68747470733a2f2f692e696d6775722e636f6d2f705266534543552e706e67',
    url: 'https://tiresome-box.surge.sh/',
    year: '2019',
  },
];
export default PROJECTS;
