import React, { Component } from 'react'

export default class Clientes extends Component {
    render() {
        const clienteJoao = {
            nome: 'João',
            idade: 37,
            compras: [
              { nome: 'Notebook', preco: '2500' },
              { nome: 'Motocicleta"', preco: '10000' },
              { nome: 'Smartphone', preco: '1500' },
              { nome: "Conjunto de panelas", preco: '2000' },
            ],
            cidade: "Belém",
          };
            
          const clienteMaria = {
            nome: 'Maria',
            idade: 18,
            compras: [
              { nome: 'Computador', preco: '2500' },
              { nome: 'Coletânia de livros', preco: '1000' },
              { nome: 'Smartphone', preco: '1500' },
            ],
            cidade: "Rio de Janeiro",
          };
        return (
            <div>
                {/*{[<h1>oi</h1>,<h1>oi</h1>]} - se eu faço isso, ele irá mostrar os dois h1*/}
        {/* Fiz uma estrutura de repetição com array para criar 
        cada vez que surge um cliente novo, ele faz a mesma coisa */}
        {Array.of(clienteJoao,clienteMaria).map((cliente,i) =>{
              return(
              <div key={i}>
              <h1>Cliente: </h1>
              <br/>
              <h2>Nome {cliente.nome}</h2>
              <br/>
              <h3>Idade: {cliente.idade} </h3>
              <br/>
              <h3>Total de compras: {cliente.compras.reduce((a,b)=>a + Number(b.preco) , 0) > 10000 ? 
              <span style={{color:'red'}}> {cliente.compras.reduce((a,b)=>a + Number(b.preco) , 0)} </span> :
              <span style={{color:'green'}}> {cliente.compras.reduce((a,b)=>a + Number(b.preco) , 0)}</span>}</h3>
              </div>
            )
          })
        }
            </div>
        )
    }
}
