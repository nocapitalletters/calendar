import EventViewModel from './event';

export const mapModels = (data, addRandomizedIsAttending) => {
  let eventViewModels = data.map((dataEvent) => {
    //
    // Adds randomized is attending boolean for demo purpose
    //
    const isAttendingRandomBool = addRandomizedIsAttending ? Math.random() < 0.5 : false;
    return new EventViewModel(dataEvent, isAttendingRandomBool);
  });
  //
  // Sort viewmodels by date
  //
  eventViewModels.sort((a, b) => {
    return a.fullStartDate - b.fullStartDate;
  });
  return eventViewModels;
};