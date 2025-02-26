import DatePickerComponent from "components/dateAndTimePicker/DatePickerModalComponent";

import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";
import { ReactComponent as ClockIcon } from "assets/icons/clock-circle.svg";

const ShowDateDelivery = (props: any) => {
  return (
    <div className="fr-card-wrapper w-full p-3 ltr">
      <div className="flex flex-row ">
        <div className="w-8/12 flex flex-col">
          <div className="flex flex-row items-center my-1">
            <div className="mx-1">
              <CalendarIcon className="w-[22px] h-auto" />
            </div>
            <div className="text-sm">
              {props.deliveryDateAndTime?.slice(0, 10)}
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="mx-1">
              <ClockIcon className="w-[22px] h-auto" />
            </div>
            <div className="text-sm">
              {props.deliveryDateAndTime?.slice(11, 16)}
            </div>
          </div>
        </div>
        <div className="w-4/12 all-center">
          <DatePickerComponent
            deliveryDateAndTime={props.deliveryDateAndTime}
            setDeliveryDateAndTime={props.setDeliveryDateAndTime}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowDateDelivery;
