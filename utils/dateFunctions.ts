import moment from "moment";

enum TimeFormat {
  HHMMSSSSS = "HH:mm:ss.SSS",
}

export const formatTimeToSeconds = ({ value }: { value: string }) => {
  return moment(value, "HH:mm:ss").format(TimeFormat.HHMMSSSSS);
};
