import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Bajpai' Management System!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Gurgaon's most superluminous location, come to use and name a problem, and we'll have a solution<sup>T&C apply</sup></p>
                <address className="public__addr">
                    Abhishek Bajpai<br />
                    8008135 Gurugram<br />
                    Haryana, Bharat<br />
                    <a href="tel: 916942069420">965855855854</a>
                </address>
                <br />
                <p>Owner: Abhishek Bajpai</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public