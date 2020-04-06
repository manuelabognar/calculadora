import React, { Component } from 'react';
import { FiTrash2 } from 'react-icons/fi';

function calculaNotaTres(p1,p2) {
  // P1 * 0.25 + P2 * 0.25 + P3 * 0.5 >= 6.2
  // 0.5 * P3 >= 6.2 - 0.25 * P1 - 0.25 * P2
  // P3 >= (6.2 - 0.25 * P1 - 0.25 * P2) / 0.5
  let p3 = (6.2 - 0.25 * p1 - 0.25 * p2) / 0.5

  p3 = parseFloat(p3.toFixed(1));

  return ( p3 );
}



const TableHead = () => {
  return (
  <thead>
    <tr>
      <th scope="col">Alunos</th>
      <th scope="col">Nota 1</th>
      <th scope="col">Nota 2</th>
      <th scope="col">Nota 3<br/>(mínima)</th>
      <th scope="col">Remover</th>
    </tr>
  </thead>
  );
}

const TableBody = props => {
  const linhas = props.alunos.map((linha) => {

    const notaTres = calculaNotaTres(linha.notaUm, linha.notaDois);
    const NotaTresTd = () => {
      if (notaTres > 10) {
        return ( 
          <td className="reprovado" data-label="Prova 3 ">{notaTres}</td>
        );
      } else {
        return ( 
          <td  data-label="Prova 3 ">{notaTres}</td>
        );
      }
    }

    return (  
      <tr key={linha.id} id="alunoTr">
        <td> {linha.nome} </td>
        <td data-label="Prova 1 "> {linha.notaUm} </td>
        <td data-label="Prova 2 "> {linha.notaDois} </td>
        <NotaTresTd />
        <td data-label="Remover ">
          <FiTrash2 size={20}  
            onClick = { () => { props.removeAluno(linha.id) } }
          />
        </td>
      </tr>
    );
  });

  return (
    
    <tbody>
      { linhas }
    </tbody>
  );
}

class Tabela extends Component {

  render(){
    
    const { alunos, removeAluno } = this.props;

    return(
      <table className="alunos">
        <TableHead />
        <TableBody alunos = { alunos } removeAluno = { removeAluno } />
      </table>
    );
  }

}

export default Tabela;