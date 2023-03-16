import styled from 'styled-components'
import LoadingInfoStyled from '../loading-info/style'

const LoadingErrorStyled = styled(LoadingInfoStyled)`
  & button {
    cursor: pointer;
    font-size: 0.6em;
    padding: 1em 2em;
  }
`

export default LoadingErrorStyled