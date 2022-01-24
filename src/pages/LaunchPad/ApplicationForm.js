import { useEffect,useState,createRef } from "react"
import './css/Form.css';
import { Form, Input, Button, Checkbox } from 'antd';

const ApplicationForm = ()=> {

    const [progress, setProgress] = useState(0);
    const [field,setField] = useState(1);

    const nextProgress = (num)=>{

      setField(num)
      var current_fs, next_fs, previous_fs; //fieldsets
      var left, opacity, scale; //fieldset properties which we will animate
      var animating; //flag to prevent quick multi-click glitches
      
      console.log("click")
      current_fs = document.getElementById("fieldset"+num);
      next_fs = document.getElementById("fieldset"+(num+1));
      console.log(current_fs,next_fs)


      //activate next step on progressbar using the index of next_fs
      document.getElementById("step"+(num+1)).classList.add("active");
      
      //show the next fieldset
      next_fs.style.display = "block";
      current_fs.style.display="none";
      //hide the current fieldset with style
    }

    const previousProgress = (num) => {

      setField(num)



      var current_fs, last_fs, previous_fs; //fieldsets
      var left, opacity, scale; //fieldset properties which we will animate
      var animating; //flag to prevent quick multi-click glitches
      
      console.log("click for back")
      current_fs = document.getElementById("fieldset"+num);
      last_fs = document.getElementById("fieldset"+(num-1));


      //activate next step on progressbar using the index of next_fs
      document.getElementById("step"+(num)).classList.remove("active");
      
      //show the next fieldset
      last_fs.style.display = "block";
      current_fs.style.display="none";
      //hide the current fieldset with style
    }

    const changeProgress = (num) => {


      setField(num)


      var fs1, fs2, fs3; //fieldsets
      var left, opacity, scale; //fieldset properties which we will animate
      var animating; //flag to prevent quick multi-click glitches
      
      console.log("click for change")
      fs1 = document.getElementById("fieldset1");
      fs2 = document.getElementById("fieldset2");
      fs3 = document.getElementById("fieldset3");


      switch (num) {
        case 1:
          document.getElementById("step2").classList.remove("active");
          fs2.style.display="none";

          document.getElementById("step3").classList.remove("active");
          fs3.style.display="none";

          fs1.style.display="block";
          document.getElementById("step"+(num)).classList.add("active");

        break;
        
        case 2:
          document.getElementById("step3").classList.remove("active");
          fs3.style.display="none";

          fs1.style.display="none";
          fs2.style.display="block";
          document.getElementById("step"+(num)).classList.add("active");

        break;
        
        case 3:
          fs1.style.display="none";
          fs2.style.display="none";
          fs3.style.display="block";
          document.getElementById("step"+(num)).classList.add("active");

          document.getElementById("step2").classList.add("active");



          break;
        default:
          break;
      }


    }

// show a message with a type of the input
function showMessage(input, message, type) {

  console.log(input[0].parentNode)
	// get the small element and set the message
	const msg = input[0].parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
  
	if (input[0].value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input[0].value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("msform");

const PWD_REQUIRED = "Please enter your password"; //1.0
const NAME_REQUIRED = "Please enter your name";    //1.1
const EMAIL_REQUIRED = "Please enter your email"; //1.2
const EMAIL_INVALID = "Please enter a correct email address format"; //1.3

const WEB_REQUIRED = "Please enter your project website"; //1.4
const LOGO_REQUIRED = "Please enter your logo url";  //1.5
const DESCRIP_REQUIRED = "Please enter your project description"; //1.6
const CATEGORY_REQUIRED = "Please enter your project category"; //1.7
const PROJIN_REQUIRED = "Please enter where your project is built in"; //1.8

const URL_REQUIRED = "Please enter url"; //1.9-1.14

const SYMBOL_REQUIRED = "Please enter your Token Symbol"; //2.1
const ADD_REQUIRED = "Please enter your Token Contract Address"; //2.2
const SUPPLY_REQUIRED = "Please enter your Token Supply"; //2.3
const ECOLINK_REQUIRED = "Please enter your Token Econimics Link"; //2.4

const IDO_REQUIRED = "Please enter IDO Date"; //3.1
const START_REQUIRED = "Please enter Start Time"; //3.2
const ENDED_REQUIRED = "Please enter Ended Time"; //3.3

const VEST_REQUIRED = "Please fill in the blanks"; //3.4 ALL

const IDOPRICE_REQUIRED = "Please enter IDO Price"; //3.5
const RAISE_REQUIRED = "Please enter USD"; //3.6

//3.8 3.9 Autofill


    const submitForm = (event)=>{
      console.log(event);
      console.log("send!")
      var object = {};
      var f = document.getElementById("msform");
      f.forEach( (element,key) => {
        console.log("inde111",element,key)
        if(key != 0 && key != 16 && key != 23 && key != 15 && key != 21 && key != 22 && key!= 34 && key != 35){
          object[element.name] = element.value;
    
        }        
      });
      console.log(object);
      console.log(JSON.stringify(object))

    }
    useEffect(() => {

      

        //document.getElementById("next1").addEventListener("click",(event)=>{nextProgress(1)});
        
        document.getElementById("next1").addEventListener("click",function (event) {
          // stop form submission
          //event.preventDefault();
        
          // validate the form
          
          let nameValid = hasValue(document.getElementsByName("ContacterTg"), NAME_REQUIRED);
          let emailValid = validateEmail(document.getElementsByName("OfficialEmail"), EMAIL_REQUIRED, EMAIL_INVALID);
          
          
          // if valid, submit the form.
          if (nameValid && emailValid) {
            (event)=>{nextProgress(1)};
          }
        });

        document.getElementById("next2").addEventListener("click",(event)=>{nextProgress(2)});

        document.getElementById("previous1").addEventListener("click",()=>{previousProgress(2)});
        document.getElementById("previous2").addEventListener("click",()=>{previousProgress(3)});

        document.getElementById("step1").addEventListener("click",()=>{changeProgress(1)});
        document.getElementById("step2").addEventListener("click",()=>{changeProgress(2)});
        document.getElementById("step3").addEventListener("click",()=>{changeProgress(3)});

        document.getElementById("submit").addEventListener("click",(event)=>{
          submitForm(event)
        })
         


    }, [])

    useEffect(()=>{

    },[field])


    return(
<div className="Form">
        <div className="container">
            <form id="msform">
                <ul id="progressbar">
                  <li id="step1" class="active">Project</li>
                  <li id="step2">Token </li>
                  <li id="step3">IDO </li>
                </ul>
            <fieldset id="fieldset1">
              <h2 class="fs-title">Project Description</h2>
              {/* <h3 class="fs-subtitle">This is step 1</h3> */}
              <input type="text" name="PassWord" placeholder="1.0 Your Project Password(Please remember!!!)" />
              <small></small>
              <input type="text" name="ContacterTg" placeholder="1.1 Your Telegram Username" />
              <small></small>
              <input type="text" name="ProjectName" placeholder="1.2 ProjectName" />
              <small></small>
              <input type="email" name="OfficialEmail" placeholder="1.3 Official Email Address" />
              <small></small>
              <input type="url" name="Website" placeholder="1.4 Project Website" />
              <small></small>
              <input type="url" name="Logo" placeholder="1.5 Project Logo URL (SVG Prefferred)" />
              <small></small>
              <textarea name="Description" placeholder="1.6 ProjectDescription" />
              {/* <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select> */}
              <input type="text" name="Category" placeholder="1.7 Project Category" />

              <input type="text" name="ProjectIn" placeholder="1.8 Your Project Build In" />
              <input type="url" name="WhitePaper" placeholder="1.9 WhitePaper Link" />
              <input type="url" name = "Github" placeholder="1.10 Github Link" />
              <input type="url" name = "Telegram" placeholder="1.11 Telegram Community Link" />
              <input type="url" name = "Twitter" placeholder="1.12 Twitter Link" />
              <input type="url" name = "Linkedin" placeholder="1.13 Linkedin Link" />
              <input type="url" name = "Discord" placeholder="1.14 Discord Link" />

              <input id="next1" type="button" name="next" class="next action-button"  value="Next" />
            </fieldset>
            <fieldset id="fieldset2">
              <h2 class="fs-title">Token Description</h2>
              {/* <h3 class="fs-subtitle">Your presence on the social network</h3> */}
              <input type="text" name="Symbol" placeholder="2.1 Token Symbol" />
              <input type="text" name="Address" placeholder="2.2 Token Contract Address in Scan" />
              <input type="text" name="Supply" placeholder="2.3 Total Supply" />
              <input type="url" name="EcoLink" placeholder="2.4 Token Econimics Link"  />

              <input id="previous1" type="button" name="previous" class="previous action-button" value="Previous" />
              <input id="next2" type="button" name="next" class="next action-button" value="Next"   />
            </fieldset>
            <fieldset id="fieldset3">
              <h2 class="fs-title">IDO Description</h2>
              {/* <h3 class="fs-subtitle">We will never sell it</h3> */}
              <input type="text" name="IDODate" placeholder="3.1 IDO Date"  />
              <input type="text" name="Start" placeholder="3.2 Start Time" />
              <input type="text" name="Ended" placeholder="3.3 Ended Time" />
              
              <legeng>3.4 Vesting Rule: </legeng>
                <input type="text" name="VestingStart" className="fillBlank"  />% at TGE, then linear unclock during next 
                <input type="text" className="fillBlank" name="VestingMonth" /> month on 
                <input type = "text" name="VestingDay" className="fillBlank" /> (day)
              
              <input type="text" name="IDOPrice" placeholder="3.5 IDO Price" />
              <input type="text" name="Raise" placeholder="3.6 How much to raise?(USD)" />
              <input type="text" name="MarketCap" placeholder="3.7 Fully Diluted Market Cap(Auto Fill)" />
              <input type="text" name="Sale" placeholder="3.8 How many tokens for sale?(Auto Fill)" />


              <input id="previous2" type="button" name="previous" class="previous action-button" value="Previous" />
              <input id="submit" type="submit" name="submit" class="submit action-button" value="Submit" />
            </fieldset>
            </form>
        </div>
</div>
    )
}


export default ApplicationForm;


