import Divider from "../divider";
import EventListStyled from "./style";
import EventListItem from "../event-list-item";

const EventList = ({ event }) => {
  return (
    <EventListStyled>
      <EventListItem text={event.activity} isLarge />
      <Divider />
      <EventListItem text={event.location} isLarge />
      <Divider />
      <EventListItem text={`${event.startDateType} kl ${event.startTimeString}`} />
      <EventListItem text={`${event.startDate} ${event.startMonthType} ${event.startYear}`} />
      <Divider />
      <p>Pågår t.o.m.</p>
      <EventListItem text={`${event.endDateType} kl ${event.endTimeString}`} />
      <EventListItem text={`${event.endDate} ${event.endMonthType} ${event.endYear}`} />
    </EventListStyled>
  );
};

export default EventList;