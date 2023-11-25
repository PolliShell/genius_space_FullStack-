import {name} from "./module";
import './style.css';
import isEmail from "validator/lib/isEmail";
import isURL from "validator/lib/isURL";

console.log("Your name:" + name);

try {
    console.log(isEmail("foo@bar.com"));
    console.log(isURL("fgfgfg"));
} catch (error) {
    console.error(error);
}