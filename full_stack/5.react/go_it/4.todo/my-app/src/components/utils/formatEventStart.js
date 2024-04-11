import {format} from "date-fns";

export const formatEventStart=()=>{

    return format(Date.now(), 'dd MMMM yyyy, HH:mm')
}