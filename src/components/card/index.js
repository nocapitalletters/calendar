import CardStyled from "./style";
import { useAtom } from 'jotai';

const Card = ({ children, eventAtomConfig }) => {

  const [eventAtom] = useAtom(eventAtomConfig);

  return (
    <CardStyled isAttending={eventAtom.isAttending}>
      {children}
    </CardStyled>
  );
};

export default Card;