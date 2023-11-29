import Cards from "../../atoms/Card/Card";
import Coments from "../../atoms/Coments/Coments";
import Reviews from "../../atoms/Reviews/reviews";
import '../Conteiner/Conteiner.css';
import Header from "../../atoms/Header/Header";

function Conteiner() {
    return (  
        <>

        <div>
            <Header></Header>
        </div>
    
        <div className="algo">
            <Cards></Cards>
        </div>



        <div className="algo2">
            <Reviews></Reviews>
        </div>

        <div className="algo3">
            <Coments></Coments>
        </div>
        
        </>
    );
}

export default Conteiner;