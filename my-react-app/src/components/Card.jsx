import React from "react";
import './card.css'




const cards = [
    { id: 1, title: 'Nike SB Dunk Low Pro Aluminum', release: '2/19/2025', price: '$115', image:"https://images.soleretriever.com/blog/2b2f7a78e7a4fa89cc834f06936e385cce19d8d6-1070x760.png?quality=75&fit=clip&auto=format&width=1200",  },
    { id: 2, title: 'Nike Air Foamposite One Galaxy', release: '2/21/2025', price: '$230', image:"https://d2sw2hhlzkf9db.cloudfront.net/uploads/2024/12/nike-air-foamposite-one-galaxy-2025-fq4303-400-4-1024x717.jpg",  },
    { id: 3, title: 'Nike Air Max 90 Black and Magma Orange', release: '2/22/2025', price: '$140', image:"https://www.sneakerfiles.com/wp-content/uploads/2025/02/nike-air-max-90-volcano-HF3248-001.jpg",  },
    { id: 4, title: 'Air Jordan 3 Lucky Shorts', release: '2/22/2025', price: '$200', image:"https://cdn.sanity.io/images/pu5wtzfc/production/58c8877ed888592544636624311d50fe9c942da4-2000x1250.png",  },
    { id: 5, title: 'Adidas Harden Volume 9 Cloud White', release: '2/22/2025', price: '$160', image:"https://sneakerbardetroit.com/wp-content/uploads/2024/10/adidas-Harden-Vol.-9-Cloud-White-JR2504.jpg",  },
    { id: 6, title: 'Nike Womens Air Max SNDR', release: '2/26/2025', price: '$200', image:"https://i8.amplience.net/i/jpl/fp_720769_a?qlt=92&w=600&h=464&v=1&fmt=auto",  },
    { id: 7, title: 'Air Jordan 1 OG Union Chicago Shadow', release: '2/28/2025', price: '$200', image:"https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-SP-Union-LA-Chicago-Shadow-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1740684367",  },
    { id: 8, title: 'Nike Total 90 Metallic Silver and Black', release: '3/1/2025', price: '$110', image:"https://sneakernews.com/wp-content/uploads/2025/02/nike-total-90-iii-sp-metallic-silver-black-hj9351-002-5.jpg?w=1140",  },
    { id: 9, title: 'Air Jordan 12 Black and Varsity Red', release: '3/1/2025', price: '$210', image:"https://www.modernnotoriety.com/wp-content/uploads/2025/01/CT8013-002-air-jordan-12-flu-game-5-e1737129323556.jpg",  },
    { id: 10, title: 'A Ma Maniere x Air Jordan 3 Diffused Blue', release: '3/15/2025', price: '$225', image:"https://sneakerbardetroit.com/wp-content/uploads/2025/01/A-Ma-Maniere-Air-Jordan-3-Diffused-Blue-1-1068x748.jpg",  },
    { id: 11, title: 'Air Jordan 9 Cool Grey', release: '3/15/2025', price: '$210', image:"https://cdn.sanity.io/images/d6wcctii/production/d7dc2996de2dbfffde48969867a80754eb44c67b-1070x760.jpg",  },
    { id: 12, title: 'Adidas Harden Volume 9 Metamorphosis', release: '3/15/2025', price: '$160', image:"https://cdn.sanity.io/images/pu5wtzfc/production/c1c1db080c9d955474745f366ed9d8bd369312ca-2048x1280.jpg",  },
    { id: 13, title: 'Nike SB x Air Jordan 4 Navy', release: '3/18/2025', price: '$225', image:"https://cdn.sanity.io/images/pu5wtzfc/production/ed0f0997b8f38841abf708efd8770fdc04826266-2000x1250.jpg",  },
    { id: 14, title: 'Air Jordan 1 Low OG Obsidian', release: '3/22/2025', price: '$140', image:"https://cdn.sanity.io/images/pu5wtzfc/production/6e5ef4d708ce484568961d2df84804e1e3d31eae-2000x1250.jpg",  },
    { id: 15, title: 'Nike Kobe 6 Protro Dodgers', release: '4/13/2025', price: '$190', image:"https://pbs.twimg.com/media/GR12fEoWIAAVh_9.jpg:large",  },
    { id: 16, title: 'Nike Kobe 8 Protro What The Kobe', release: '4/13/2025', price: '$190', image:"https://www.sneakerfiles.com/wp-content/uploads/2024/06/nike-kobe-8-protro-what-the-kobe-2025-HM9621-900-1024x725.jpg",  },
    { id: 17, title: 'Air Jordan 1 Low OG Rookie of the Year', release: '4/18/2025', price: '$140', image:"https://urbansyndicate.co.uk/wp-content/uploads/2024/08/image-115.jpeg",  },
    { id: 18, title: 'Air Jordan 5 OG Grape', release: '4/19/2025', price: '$210', image:"https://cdn.sanity.io/images/pu5wtzfc/production/1a05685a0e26e6da84519b46db73400f60f74cd4-3000x1875.jpg",  },



    









];

const Card = ({ title, release, price, image }) => (
    <div className="card">
        <h3>{title}</h3>
        <img src={image} width="300" height="200" />
        <h4>{release}</h4>
        <p>{price}</p>
        
    </div>
);

const CardFlex = () => (
    <div className="card-flex-container">
        {cards.map(card => (
            <Card key={card.id} title={card.title} image={card.image} release={card.release} price={card.price} />
        ))}
    </div>
);

export default CardFlex;