import React from 'react';
import { connect } from 'react-redux';
import { diplayResult } from '../Action/actionPrincipal';
import './evenOdd.css';


class EvenAndOddNumber extends React.Component {
    constructor(){
    super();
    this.state={ //Estado Inicial
        number:"__",
        result:"____"
    }

}
//Manejo de DOM, se extrae indormación del usuario, se envía al Store y calcula si el número es par o impar.
    handleCalculator=(e)=>{
        let numberEntered = document.getElementById('number').value;
        this.setState({
            ...this.state,
            number: numberEntered
        },()=>{
            if(this.state.number %2 ===0){
                this.setState({
                    ...this.state,
                    result: 'PAR'
                },()=>{
                    this.props.diplayResultAction(this.state)
                })
            }else{
                this.setState({
                    ...this.state,
                    result: 'IMPAR'
                },()=>{
                    this.props.diplayResultAction(this.state)
                })
            }

            
        })
    }

    render(){
        
        return (
          <div className="container">
                <p className="title">¿Es par o Impar?</p>
                <div className="body">
               
                <input className="numberValidation" type="text" name="number" id="number" placeholder=" Ingresa un número:"/>
                 <button className="numberValidation button" onClick={this.handleCalculator}>Validar</button>
                </div>

                <div className="body result">
                    <h2 className="titleresult">RESULTADO</h2>
                    <p>El número <span className="titleresult">{this.state.number}</span> es <span className="titleresult">{this.state.result}</span> </p>
                </div>
          </div>
        )
    }
}

// Envio a Redux
const mapStateToProps = state => {
    return ({
        ...state,       
    })
 };const mapDispatchToProps = dispatch => ({     
    diplayResultAction: diplayResult(dispatch)   

 });export default
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(EvenAndOddNumber)