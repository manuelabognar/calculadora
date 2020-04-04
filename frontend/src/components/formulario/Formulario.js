import React, { Component } from 'react';

class Formulario extends Component {

  constructor (props) {
    super(props);

    this.stateInicial = {
      nome : '',
      notaUm : 1,
      notaDois : 0.1
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
        

            <div class="nomeForm">
              <input 
                id ="nome"
                type = "text"
                name = "nome" 
                className="validate"
                value = { nome } 
                onChange = { this.escutadorDeInput } 
              />
              <label htmlFor="nome">Nome</label>
            </div>


            <div class="notaForm">
              <input 
                id ="notaUm"
                type = "number"
                name = "notaUm" 
                className="validate" 
                value = { notaUm } 
                onChange = { (this.escutadorDeInput) }
              />
              <label htmlFor="notaUm">Nota 1</label>
            </div>

            <div class="notaForm">
              <input 
                id ="notaDois"
                type = "number"
                name = "notaDois" 
                className="validate" 
                value = { notaDois } 
                onChange = { this.escutadorDeInput }
              />
              <label htmlFor="notaDois">Nota 2</label>
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