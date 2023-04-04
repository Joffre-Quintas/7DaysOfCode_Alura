import './Header.scss'
import Logo from '../../../public/assets/logo.png';

export function Header() {
    return(
        <header>
            <div className="container">
                <img src={Logo} alt="Logo" />
                <nav>
                    <ul>
                        <li>Como fazer</li>
                        <li>/</li>
                        <li>Ofertas</li>
                        <li>/</li>
                        <li>Depoimentos</li>
                        <li>/</li>
                        <li>Vídeos</li>
                        <li>/</li>
                        <li>Meu carrinho</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}