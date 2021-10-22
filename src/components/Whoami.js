const B = ({txt}) => <spam className="nickName">{txt}</spam>
const Whoami = () => {
    return(
        <div className="whoami white-text">
            <header id="whoami" />
            <div className="picBlock">
                <div className="mePhotoDiv">
                    <img src={`${process.env.PUBLIC_URL}/assets/Greg.jpg`} className="mePhoto" />
                </div>
                <div className="titlesBlock">
                    <h1>Front End Developer</h1>
                    <h4>Grzegorz (<B txt="Greg"/>) Kozdrój</h4>
                    <div className="contact">
                        <p>07454534018</p>
                        <p>gregkozdroj@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="nextSection">
                <h4 className="nextSectionTitle">Lets build together</h4>
                <p className="titlesBlock">
                    I am passionate web developer utilising powers of <B txt="React"/> and <B txt="jQuery"/>. Capable of building  backend application with <B txt="nodeJS" /> and <B txt="MongoDB" />, or any other technology required. <br/> I'm always willing to learn cool new things.
                </p>
            </div>
        </div>
    )
}
export default Whoami