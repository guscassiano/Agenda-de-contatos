import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from '../../componentes/Contato/styles'

import { cadastrar } from '../../store/reducers/contatos'
import { BotaoVoltar, Form, Input, Label } from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState(0)

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      cadastrar({
        nome,
        email,
        numero
      })
    )
    navigate('/')
  }

  return (
    <div>
      <h1>Nova Tarefa</h1>
      <Form onSubmit={cadastrarContato}>
        <Label htmlFor="nome">Nome: </Label>
        <Input
          required
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          placeholder="Nome"
        />
        <Label htmlFor="email">E-mail: </Label>
        <Input
          required
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <Label htmlFor="numero">Número: </Label>
        <Input
          maxLength={11}
          value={numero}
          onChange={({ target }) => setNumero(Number(target.value))}
        />
        <div>
          <S.BotaoSalvar type="submit">Adicionar</S.BotaoSalvar>
          <BotaoVoltar onClick={() => navigate('/')} type="button">
            Voltar
          </BotaoVoltar>
        </div>
      </Form>
    </div>
  )
}

export default Formulario
