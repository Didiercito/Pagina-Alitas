import InfoCo from '../../../store/ComentsDataBase';
import '../Coments/Coments.css';

function Coments() {
    return (
        <>
            {InfoCo.Data3.map((Data3, index) => (
                <div key={index} className='conteiner-coments'>
                    <div className='sub-conteiner'>
                        <img src={Data3.imagen} alt="Usuario" className='img-coments' />
                    </div>
                    <div className='sub-conteiner2'>
                        <p>{Data3.texto}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Coments;
