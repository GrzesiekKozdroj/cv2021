import { NavHashLink as HLink } from 'react-router-hash-link'
const classes = "white-text"
const NavButtonTemplate = ({to, text},i)=>{
    return (
        <li>
            <HLink 
                smooth 
                activeClassName="selected" 
                className = {classes}
                to={to} 
                key={i}
            >{text}</HLink>
        </li>
    )
}
const nB = (to, text) => {return {to, text}}
const linker = "/cv"
const navButtons = [
    nB(`${linker}/#whoami`, 'about me'), 
    nB(`${linker}/#codin_projects`,'coding projects'), 
    nB(`${linker}/#minis`,'miniature gallery'), 
    nB(`${linker}/#thoughts`,'thoughts')
]
const loadz = navButtons.map( (el,i)=> NavButtonTemplate(el,i) )
console.log(loadz)
const Navbar = () => {
    return (
        <>
            <nav>
                <div className="nav-wrapper #4caf50 green darken-4">
                    <a href="/cv/" exact className="brand-logo">[@_* ]</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        { loadz }
                    </ul>
                </div>

            <ul className="sidenav green darken-4 white-text" id="mobile-demo"  >
                { loadz }
            </ul>
            </nav>
        </>
    )
}
export default Navbar