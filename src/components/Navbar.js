import { NavHashLink as HLink } from 'react-router-hash-link'
const Navbar = () => {
    return (
        <>
            <nav>
                <div className="nav-wrapper #4caf50 green darken-4">
                    <a href="/" exact className="brand-logo">[@_* ]</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><HLink smooth activeClassName="selected" to="/#whoami" >about me</HLink></li>
                        <li><HLink smooth activeClassName="selected" to="/#codin_projects" >coding projects</HLink></li>
                        <li><HLink smooth activeClassName="selected" to="/#minis" >miniature gallery</HLink></li>
                        <li><HLink smooth activeClassName="selected" to="/#thoughts" >thoughts</HLink></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav green darken-4 white-text" id="mobile-demo"  >
                <li><HLink smooth activeClassName="selected" className="white-text" to="/whoami" >about me</HLink></li>
                <li><HLink smooth activeClassName="selected" className="white-text" to="/codin_projects" exact >coding projects</HLink></li>
                <li><HLink smooth activeClassName="selected" className="white-text" to="/minis" >miniature gallery</HLink></li>
                <li><HLink smooth activeClassName="selected" className="white-text" to="/thoughts" >thoughts</HLink></li>
            </ul>
        </>
    )
}
export default Navbar