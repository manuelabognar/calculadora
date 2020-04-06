import React, { Component } from 'react';

class Formulario extends Component {

  constructor (props) {
    super(props);

    this.stateInicial = {
      nome : '',
      notaUm : 5,
      notaDois : 7
    }

    this.state = this.stateInicial;

  }

  escutadorDeInput = event => {
    const { name, value } = event.target;
  
    if (name === "nome") {
      this.setState ({
        [name] : value
      });    
    } else {
      this.setState ({
        [name] : parseFloat(value)
      });  
    }
  }

  submitFormulario = () => {
    this.props.escutadorDeSubmit(this.state);
    this.setState(this.stateInicial);
  }
  

  render() {

    const { nome, notaUm, notaDois } = this.state;

    return (

      <div>
        <form>

<div className="row">
        

            <div className="nomeForm">
              <label htmlFor="nome">Nome</label>
              <input 
                id ="nome"
                type = "text"
                name = "nome" 
                className="validate"
                value = { nome } 
                onChange = { this.escutadorDeInput } 
              />
            </div>


            <div className="notaForm">
              <label htmlFor="notaUm">Nota 1</label>
              <input 
                id ="notaUm"
                type = "number"
                step= "0.1"
                min="0" max="10"
                name = "notaUm" 
                className="validate" 
                value = { notaUm } 
                onChange = { (this.escutadorDeInput) }
              />
            </div>

            <div className="notaForm">
              <label htmlFor="notaDois">Nota 2</label>
              <input 
                id ="notaDois"
                type = "number"
                step= "0.1"
                min="0" max="10"
                name = "notaDois" 
                className="validate" 
                value = { notaDois } 
                onChange = { this.escutadorDeInput }
              />
            </div>
            </div>

            <div>
              <button 
                onClick={ this.submitFormulario } 
                type="button"
                className="button">
                  Salvar
              </button>
            </div>
          

        </form>
      </div>
    );
  }
}

export default Formulario;