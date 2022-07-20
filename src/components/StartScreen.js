import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>SecretWord</h1>
        <p>Clique aqui para começar a jogar!</p>
        <button onClick={startGame}>Começar jogo</button>
    </div>
  )
}

export default StartScreen