import moment from "moment";

export function relativeDateFromatter(date: string) {
  return moment(date).fromNow();
}
