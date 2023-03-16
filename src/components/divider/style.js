import styled from 'styled-components'

const DividerStyled = styled.div`
  height: ${props => props.size ? props.size : '2em'};
`

export default DividerStyled