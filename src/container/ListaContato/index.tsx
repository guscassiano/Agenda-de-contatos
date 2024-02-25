import { useSelector } from 'react-redux'
import Contato from '../../componentes/Contato'
import { CampoLista, ListaEstilo } from '../styles'
import { RootReducer } from '../../store'

const Lista = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <CampoLista>
      {itens.map((c) => (
        <ListaEstilo key={c.nome}>
          {' '}
          <Contato nome={c.nome} email={c.email} numero={c.numero} id={c.id} />
        </ListaEstilo>
      ))}
    </CampoLista>
  )
}

export default Lista
