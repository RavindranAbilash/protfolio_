import './portfolio.scss'
import PortfolioList from "../portfolioList/PortfolioList";
import {useEffect, useState} from "react";
import {
    featuredPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
    webPortfolio
} from "../../data";

const Portfolio=()=>{
    const [selected,setSelected] = useState("featured")
    const [data,setData]=useState([]);
    const list = [
        {
            id:"featured",
            title:"Featured"
        },
        {
            id:"webapp",
            title:"Webapp"
        },
        {
            id:"mobileApp",
            title:"Mobile App"
        },
        {
            id:"designing",
            title:"Designing"
        },
        {
            id:"branding",
            title:"Branding"
        },

    ]

    useEffect(()=>{
        switch (selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "webapp":
                setData(webPortfolio);
                break;
            case "mobileApp":
                setData(mobilePortfolio);
                break;
            case "designing":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                break;
        }
    },[selected])
    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=>(
                    <PortfolioList
                        title={item.title}
                        active={selected=== item.id}
                        setSelected={setSelected}
                        id={item.id}/>

                ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
                    <div className="item">
                        <img src={d.img} alt=""/>
                        <h3>{d.title}</h3>
                    </div>
                ))}

            </div>
        </div>
        )

}

export default Portfolio;