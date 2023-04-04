import './Cards.scss';

interface ICards {
    img: any,
    product: string,
    price: string
}

export function Card(props:ICards) {
    return(
        <div className="card">
            <img src={props.img} alt="product" />
            <div>
                <h4>{props.product}</h4>
                <p>R$ {props.price},00</p>
                <p>Comprar {'>'} </p>
            </div>
        </div>
    )
}