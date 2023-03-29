import CardContainer from "../../components/card-container/card-container";
import './home.scss'
function Home() {
    return (
        <>
        <div className="categ-container">
            <h1>Top 10 in Supernatural</h1>
            <CardContainer />
            <CardContainer />
            <CardContainer />
            </div>
        </>
    );
}
export default Home;