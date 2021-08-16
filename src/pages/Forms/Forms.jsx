import React,{Component} from 'react'
import style from './Forms.module.css'
import ImgForms from '../../assents/contact-pic.jpg'
import Btn from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import TextArea from '../../components/TextArea/TextArea'

export default class Forms extends Component{
    constructor(props){
        super(props)
        this.state = {
            nome : "",
            email: "",
            mensagem: ""
        }
    }
    handleInputChange = (event) =>{
        switch (event.target.name){
            case "nome" :
                this.setState({nome: event.target.value})
                break
            case "email" : 
                this.setState({email : event.target.value})
                break
            case "mensagem" :
                this.setState({mensagem : event.target.value})
                break
            default :
                throw new Error('Campo Invalido')
        }
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        let json = {
            nome : this.state.nome,
            email : this.state.email,
            mensagem: this.state.mensagem
        }
        console.log(json)
    }
    render(){
        return(<>
        <h1 className={style.titleForms}>Contato</h1>
        <form className={style.containerForms}>
            <img src={ImgForms} className={style.imgForms} alt="back"/>
            <Input type="text" name="nome" onChange={this.handleInputChange} className={style.formsNome}>Nome: </Input>
            <Input type="email" name="email" onChange={this.handleInputChange} className={style.formsEmail}>E-mail: </Input>
            <TextArea name="mensagem" onChange={this.handleInputChange} className={style.formsMensagem}>Mensagem: </TextArea>
            <Btn className={style.btnForms} onClick={this.handleSubmit}>Enviar</Btn>
        </form>
        </>)
    }
}

/* contructor(){
        this.state = {
            disabled : false
        }   
    }
    disab = () =>{
        this.setState({disabled : true})
        setTimeout(()=>{
            this.setState({disabled : false})
        },6000)
    }
    <button disabled={this.state.disabled} onClick={this.disab}>Click</button> */
