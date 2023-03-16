import styled from 'styled-components'
import { colors } from '../../shared/style/colors'

const EventListStyled = styled.li`
  font-size: ${props => props.isLarge ? '1.25em' : '1em'};
  margin-bottom: 0.3em;

  &:first-of-type {
    border-bottom: 2px solid ${colors.antiFlashWhite};
    min-height: 100px;
    padding-bottom: 1em;
  }
`

export default EventListStyled