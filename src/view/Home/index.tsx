import React, { useState, useEffect } from 'react';
import { Container, Footer, Main } from './style';
import Cart from '../../assets/carrinho-de-compras.png';
import Logo from '../../assets/logotipo.png';
import api from '../../services/api';

interface IProduct{
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}

interface Test {
  cart: IProduct[]
}

const Home: React.FC = () => {
  const [ data, setData ] = useState<IProduct[]>([]);
  const [ cart, setCart ] = useState<IProduct[]>([]);
  
  useEffect(() =>{
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

  useEffect(() => {
    localStorage.setItem(`@cart`, JSON.stringify(cart));
  }, [cart]);

  const handleCart = ( index: number ) => {
    let product = data[index]
    setCart(cart => [...cart,product]);
  }

  return(
    <Container>
      <Main>
      <div className="nav">
        <div>
          <img src={Logo} alt="Logotipo" width="90px" height="auto" />
        </div>
        <div className="cart">
          <img src={Cart} alt="shopcart" width="40px" height="auto" />
          <span>( {cart.length} ) - Itens no carrinho</span>
        </div>
      </div>
      <section>
        { data.map( (prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="iphone" width="200" height="auto" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h5>R$ {prod.price}</h5>
            <button onClick={ () => handleCart(index)}> Adicionar ao carrinho</button>
          </div>
        ))}
      </section>
      </Main>
      <Footer>
        <ul>
          <li><a href="https://github.com/rayanaprata" target="_blank">Github</a></li>
          <li><a href="https://www.linkedin.com/in/rayanaprata/" target="_blank">LinkedIn</a></li>
          <li><a href="https://twitter.com/rayanaprata" target="_blank">Twitter</a></li>
          <li><a href="https://www.instagram.com/rayanaprataa/" target="_blank">Instagram</a></li>
        </ul>
        <span>Desafio do Bootcamp Hiring Coders da Gama Academy.</span>
        <p>Site desenvolvido por <a href="https://github.com/rayanaprata" target="_blank">Rayana Prata</a>.</p>
      </Footer>
    </Container>
  );
}

export default Home;