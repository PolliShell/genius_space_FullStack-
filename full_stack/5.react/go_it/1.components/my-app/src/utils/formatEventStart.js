import {format} from "date-fns";
import {ru} from "date-fns/locale"

export const formatEventStart=start=>{
    return format(Date.parse(start), 'dd MMMM yyyy, HH:mm')
}