import BotaoAdicionar from '../BotaoAdicionar'
import { Cabecalho } from './styles'

const Agenda = () => (
  <>
    <h1>Contatos</h1>
    <Cabecalho>
      <h2>Nome</h2>
      <h2>E-mail</h2>
      <h2>Número</h2>
      <div>
        <BotaoAdicionar />
      </div>
    </Cabecalho>
  </>
)

export default Agenda
