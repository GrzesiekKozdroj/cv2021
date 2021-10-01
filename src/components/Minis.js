

//import da1 from '../img/modelz/DarkAngels/20150910_074515.jpg'
import { useEffect, Component, } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, useParams, useRouteMatch, useHistory } from "react-router-dom";
import M from 'materialize-css'
import pack from './vars'
const Picture = (props) => {
    const {text, img, link} = props.props
    const { path, url } = props
    return (
        <Link className="carousel-item" to={url+link}>
            <img className="responsive-img " src={img} alt={text}/>
            <span className="green-text text-darken-4">{text}</span>
        </Link>
    )
}
const Carusel = (props) => {
    const {imagesLoad, header, path, url, key } = props
    return (
        <>
            <h4 className="modelsCategories green-text text-darken-4" key={key} >{header}</h4>
            <div className="carousel">
                {imagesLoad.map( el => <Picture props={el} path={path} url={url} /> )}
            </div>
        </>
    )
}
const SingleImg = ({onClick}) => {
    let { imageId } = useParams()
    return (
        <div onClick={ onClick } className="fakeContajner">
            <img 
                className="galleryImgPopup"
                src={ `${process.env.PUBLIC_URL}/assets/${imageId}` } 
                alt={imageId}
            />
        </div>
    )
}

const Minis = ()=> {
    let { path, url } = useRouteMatch()
    const history = useHistory()
    const returnToMinisClick = () => history.goBack();
    useEffect(() => {
        var elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {numVisible:7});
    }, [])
    let load = []
    for (let key in pack.models){
        let item = pack.models[key]
        load = [...load, <Carusel imagesLoad={item} header={key} path={path} url={url} key={key} /> ]
    }
    return (
        <>
            <h1 className="modelsCategories green-text text-darken-4">miniatures I've painted</h1>
            <Router>
                {load}
                <Switch>
                    <Route exact path={`${path}/:imageId`} >
                        <SingleImg onClick={returnToMinisClick}/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
export default Minis