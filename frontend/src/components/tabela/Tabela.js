import React, { Component } from 'react';

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
      <th>Alunos</th>
      <th>Nota 1</th>
      <th>Nota 2</th>
      <th>Nota 3 <br/> (mínima)</th>
      <th>Remover</th>
    </tr>
  </thead>
  );
}

const TableBody = props => {
  const linhas = props.alunos.map((linha) => {
    return (
      <tr key={linha.id}>
        <td> {linha.nome} </td>
        <td> {linha.notaUm} </td>
        <td> {linha.notaDois} </td>
        <td> {calculaNotaTres(linha.notaUm, linha.notaDois)} </td>
        <td><button onClick = { () => { props.removeAluno(linha.id) } } className="waves-effect waves-light btn">Remover</button></td>
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
      <table className="paleBlueRows">
        <TableHead />
        <TableBody alunos = { alunos } removeAluno = { removeAluno } />
      </table>
    );
  }

}

export default Tabela;