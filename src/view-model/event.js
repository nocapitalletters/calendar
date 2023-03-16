import WEEKDAYS from "../constants/weekdays";
import MONTHS from "../constants/months";

class EventViewModel {
  
  isNullOrEmpty = (string) => string === null || string === undefined || string.trim() === "";

  generateId = () => (Math.random() + 1).toString(36).substring(2);
  
  formatDates = (startDateString, endDateString) => {
    //
    // Gets date as name of weekday
    //
    const getDateType = (date) => {
      if (date instanceof Date) {
        const day = date.getDay(); 
        switch (day) {
          case WEEKDAYS.SUNDAY.code:
            return WEEKDAYS.SUNDAY.caption;
          case WEEKDAYS.MONDAY.code:
            return WEEKDAYS.MONDAY.caption;
          case WEEKDAYS.TUESDAY.code:
            return WEEKDAYS.TUESDAY.caption;
          case WEEKDAYS.WEDNESDAY.code:
            return WEEKDAYS.WEDNESDAY.caption;
          case WEEKDAYS.THURSDAY.code:
            return WEEKDAYS.THURSDAY.caption;
          case WEEKDAYS.FRIDAY.code:
            return WEEKDAYS.FRIDAY.caption;
          case WEEKDAYS.SATURDAY.code:
            return WEEKDAYS.SATURDAY.caption;
          default:
            return '';
        }
      }
      return '';
    };
    //
    // Gets month as name of month
    //
    const getMonthType = (date) => {
      if (date instanceof Date) {
        const month = date.getMonth(); 
        switch (month) {
          case MONTHS.JANUARY.code:
            return MONTHS.JANUARY.caption;
          case MONTHS.FEBRUARY.code:
            return MONTHS.FEBRUARY.caption;
          case MONTHS.MARCH.code:
            return MONTHS.MARCH.caption;
          case MONTHS.APRIL.code:
            return MONTHS.APRIL.caption;
          case MONTHS.MAY.code:
            return MONTHS.MAY.caption;
          case MONTHS.JUNE.code:
            return MONTHS.JUNE.caption;
          case MONTHS.JULY.code:
            return MONTHS.JULY.caption;
          case MONTHS.AUGUST.code:
            return MONTHS.AUGUST.caption;
          case MONTHS.SEPTEMBER.code:
            return MONTHS.SEPTEMBER.caption;
          case MONTHS.OCTOBER.code:
            return MONTHS.OCTOBER.caption;
          case MONTHS.NOVEMBER.code:
            return MONTHS.NOVEMBER.caption;
          case MONTHS.DECEMBER.code:
            return MONTHS.DECEMBER.caption;
          default:
            return '';
        }
      }
      return '';
    }

    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);

    const dates = {
      fullStartDate: startDate,
      startYear: startDate.getFullYear(),
      startMonth: startDate.getMonth(),
      startMonthType: getMonthType(startDate),
      startDate: startDate.getDate(),
      startDateType: getDateType(startDate),
      startTime: startDate.getTime(),
      startTimeString: startDate.toLocaleTimeString('sv-SE'),
      endYear: endDate.getFullYear(),
      endMonth: endDate.getMonth(),
      endMonthType: getMonthType(endDate),                           
      endDate: endDate.getDate(),
      endDateType: getDateType(endDate),
      endTime: endDate.getTime(),
      endTimeString: endDate.toLocaleTimeString('sv-SE'),
      week: ''                                                      // TO DO: calculate week nummber
    };
    return dates;
  }

  constructor(dataEvent, isAttendingRandomBool) {
    this._id = this.isNullOrEmpty(dataEvent.id) ? this.generateId() : dataEvent.id;
    this._activity = dataEvent.text ?? 'Aktivitetsnamn saknas';       // When we switch to the proper API, use dataEvent.activity
    this._location = 'Plats: ' + (dataEvent.location ?? '[saknas]');
    let startDate = dataEvent.createdAt                               // When we switch to the proper API, use dataEvent.startDate
    let endDate = dataEvent.updatedAt                                 // When we switch to the proper API, use dataEvent.endDate
    this._dates = this.formatDates(startDate, endDate);
    this._isAttending = isAttendingRandomBool;
  }

  get id () {
    return this._id;
  }
  get activity () {
    return this._activity;
  }
  get location () {
    return this._location;
  }
  get fullStartDate () {
    return this._dates.fullStartDate;
  }
  get startYear () {
    return this._dates.startYear;
  }
  get startMonth () {
    return this._dates.startMonth;
  }
  get startMonthType () {
    return this._dates.startMonthType;
  }
  get startDate () {
    return this._dates.startDate;
  }
  get startDateType () {
    return this._dates.startDateType;
  }
  get startTime () {
    return this._dates.startTime;
  }
  get startTimeString () {
    return this._dates.startTimeString;
  }
  get endYear () {
    return this._dates.endYear;
  }
  get endMonth () {
    return this._dates.endMonth;
  }
  get endMonthType () {
    return this._dates.endMonthType;
  }
  get endDate () {
    return this._dates.endDate;
  }
  get endDateType () {
    return this._dates.endDateType;
  }
  get endTime () {
    return this._dates.endTime;
  }
  get endTimeString () {
    return this._dates.endTimeString;
  }
  get isAttending () {
    return this._isAttending;
  }
} 

export default EventViewModel