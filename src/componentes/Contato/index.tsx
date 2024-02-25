import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { remover, editar } from '../../store/reducers/contatos'
import * as S from '../Contato/styles'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome: nomeOrig,
  email: emailOrig,
  numero: numeroOrig,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState(0)

  useEffect(() => {
    if (nomeOrig.length > 0) {
      setNome(nomeOrig)
    }
  }, [nomeOrig])

  useEffect(() => {
    if (emailOrig.length > 0) {
      setEmail(emailOrig)
    }
  }, [emailOrig])

  useEffect(() => {
    if (numeroOrig > 0) {
      setNumero(numeroOrig)
    }
  }, [numeroOrig])

  function cancelar() {
    setEstaEditando(false)
    setNome(nomeOrig)
    setEmail(emailOrig)
    setNumero(numeroOrig)
  }

  return (
    <>
      <S.Item
        disabled={!estaEditando}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <S.Item
        disabled={!estaEditando}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Item
        minLength={8}
        maxLength={11}
        disabled={!estaEditando}
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
      />
      <div>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              type="button"
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    id,
                    email,
                    numero
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoRemover onClick={cancelar} type="button">
              Cancelar
            </S.BotaoRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)} type="button">
              Editar
            </S.Botao>
            <S.BotaoRemover type="button" onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </div>
    </>
  )
}

export default Contato
