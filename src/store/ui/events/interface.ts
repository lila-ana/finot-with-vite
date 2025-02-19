import dayjs from "dayjs";

export interface EventFormValues {
  event_name: string;
  event_time: dayjs.Dayjs;
  location: string;
  description?: string;
  image?: {
    file: {
      originFileObj: File;
      name: string;
    };
  }[];
}

export interface BlogCardProps {
  description: string;
  capacity: string;
  event_type: string;
  event_name: string;
  organizer_name: string;
  contact_info: string;
  location: string;
  status: string;
}
