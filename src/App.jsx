import Logo from '../src/assets/Logo.png'
// import But from './components/Botao'
import './Fundo.css'

function App() {
  
  return (
    <div className='fundo'>
      <div className='bloco'>
      <img src={Logo} alt="" width="70px" height="46px"/>
        <h1>Cadastre-se</h1> 
        {/* <But/> */}
        <p className='pp'>Nome:</p>
         <input type="text"  id="nome" />
         <p className='pp'>Email:</p>
         <input type="email"  id="email" />
         <p className='pp'>Senha:</p>
        <input type="password" id="senha" />
        <p className='pw'>Confirme senha:</p>
        <input type="password" id="senha" />
        <br />
        <button className='entrar'>Criar</button>
      </div>
    </div>
  )
}

export default App
