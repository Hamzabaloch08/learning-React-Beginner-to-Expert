import React from 'react';

function Card() {
  const cardData = [
    {
      imgUrl: "https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png",
      alt: "tailwind Img",
      title: "Tailwind CSS",
      description: "This is a simple card component built with Tailwind CSS. You can customize it easily.",
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-nbabzALNlDPDlC0Kx6z_RLGGly8n2NAMQ&s",
      alt: "react Img",
      title: "ReactJS",
      description: "React is a JavaScript library for building dynamic and reusable user interface components efficiently.",
    },
    {
      imgUrl: "https://ionic.io/blog/wp-content/uploads/2024/02/angular-feature-image-1.png",
      alt: "Angular Img",
      title: "AngularJS",
      description: "Angular is a TypeScript-based framework for building dynamic, and full-featured web applications.",
    },
    {
      imgUrl: "https://oneehr.net/wp-content/uploads/2023/12/Vue-Blog-Cover-2.png",
      alt: "Vue Img",
      title: "VueJS",
      description: "Vue is a lightweight JavaScript framework for building reactive and flexible user interfaces.",
    },
    {
      imgUrl: "https://images.ctfassets.net/23aumh6u8s0i/43ElOGZmUO9nrWiDD0Pfk2/d1d1cb665e5c8d2a27aa4d13b0ae6754/emberjs",
      alt: "Ember Img",
      title: "EmberJS",
      description: "Ember is a JavaScript framework for building scalable, ambitious web applications with strong conventions.",
    },
    {
      imgUrl: "https://cms-assets.tutsplus.com/uploads/users/30/posts/15392/preview_image/200.png",
      alt: "BackboneJS Img",
      title: "BackboneJS",
      description: "Backbone.js is a lightweight framework that provides structure to web apps with models and views.",
    }
  ];

  return (
    <div className="flex justify-center items-center bg-black h-full flex-wrap gap-8 p-6">
      {cardData.map((card) => (
        <div className="w-[20rem] rounded-2xl overflow-hidden shadow-lg bg-white p-6">
          <img className="w-full h-48 object-cover rounded-xl mb-4" src={card.imgUrl} alt={card.alt} />
          <div className="text-gray-800 font-bold text-xl mb-2">{card.title}</div>
          <p className="text-gray-600 text-base mb-4">{card.description}</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition-all">
            Read More
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;
