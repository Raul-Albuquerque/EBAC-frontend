import styled from 'styled-components'
import { Props } from './index'

export const Titulo = styled.h3<Props>`
  margin-bottom: 16px;
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
`
