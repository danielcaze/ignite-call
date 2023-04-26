import { CaretLeft, CaretRight } from "phosphor-react";
import {
  CalendarActions,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTable,
  CalendarTitle,
} from "./styles";
import { getWeekDays } from "@/utils";

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true });
  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          Dezembro <span>2022</span>
        </CalendarTitle>
        <CalendarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>
      <CalendarTable>
        <thead>
          <tr>
            {shortWeekDays.map((day) => (
              <th key={day}>{day}.</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <CalendarDay>1</CalendarDay>
            </td>
            <td>
              <CalendarDay>2</CalendarDay>
            </td>
            <td>
              <CalendarDay>3</CalendarDay>
            </td>
          </tr>
        </tbody>
      </CalendarTable>
    </CalendarContainer>
  );
}
