import './AssNewsletter.scss'
import { Card } from './Cards'

import bgPolimorph from '../../../public/assets/Vector.png'
import principalTree from '../../../public/assets/imagem-hero 1.png'
import  { AiOutlineMail } from 'react-icons/ai'
import imagem3 from '../../../public/assets/image 3.png'
import ellipse from '../../../public/assets/Ellipse 1.png'

//Products
import product1 from '../../../public/assets/produto-01 1.png'
import product2 from '../../../public/assets/produto-02 1.png'
import product3 from '../../../public/assets/produto-03 1.png'
import product4 from '../../../public/assets/produto-04 1.png'
import product5 from '../../../public/assets/produto-05 1.png'
import product6 from '../../../public/assets/produto-06 1.png'

const products = [
    {
        img: product1,
        product: 'Ajuga reptans',
        price: '20'
    },
    {
        img: product2,
        product: 'Cordyline fruticosa',
        price: '20'
    },
    {
        img: product3,
        product: 'Crassula ovata',
        price: '20'
    },
    {
        img: product4,
        product: 'Cyperus rotundus',
        price: '20'
    },
    {
        img: product5,
        product: 'Delairea odorata',
        price: '20'
    },
    {
        img: product6,
        product: 'Datura metel',
        price: '20'
    },
    

]

export function AssNewsLetter() {


    return(
        <div className="container-newsletter">
            <div className='container-newsletter_assBox'>
                <div className='container-newsletter_assBox_text'>
                    <p>Sua casa com as</p>
                    <h1>melhores plantas</h1>
                    <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
                </div>
                <form className='container-newsletter_assBox_input'>
                    <div>
                        <AiOutlineMail />
                    </div>
                    <input type="text" placeholder='Insira seu e-mail'/>
                    <button>Assinar Newsletter</button>
                </form>
            </div>
            <img src={bgPolimorph} alt="polimorfo amarelo" className='bgNewsletter'/>
            <img src={principalTree} alt="arvore" className='imgTree'/>
            <div className='container-newsletter_card'>
                <img src={imagem3} alt="imagem Card" />
                <div>
                    <p>Como conseguir</p>
                    <h3>minha planta</h3>
                    <ul>
                        <li>
                            <img src={ellipse} /> <p>Escolha suas plantas</p>
                        </li>
                        <li>
                            <img src={ellipse} />
                            <p>Faça seu pedido</p>
                        </li>
                        <li>
                            <img src={ellipse} /> <p>Aguarde na sua casa</p>
                        </li>
                    </ul>
                </div>
            </div>
            <section>
                <p>Conheça nossas</p>
                <h2>ofertas</h2>
                <div className='cards'>
                    {products.map(product => <Card  img={product.img} product={product.product} price={product.price}/>)}
                </div>
            </section>
        </div>
    )
}