import CheckboxStyled from "./style";
import { useAtom } from "jotai";

const Checkbox = ({ eventAtomConfig }) => {

  const [eventAtom, setEventAtom] = useAtom(eventAtomConfig);

  const toggleAttending = () => {
    let current = eventAtom.isAttending;
    let id = eventAtom.id;
    setEventAtom({ id: id, isAttending: !current });
  };

  return (
    <CheckboxStyled checked={eventAtom.isAttending} onClick={() => toggleAttending()}>
      <div/>
      <p>{eventAtom.isAttending ? 'Närvarar' : 'Anmäl närvaro'}</p>
    </CheckboxStyled>
  );
};

export default Checkbox;