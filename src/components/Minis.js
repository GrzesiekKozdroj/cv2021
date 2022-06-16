import { useEffect } from 'react'
import { Link, useRouteMatch } from "react-router-dom";
import M from 'materialize-css'
import pack from './vars'
const Picture = (props) => {
    const {text, img, link} = props.props
    const { url } = props
    return (
        <Link className="carousel-item" to={'/cv'+url+link}>
            <img className="responsive-img " src={img} alt={text}/>
            <span className="white-text text-darken-4">{text}</span>
        </Link>
    )
}
const Carusel = (props) => {
    const { imagesLoad, header, path, url, key } = props
    return (
        <>
            <h4 className="modelsCategories white-text text-darken-4" key={key} >{header}</h4>
            <div className="carousel">
                { imagesLoad.map( el => <Picture props={el} path={path} url={url} /> ) }
            </div>
        </>
    )
}

const Minis = ()=> {
    let { path, url } = useRouteMatch()
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
        <div >
            <header id="minis" />
            <h3 className="modelsCategories white-text text-darken-4">miniatures I've painted</h3>
                {load}
        </div>
    )
}
export default Minis