import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #2d3436;
  }
`

export const Container = styled.div`
  background-color: #00b894;
  color: #fff;
  max-width: 1366px;
  margin: 100px auto;
  padding: 16px;
  position: relative;
  border-radius: 8px;
`
