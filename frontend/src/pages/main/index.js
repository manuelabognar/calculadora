import React, { Component } from 'react';
import Tabela from '../../components/tabela/Tabela.js';
import Formulario from '../../components/formulario/Formulario.js';
import ApiService from '../../services/Api.js';


import background from '../../assets/background.jpg';

export default class  Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      alunos: [],
    };
  }


  removeAluno = id => {
    const { alunos } = this.state;

    const alunosAtualizado = alunos.filter (aluno => {
      return aluno.id !== id;
    });

    ApiService.RemoveAluno(id)
              .then(res => {
                 if (res.message === 'deleted') {
                   this.setState({ alunos: [...alunosAtualizado] });
                 }
              })
  }


  escutadorDeSubmit = aluno => {
    ApiService.CriaAluno(JSON.stringify(aluno))
              .then(res => {
                if (res.message === 'success') {
                  this.setState({ alunos : [...this.state.alunos, res.data] });
                }
              })
    }
  


  componentDidMount() {
    ApiService.ListaAlunos()
              .then (res => {
                if ( res.message === 'success') {
                  this.setState({ alunos: [...this.state.alunos, ...res.data] })
                }
              })
            }


  render () {
    
    return (
      <div className="container">
        <div className="content">
          <section>
            <h1>Calculadora de notas</h1>
            <p>
              O objetivo dessa aplicação é mostrar a nota mínima para a p3.
            </p>
            <p>
              Sendo que a fórmula é P1 * 0.25 + P2 * 0.25 + P3 * 0.5 e
              a média é 6.2.
            </p>
          </section>
          <Tabela alunos = { this.state.alunos } removeAluno = { this.removeAluno } />
          <Formulario escutadorDeSubmit = { this.escutadorDeSubmit } />
        </div>
      </div>
    );
  };
  
}
