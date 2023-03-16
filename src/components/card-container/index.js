import { atom } from "jotai";
import CardContainerStyled from "./style";
import Card from '../../components/card';
import Checkbox from '../../components/checkbox';
import Divider from '../../components/divider';
import EventList from '../../components/event-list';

const CardContainer = ({ eventViewmodels }) => {
  return (
    <CardContainerStyled>
      {eventViewmodels.map((event) => { 
        const eventAtomConfig = atom({ 
          id: event.id,
          isAttending: event.isAttending 
        });
        return (
          <Card key={event.id} eventAtomConfig={eventAtomConfig}>
            <EventList event={event} />
            <Divider/>
            <Checkbox eventAtomConfig={eventAtomConfig}/>
          </Card>
        );
      })}
    </CardContainerStyled>
  );
};

export default CardContainer;