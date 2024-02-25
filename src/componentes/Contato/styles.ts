import styled from 'styled-components'

export const Item = styled.textarea`
  font-size: 18px;
  resize: none;
  background-color: transparent;
  border: none;
  color: #fff;
  height: 24px;
  padding: 0 10px;
`

export const Botao = styled.button`
  padding: 8px 10px;
  border-radius: 10px;
  maring left: 8px;
  color: #fff;
  font-weight: bold;
  background-color: #2d3436;
  cursor: pointer;
`

export const BotaoRemover = styled(Botao)`
  background-color: #c0392b;
  margin-left: 10px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: #2980b9;
  margin-left: 10px;
`
