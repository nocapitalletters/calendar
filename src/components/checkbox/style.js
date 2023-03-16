import styled from 'styled-components'
import { colors } from '../../shared/style/colors'

const CheckboxStyled = styled.div`
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  display: flex;

  &:hover {
      background: ${colors.caribbeanCurrent};
    }

  & div {
    background: ${props => props.checked ? colors.midnightGreen : colors.antiFlashWhite};
    border: 2px solid ${colors.night};
    border-color: ${props => props.checked ? colors.antiFlashWhite : colors.night};
    border-radius: 5px;
    height: 2em;
    margin: 1em;
    width: 2em;
  }

  & p {
    font-size: 1.25em;
  }
`

export default CheckboxStyled