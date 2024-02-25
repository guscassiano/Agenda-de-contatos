import styled from 'styled-components'
import { Botao, Item } from '../../componentes/Contato/styles'

export const Form = styled.form`
  align-items: center;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  padding: 20px;
`

export const Input = styled(Item)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-right: 40px;
  margin-left: 4px;
`

export const Label = styled.label`
  font-size: 24px;
`

export const BotaoVoltar = styled(Botao)`
  margin-left: 10px;
`
