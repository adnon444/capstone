import { useState } from 'react'



const sales = [
    { value: 81652, name: 'Adidas Yeezy Slide Slate Grey', image:'https://images.stockx.com/images/adidas-Yeezy-Slide-Slate-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1673938237' },
    { value: 54640, name: 'Air Jordan 4 Retro Military Blue', image:'https://cdn.flightclub.com/TEMPLATE/375779/1.jpg' },
    { value: 54435, name: 'Nike Dunk Low Photon Dust', image:'https://images.stockx.com/images/Nike-Dunk-Low-Photon-Dust-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1620404906' },
    { value: 52779, name: 'Adidas Campus 00s Core Black', image:'https://images.stockx.com/images/adidas-Campus-00s-Core-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1681283876' },
    { value: 51492, name: 'Air Jordan 4 Retro Bred Reimagined', image:'https://images.stockx.com/images/Air-Jordan-4-Retro-Bred-Reimagined-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1705980651' },
    { value: 49812, name: 'Nike Air Force 1 Low 07 White', image:'https://images.stockx.com/images/Nike-Air-Force-1-Low-White-07_V2-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1631122839' },
    { value: 49150, name: 'Air Jordan 4 Retro White Thunder', image:'https://images.stockx.com/images/Air-Jordan-4-Retro-White-Thunder-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1722353047' },
    { value: 48773, name: 'Nike Dunk Low Retro White Black Panda', image:'https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1633027409' },
    { value: 45787, name: 'Adidas Yeezy Roam RNR Onyx', image:'https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Onyx-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1654264132' },
    { value: 43943, name: 'Nike Dunk Low Grey Fog', image:'https://images.stockx.com/images/Nike-Dunk-Low-Grey-Fog-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1688711455' }
]


function SingleSale({value, name, image}) {
    return (
        <li>
            <img src={image} width="500" alt={name} />
            <h3>{value}</h3>
            <em>({name})</em>
        </li>
    )
}



function SalesPage() {


    const [currentSales, setCurrentSales] = useState(sales)


    const handleSortSales = () => {
        let newSales = [...currentSales]
        newSales.sort((sale1, sale2) => sale1.value > sale2.value ? -1 : 1)
        setCurrentSales(newSales)
    }


    const handleSortName = () => {
        let newSales = [...currentSales]
        newSales.sort((sale1, sale2) => sale1.name < sale2.name ? -1 : 1)
        setCurrentSales(newSales)
    }

 
    const saleList = currentSales.map(sale => (
        <SingleSale value={sale.value} name={sale.name} Key={sale.id} image={sale.image} />
    ))


    return (
        <div className="SalesPage">


            <header><img src='https://i.pinimg.com/736x/0c/b9/f8/0cb9f88a59191752626863c492e99ec7.jpg' height="400px" width="600px"></img></header>


            <br></br>
            <h2>Sneaker Sales</h2>
            <p>2024 was a big year for sneaker sales, and in particular sneaker sales in the secondary market, as indicated by the data below. The top performing brands Nike, Adidas, and Jordan brand all take the center stage. Click the buttons below to sort the data to your preference.</p>
            <button onClick={handleSortSales}>Sort By Highest Sales</button>
            <br></br>
            <button onClick={handleSortName}>Sort By Name</button>
            <ul>{saleList}</ul>
            <div>
            </div>
            </div>
    
    )


}

export default SalesPage