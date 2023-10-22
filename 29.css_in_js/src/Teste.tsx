import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;
`

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao principal={false}>cancelar</Botao>
      <BotaoPerigo as="a" principal>
        Não clique aqui
      </BotaoPerigo>
    </>
  )
}

export default Teste
