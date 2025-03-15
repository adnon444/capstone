import React, { useState } from 'react'



function NewsList() {

const news = [
    
    {
        id: 1,
        title: "The Air Jordan 4 Retro Cement",
        image: "https://sneakerbardetroit.com/wp-content/uploads/2024/06/Air-Jordan-4-White-Cement-2025-FV5029-100-1068x770.jpg",
        synopsis: "As 2025 creeps closer, so does a whole stack of high-heat releases. Among them is the return of the Air Jordan 4 'White Cement' which has now materialised in the form of a first look which you can see in the image above. After several early announcements and leaks, a first look at the White Cement Jordan 4 has been revealed, signaling a wave of early looks that will soon follow. Given how these are intended to be a true re-creation of the 1989 OG, there’s nothing new to report. Take this as more of a refresher on just how beautiful this sneaker really is. Check the pair out here and stay locked for news of an official release date, which is currently expected to be May 24, 2025.",
    },
    {
        id: 2,
        title: "Five new Supreme x Nike SB Dunks on the way",
        image: "https://sneakerbardetroit.com/wp-content/uploads/2024/12/Supreme-SB-Dunk-Low-2025.jpg",
        synopsis: "Supreme and Nike SB have a mega five-shoe drop on the way for next year, and early looks at the pairs are coming in fast. Supreme’s signature details elevate the collection, blending style with meaning. An embroidered “94” on the heel honors the brand’s founding year. Additional branding on the midsole and insoles adds subtle yet impactful touches. These elements highlight Supreme’s attention to detail and enhance the sneakers’ premium appeal. Take a look at the early image and stay locked for the collection's release which is currently expected in May 2025.",
    },
    {
        id: 3,
        title: "The Aime Leon Dore x New Balance 993 'Mulberry Green",
        image: "https://sneakerbardetroit.com/wp-content/uploads/2024/11/Aime-Leon-Dore-New-Balance-993-Mulberry-Green-Porsche.jpg",
        synopsis: "The hightly anticipated Aime Leon Dore x New Balance 993 'Mulberry Green' is finally here. Aimé Leon Dore and Porsche caused a significant ripple with the reveal of their bespoke 993 Turbo project earlier this week — a rich, green-and-brown take on the beloved roadster. However, sneaker sleuths were drawn to something else that was (somewhat sneakily) revealed as part of the project and shares part of the car’s name: a fresh Aimé Leon Dore x New Balance 993 collaboration. The sneaker pays homage to the Porsche 993 Turbo, a favorite car of ALD founder Teddy Santis. You can secure your pair by reserving one through the ALD website. However you will need to be patient, as pairs will not begin to ship until September 2025.",
    },
    {
        id: 4,
        title: "The new Adidas ZPONGE is inspired by nature",
        image: "https://sneakernews.com/wp-content/uploads/2024/12/adidas-zponge-release-date.jpg?w=780&h=550&crop=1",
        synopsis: "Adidas continues to surprise us with innovative sneaker technology, and this time they are tackling it big with the ZPONGE. No sponges were hurt in the production of this shoe, but the midsole takes after the sea creature’s biology to a tee. The adidas ZPONGE looks to nature with an engineered open-cell structure, not abiding by any one uniform pattern. Meanwhile, the ZPONGE’s futuristic midsole is paired with an upper that’s anything but. After the famous BOOST and 4D technologies, now it is time for a whole new kind of cushioning, inspired by sea sponges. If you thought you've seen it all in sneaker territory, Adidas is back with a brand new innovation. Stay tuned for an official release date.",
    },
    {
        id: 5,
        title: "The New Balance 1906A Shifts Into Contrasting 'Eggplant'",
        image: "https://sneakernews.com/wp-content/uploads/2025/02/new-balance-1906a-eggplant-u1906ana-2.jpg?w=1200",
        synopsis: "Despite its in-your-face profile, the New Balance 1906A has an understated approach in its market entrance. First revealed in June 2024, just over a half-dozen colorways have hit the public since. However, as the brand’s 2025 efforts earnestly get underway, a more full-throated effort behind the 1906A is seemingly in the cards for New Balance, as the “Eggplant” version at hand adds to a healthy crop of fresh colorways that have recently hit the newswire. Look for the New Balance 1906A “Eggplant” to hit NB.com and partnering retailers as we enter the Spring/Summer season. Be ready for a $170 sticker price once this shoe materializes. ",
    },
    {
        id: 6,
        title: "Nike Wants You To Trade Something For Galaxy Foamposites",
        image: "https://sneakernews.com/wp-content/uploads/2025/02/nike-galaxy-foamposite-trading-post.jpg?w=1200",
        synopsis: "When the Galaxy Foamposites first dropped in 2012, sneakerheads went far and wide to try to secure a pair of the elusive sneakers. One individual in Queens, NY was willing to give up a used car to secure a pair, hitting the Craigslist wanted ads to find someone who was willing to give up wheels for wheels. In the spirit of bartering, Nike NYC has announced the Air Foamposite One Galaxy Trading Post, giving select New Yorkers an opportunity to trade a personal belonging for a pair of the hotly-coveted shoes. Here’s what’s prohibited from trades: illegal goods, weapons, controlled substances, drugs, animals, vehicles, or food items. You’ll have to get creative because being selected will not guarantee you a trade. Stay tuned to Nike for details.",
    },
    {
        id: 7,
        title: "New Balance Executes Their 1906L Loafer In Black Leater",
        image: "https://sneakernews.com/wp-content/uploads/2025/02/new-balance-1906l-black-leather-u1906lbn-2.jpg?w=1200",
        synopsis: "The New Balance 1906L continues to be among the most polarizing models in the current footwear zeitgeist. Some have fully embraced the “dad shoes meets formalwear” concept. Some, even judging only by social media reactions, still reject it entirely even as the silhouette marches towards a dozen colorways. In pushing towards that milestone, New Balance has begun to toy with its construction, and an all-leather build dawns with this “Triple Black” 1906L. Expect the New Balance 1906L in black leather coming about as part of the brand’s Spring/Summer offerings. Though retail pricing for this leather build isn’t concrete at this stage, anticipate something in the $160 range.",
    },
    {
        id: 8,
        title: "Detailed Look At The Air Jordan 1 UNC Reimagined",
        image: "https://sneakernews.com/wp-content/uploads/2025/02/air-jordan-1-unc-reimagined-dz5485-402-2.jpg?w=1200",
        synopsis: "The storytelling around the Air Jordan 1 is truly endless. Currently, the brand is going hard on the “Banned” storyline, going as far as handing out citations to employees on the Nike campus in Beaverton for wearing a pair of Air Jordan 1s. The same application is being applied to the Air Jordan 1 “UNC,” another original colorway of the model from 1985. This first look reveals the same aged finished on the upper, a pre-yellowed midsole, and a white layer of faux-oxidation caked onto the outsoles. The ankle collar also features a bit of crackling on the leather — a common feature on actual AJ1 pairs from 1985. Currently, a release date is expected on May 10th, with full family sizes confirmed.",
    },
    {
        id: 9,
        title: "It's Donkey Kong Country On The Nike Air Max 1 Low Poly",
        image: "https://sneakernews.com/wp-content/uploads/2025/02/nike-air-max-1-low-poly-donkey-kong-hv5776-200.jpg?w=1200",
        synopsis: "Nike is already look ing to the next chapter of the Air Max 1 Low Poly with the help of one of the most iconic Low Poly video games in history. Ostensibly inspired by Donkey Kong Country for the Super Nintendo gaming console, this Air Max 1 features some of the game’s distinct ephemera with some Swoosh touches. On the insole are coins that read “DS” for Dot Swoosh, a spin-off of the DK coins that were scattered around the world of Donkey Kong Country 2. Further cementing itself as a Donkey Kong tribute is the Low Poly banana icon as well as the low-res logo on the tongue. Currently, a release date has yet to be revealed, but we expect a launch sometime this Spring/Summer 2025 season.",
    },
    {
        id: 10,
        title: "Nike SB Air Jordan 4 Navy Releases at DLX Skateshop in San Francisco",
        image: "https://sneakernews.com/wp-content/uploads/2025/02/jordan-4-sb-navy-all-star.jpg?w=1200",
        synopsis: "Even Nike SB is taking advantage of the hysteria around All-Star Weekend; an exclusive release of the Nike SB Air Jordan 4 “Navy” went down exclusively at DLX Skateshop. As we’ve covered before, the 2025 pair is essentially a palette swap of its predecessor, inserting swatches of dark blue on the eyelets, heel tab, and midsole. The skate-minded hardware is expected to stick around, including more durable stitching, increased padding, and new flexible materials on the wings and heel tab. As of this writing, launches are expected sometime in March — retail is set at $225.",
    },

]


function News({title, image, synopsis}) {
    return (
        <li>
            <h3>{title}</h3>
            <br></br>
            <img src={image} height="300px" width="400px"></img>
            <br></br>
            <br></br>
            <div>{synopsis}</div>
            <br></br>
            </li>
    )
}


const [currentNews, setCurrentNews] = useState(news)


const newsItems = currentNews.map(news => (
    <News
    key={news.id}
    image={news.image}
    title={news.title}
    synopsis={news.synopsis} />
))


    return (

        <div className="News">

        <h2>The latest in sneaker stories and news!</h2>
        <br></br>
        

        <ul>
        { newsItems}

        
        </ul>


        </div>
        
        ); 
}
  
  export default NewsList;