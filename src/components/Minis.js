

//import da1 from '../img/modelz/DarkAngels/20150910_074515.jpg'
import { useEffect, Component, } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, useParams, useRouteMatch } from "react-router-dom";
import M from 'materialize-css'
import pack from './vars'
const Picture = (props) => {
    const {text, img, link} = props.props
    return (
        <Link className="carousel-item" to={`/minis/${img}`}>
            <img className="responsive-img" src={img} alt={text}/>
            <span className="green-text text-darken-4">{text}</span>
        </Link>
    )
}
const Carusel = (props) => {
    const {imagesLoad, header} = props
    return (
        <>
            <h4 className="modelsCategories green-text text-darken-4">{header}</h4>
            <div className="carousel">
                {imagesLoad.map( el => <Picture props={el}/> )}
            </div>
        </>
    )
}
const SingleImg = () => {
    let { topicId } = useParams()
    return (
        <>kjbdfrbvjfdbvb
        <img src={topicId} />
        </>
    )
}

const Minis = ()=> {
    let { path, url } = useRouteMatch()
    useEffect(() => {
        var elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {numVisible:7});
    }, [])
    return (
        <>
            <h1 className="modelsCategories green-text text-darken-4">miniatures I've painted</h1>
            <Router>
                <Carusel imagesLoad={pack.models.DarkAngels} header="Warhammer 40000: Dark Angels" />
                <Carusel imagesLoad={pack.models.Trollbloods} header="Hordes: Trollbloods" />
                {/* <Carusel imagesLoad={pack.models.GuildBall} header="Guild Ball" />
                <Carusel imagesLoad={pack.models.Malifaux} header="Malifaux: Ten Thunders" />*/}
                <Carusel imagesLoad={pack.models.Bretonnia} header="Warhammer Fantasy: Bretonnia" />
                {/*<Carusel imagesLoad={pack.models.OddMinis} header="...minis painted on a whim" /> */}
                <Switch>
                    {
                        pack.models.DarkAngels.map( el=>{
                        <Route path={path+'/:'+el.img} >
                            <SingleImg/>  
                        </Route> 
                        } )
                    }
                </Switch>
            </Router>
        </>
    )
}
export default Minis