import { Link } from 'react-router-dom'
const CloseButton = () => {
    return (
        <Link to="/cv">
            <a class="btn-floating btn-large waves-effect left waves-light green darken-4">
                <i class="material-icons">close</i>
            </a>
        </Link>
    )
}
export default CloseButton