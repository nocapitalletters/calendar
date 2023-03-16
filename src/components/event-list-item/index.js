import EventListItemStyled from "./style";

const EventListItem = ({ text, isLarge }) => {
  return (
    <EventListItemStyled isLarge={isLarge}>
      {text}
    </EventListItemStyled>
  );
};

export default EventListItem;