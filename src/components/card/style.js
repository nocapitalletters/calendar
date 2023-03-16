import styled from 'styled-components'
import { colors } from '../../shared/style/colors'

const CardStyled = styled.div`
  background: ${props => props.isAttending ? colors.nonPhotoBlue : colors.midnightGreen};
  color: ${props => props.isAttending ? colors.night : colors.antiFlashWhite};
  margin: 1em 0 0 1em;
  width: 16em;
  order: ${props => props.isAttending ? -1 : 0};
  padding: 3em 3em 7em 3em;
`

export default CardStyled