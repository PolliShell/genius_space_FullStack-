import PropTypes from "prop-types";
import css from "./Event.module.css"
import {FaCalendarAlt, FaClock, FaMapMarkedAlt, FaUserAlt} from "react-icons/fa";
import {formatEventStart,formatEventDuration} from "utils"
import {iconSize} from "../../constants";
import {Card, Chip, EventName, Info} from "./Event.styled";


export const Event=({name, location,speaker, type, start, end})=>{
    const formatStart=formatEventStart(start);
const duration=formatEventDuration(start,end);
    return (
<Card>
    <EventName>Name</EventName>
    <Info>
        <FaMapMarkedAlt className={css.icon} size={iconSize.sm}/>
        {location}
    </Info>
    <Info>
        <FaUserAlt className={css.icon} size={iconSize.sm}/>
        {speaker}
    </Info>
    <Info>
        <FaCalendarAlt className={css.icon} size={iconSize.sm}/>
        {formatStart}
    </Info>
    <Info>
      <FaClock className={css.icon} size={iconSize.sm}/>
        {duration}
    </Info>
    <Chip eventType={type}>{type}</Chip>
</Card>

)
};

Event.propTypes={name: PropTypes.string.isRequired,
location:PropTypes.string.isRequired,
speaker:PropTypes.string.isRequired,
type:PropTypes.string.isRequired,
start:PropTypes.string.isRequired,
end:PropTypes.string.isRequired};