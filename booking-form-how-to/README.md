# How to Create a Booking Form for Valentine's?

| Table of Contents |
| --- |
| [1. Create the Google Form](#1-create-the-google-form) |
| [2. Link a Google Sheet and Prepare It](#2-link-a-google-sheet-and-prepare-it) |
| [3. Create a Separate Google Sheet for the Members (for Respondent Privacy)](#3-optional-but-recommended-create-a-separate-google-sheet-for-the-members-for-respondent-privacy) |
| [4. Create and Set Up the Apps Script for the Google Sheets](#4-create-and-set-up-the-apps-script-for-the-google-sheets) |
| [5. Notes about the booking form](#5-notes-about-the-booking-form) |

## **1. Create the Google Form**
Throughout this guide please use the University email address (if NU still uses Gmail, if not you probably wan't to make a choir gmail account for the club).
<br>
<input type="checkbox"> 1. Go to [Google Forms](https://docs.google.com/forms/) and search for
<br>
[`Singing Valentines by NU Choir Template`](https://docs.google.com/forms/d/1Yh6G0IX_rCGyJW4jlSNuaHqBYvW5b-uCTRJRw7KF1Us/edit)
<br>
<br>
<input type="checkbox"> 2. Open it and click `Make a copy`:
<br>

![make a copy button](../assets/step_1_2.jpg "Make a copy button")
<br>
<br>
<input type="checkbox"> In the window that opens after clicking it rename it to "Singing Valentines by NU Choir `current year`" and click `Make a copy`.
<br>

![make a copy button](../assets/step_1_2_2.jpg "Make a copy button")
<br>
<br>
<input type="checkbox"> 3. In the new form go to the second question that reads `Photo of the recipient` and change it to `File upload`, then click `Continue`.
<br>

![change photo of the recipient question](../assets/step_1_3.jpg "Change photo of the recipient question")
<br>
<br>
<input type="checkbox"> 4. Check the `Allow only specific file types` checkmark and choose `Image`.
<br>

![allow only image file types](../assets/step_1_4.jpg "Allow only image file types")
<br>
<br>
<input type="checkbox"> 5. Fill the description of the form with the songs on the roster this year and input the deadline to submit the form (doesn't have to be February 12th 23:59, choose whatever works for you), but KEEP the emojis next to the group names (The 🌟 💝 🌸 and 💘. If there are *somehow* more than four groups pick a new emoji that is distinct from these and has a positive vibe to it) so that it is easier for users later in the form!
<br>

![change form description](../assets/step_1_5.jpg "Change form description")
<br>
<br>
<input type="checkbox"> Find the song questions that are towards the end of the form and input the songs here as well. If there are less than four groups just copy the `break up song ❌:` text from the last group song question and delete the last group song question itself. If there are *somehow* more than four groups just add another question matching the style of the previous ones and add the `break up song ❌:` to it (so that stylistically that's the last song of the last group xD).
<br>

![change song questions](../assets/step_1_5_2.jpg "Change song questions")
<br>
<br>
Don't worry about the `the time and group` question for now. You can change the wording and style of anything on the form. If you want to change the order of the questions, you should **only** do that after linking a Google Sheet to the form!
<br>
<br>
<input type="checkbox"> 6. Go to the `Settings`, click on the `Presentation`, click `Edit` on the `Confirmation message`, add the donation info (if you are doing that this year. if not delete the last line on every language) at the very bottom (or after each language, if you want) and save it.
<br>

![change confirmation message](../assets/step_1_6.jpg "Change confirmation message")
<br>
<br>
<input type="checkbox"> 7. Click `Publish`, click `Manage`, click `Nazarbayev University` on the `Editing view`, and click `Restricted`.
<br>

![publish](../assets/step_1_7.jpg "Publish")

![publish](../assets/step_1_7_2.jpg "Publish")
<br>
<br>
<input type="checkbox"> Decide whether you want to make it available to everybody, or only people with the Nazarbayev University email (you may change that later too, just in case you want to open it for NU only for the first couple hours, and then to everyone). Then press `Done` and `Publish`.
<br>

![publish](../assets/step_1_7_3.jpg "Publish")
<br>
<br>
<input type="checkbox"> 8. Click `Published`, switch the `Accepting responses` switcher, and click `Edit`.
<br>

![not accepting responses message](../assets/step_1_8.jpg "Not accepting responses message")
<br>
<br>
<input type="checkbox"> Edit the message in the following box (copy and paste in the songs from the form description, edit the time that you plan to open the form, and edit the "time available" in case you are taking lunch breaks as a whole and not in small sub-groups), copy and paste it (to not drag the whole thing, you could just click inside the box, `Ctrl + A`, `Ctrl + C`) to the box in the `Responders will see this message` box, and save it (just in case, copy and paste it to your saved messages in Telegram too, it's kind of a pain to rewrite, and some of the stuff later could overwrite this message).
<br>
<textarea cols="143" rows="33" style="resize:none;">Registration is not open yet. It will start on 10/02/YEAR at 12:00
but you may already start planning your 💌Singing Valentine💌!
Prepare the photo of your recipient (to find the person),
think about the time (from 9:00 until 17:00),
think about the university location (NO other blocks, such as dormitory, NUSOM, etc!),
and choose ONE of the following songs:

Тіркеу әлі басталған жоқ. Тіркеу 10/02/YEAR күні 12:00-де басталады
бірақ сіз 💌Музыкалық Ғашықхатыңызды💌 қазірден бастап жоспарлай аласыз!
Қабылдаушынын фотосын дайындаңыз (адамды табу үшін),
уақытын таңдаңыз (9:00-ден 17:00-ге дейін),
университеттегі локацияны таңдаңыз (жатақхана, НУСОМ немесе басқа блоктарға ЖЕТКІЗІЛМЕЙДІ!),
және келесі әндердің БІРЕУІН таңдаңыз:

Регистрация еще не началась. Она начнётся 10/02/YEAR в 12:00
Но вы можете запланировать вашу 💌Поющую Валентинку💌 прямо сейчас!
Подготовьте фотографию получателя (чтобы найти человека),
выберите время (с 9:00 до 17:00),
выберите локацию в университете (НЕ доставляем валентинки в общежитие, блоки НУСОМ и тд!),
и выберите ОДНУ из следующих песен:

Group 1 🌟
♥️   Song - Artist

Group 2 💝
♥️   Song - Artist

Group 3 🌸
♥️   Song - Artist

Group 4 💘
♥️   Song - Artist
♥️   or a break up song ❌:  Song - Artist</textarea>

![not accepting responses message](../assets/step_1_8_2.jpg "Not accepting responses message")

Phew! That's most of what was needed in the form. The rest should be faster xD

## **2. Link a Google Sheet and Prepare It**
<input type="checkbox"> 1. Go to the responses tab, click on `Link to Sheets`, keep the selection of `Create a new spreadsheet`, and click `Create`.
<br>

![link a google sheet](../assets/step_2_1.jpg "Link a Google Sheet")

![link a google sheet](../assets/step_2_1_2.jpg "Link a Google Sheet")
<br>
<br>
<input type="checkbox"> 2. Select the last two columns with `Location` and `Contact info` and drag it left of the `Group songs` columns (not required, just for the location to be right next to the time. but keep in mind that if you want to make your own column order here, you have to change the formulas in the later part of this "chapter").
<br>

![link a google sheet](../assets/step_2_2.gif "Link a Google Sheet")
<br>
<br>
<input type="checkbox"> 3. Click on the **`+`** to create new sheets for the number of groups you have +1. Name them `Group #` for each group you have and name the last sheet `For code`.
<br>

![create new sheets](../assets/step_2_3.gif "Create new sheets")
<br>
<br>
<input type="checkbox"> 4. Copy everything from the box below (again, to not miss some part of the formula, you could just click inside the box, `Ctrl + A`, `Ctrl + C`) and paste it to the first cell of every of the `Group #` sheets.
<br>
<textarea cols="143" rows="2" style="resize:none;">Receiver	Photo	Sender	Message	Time	Location	Contacts	Song
=SORT(IFERROR(FILTER(CHOOSECOLS('Form Responses 1'!C$2:M,1,2,3,4,5,6,7,8), REGEXMATCH('Form Responses 1'!$G$2:$G,".*Group 1.*") =TRUE)),6,True)</textarea>

![style the headers](../assets/step_2_4.gif "Style the headers")
<br>
<br>
<input type="checkbox"> Modify the formula in A2 on `Group 2` until the last Group you have (if you *somehow* have more than four groups modify the `M` in `'Form Responses 1'!C$2:M` to whatever the very last column letters are in the `Form Responses 1` sheet):
<br>
(1) `1,2,3,4,5,6,7,8` -> `1,2,3,4,5,6,7,9`. Change the last number in this list to one more with each sheet. So it is `9` for `Group 2`, `10` for `Group 3`, and etc.
<br>
(2) `".*Group 1.*"` -> `".*Group 2.*"`. Change the number the group number of the sheet you are modifying.
<br>

![change the formulas](../assets/step_2_4_2.gif "Change the formulas")
<br>
<br>
Note: if you are reordering the columns for your convenience (but still keeping the "Group song" questions last), you may adapt all the formulas to your self by changing both `G`-s in `'Form Responses 1'!$G$2:$G` to the letter of the "Time and Group" column as it is in `Forms Responses 1`, and changing the `6` in `=TRUE)),6,True)` to the numbered order of that same "Time and Group" column (if you are counting on `Forms Responses 1`, subtract 2 from the number you get).
<br>
<br>
<input type="checkbox"> 5. Copy everything from the box below (again, to not miss some part of the formula, you could just click inside the box, `Ctrl + A`, `Ctrl + C`) and paste it to the first cell of the `For code` sheet.
<br>
<textarea cols="143" rows="2" style="resize:none;">All slots	Occupied slots	Unique occupied slots		Total	Unique
	=IFERROR(FILTER('Form Responses 1'!G$2:G, REGEXMATCH('Form Responses 1'!$G$2:$G,".*Group.*") =TRUE))	=UNIQUE('Form Responses 1'!G2:G)		=COUNTA(B2:B)	=COUNTA(C2:C)
				=IF(E2=F2,"No duplicates","Duplicates! Find 'em!")	</textarea>

<input type="checkbox"> Choose the `E2` cell, go to `Format` -> `Conditional formatting`. Set it to turn green when `Text is exactly` is `No duplicates`, and to turn red when `Text is exactly` is `Duplicates!`.
<br>

![set up conditional formatting on for code sheet](../assets/step_2_5.gif "Set up conditional formatting on for code sheet")
<br>
<br>
<input type="checkbox"> Choose the `B` column, go to `Format` -> `Conditional formatting`. Set the range to `B:B`, and set it to turn red when `Custom formula is` is `=countif(B:B,B1)>1`.
<br>
<br>
<input type="checkbox"> Choose the `E2` cell, go to `Tools` -> `Conditional notifications`, click on `Add rule`, change `In this column` to `Custom range`, click `Add condition`, set it to `Text is exactly` is `Duplicates!`, input the `choir@nu.edu.kz` email in the box at the bottom, and click on `Save`.
<br>

![set up conditional notifications on for code sheet](../assets/step_2_5_2.gif "Set up conditional notifications on for code sheet")
<br>
<br>
Quick manual check if the conditions work:
<br>

![check conditions in code sheet](../assets/step_2_5_3.gif "Check conditions in code sheet")
<br>
<br>
If there is EVER two or more people who book the exact same slot in a window of a couple seconds or so, there WILL be a duplicate. If that happens, you will get an email about it (within 30 minutes allegedly, from my testing it's somewhat unreliable, so check the `For code` sheet regularly until all the time slots are gone), or you can see it colored in red immediately on the `For code` sheet of this Google Sheet (you can scroll through the time slots and see which time slot is problematic, and notify the person who was slightly later that their order is canceled ASAP, or maybe perform for them all by cascading the time slightly for both xD however you decide to handle it).
<br>
<br>
<input type="checkbox"> 6. Generate the time slots for the groups. Below are the values you can change, the start time, end time, the interval between performances, and the comma separated list of the groups' distinct individual emojis (that's how the algorithm gets the number of groups too).
<br>
<br>
<label><input type="number" id="start_h" min="0" max="23" value="9"><-Start Hour</label>
<br>
<label><input type="number" id="start_m" min="0" max="59" value="0"><-Start Minute. Better keep this at 00 minutes</label>
<br>
<label><input type="number" id="end_h" min="0" max="23" value="17"><-End Hour</label>
<br>
<label><input type="number" id="end_m" min="0" max="59" value="0"><-End Minute</label>
<br>
<label><input type="number" id="interval" min="1" value="15"><-Interval (minutes). Potentially could be 10min (6 per hour), 12min (5 per hour), 15min (4 per hour)</label>
<br>
<label><input type="text" id="groups" value="🌟,💝,🌸,💘"><-Groups (comma-separated emojis)</label>
<br>
<button onclick="generateSlots()">Generate Schedule</button>
<br>
<textarea id="output" cols="143" rows="10" style="resize:none;"></textarea>

There are <span id="total">0</span>(minus the number of time slots you delete) time slots total! This is important for later.
<br>
<br>
<input type="checkbox"> Delete all the time slots you don't want (e.g. not enough performers, no guitarists, lunch break for the whole group etc.). Copy everything from the box above (again, to not miss some part of the formula, you could just click inside the box, `Ctrl + A`, `Ctrl + C`) and paste it to `A2` cell of the `For code` sheet.
<br>
<br>
<input type="checkbox"> Go to the form in the "Time and Group" question, click on the only option in that question so that it is all "blue" from being selected and paste the just copied time slots from the box above again.
<br>

![copy the time slots to the form](../assets/step_2_6.gif "Copy the time slots to the form")

## **3. _(optional, but very recommended)_ Create a Separate Google Sheet for the Members (for Respondent Privacy)**
So that non-LT members don't get access to people's real email addresses (other than the contact info users wrote, unless you want to keep that info LT-only as well).
<br>
<input type="checkbox"> 1. Click on the `Generate Cipher` below.
<br>
<button onclick="generateCipher()">Generate Cipher</button>
<br>
<textarea id="cipher" cols="143" rows="1" style="resize:none;"></textarea>

<input type="checkbox"> Copy the cipher above and change the name of the `Form Responses 1`. Change both references in each `Group #` sheet formula from `Form Responses 1` to that cipher. Change all the `Form Responses 1` references in both formulas in `For code` sheet to that cipher.
<br>
<br>
<input type="checkbox"> 2. Click on the `Share` button, make all the `General access` into `Restricted`.
<br>
<br>
<input type="checkbox"> 3. Create a new Google Sheet, name it `Singing Valentines Schedule YEAR`, add sheets to it until you have a sheet for each group, rename them to `Group #`.
<br>
<br>
<input type="checkbox"> 4. Copy the link of the original Google Sheet (only up to `/edit`). Paste it instead of `spreadsheet_url` in the box below, keep the `""`.
<br>
<textarea cols="143" rows="1" style="resize:none;">=IMPORTRANGE("spreadsheet_url", "Group 1!A1:H")</textarea>

<input type="checkbox"> Copy everything from the box above (again, to not miss some part of the formula, you could just click inside the box, `Ctrl + A`, `Ctrl + C`) and paste it to the first cell of each `Group #` of the new sheet, while changing the `"Group 1!A1:H"` to the appropriate group number. You have to `Allow access` for the first time, for the Google Sheet to be able to get info from the original Google Sheet.
<br>
<br>
<input type="checkbox"> 5. Choose the `Receiver`, `Sender`, `Message`, `Location`, `Contacts` columns, and set `Text wrapping` to `Wrap`. You could also choose the `Time` column right click it, click `Resize`, and set it to 40 (this would only show the time itself, more convenient).
<br>

![stylize the new google sheet](../assets/step_3_5.jpg "Stylize the new Google Sheet")
<br>
<br>
<input type="checkbox"> 6. Click `Share`, let `Nazarbayev University` emails to `Edit` the new Google Sheet. So that members could color finished orders, add more details to the right of the table etc.

## **4. Create and Set Up the Apps Script for the Google Sheets**
<input type="checkbox"> 1. Link an Apps Script to the **Google Sheets** (not Google Forms), name it `Singing Valentines by NU Choir YEAR (Code)`.
<br>

![link the apps script](../assets/step_4_1.jpg "Link the Apps Script")
<br>
<br>
2. Change the following in the box below.
<br>
<input type="checkbox"> Replace the `F_ID` with the ID of the Google Form from the address bar between `/d/` and `/edit`.
<br>

![get the form id](../assets/step_4_2.jpg "Get the Form ID")
<br>
<br>
<input type="checkbox"> Replace the `S_ID` with the ID of the Google Sheet connected to the form from the address bar between `/d/` and `/edit`.
<br>

![get the sheet id](../assets/step_4_2_2.jpg "Get the Sheet ID")
<br>
<br>
<input type="checkbox"> From the step 2.6 we may get the total number of time slots (don't forget to subtract the number of deleted time slots). You may change the second number of `ALL_DATA_RANGE`, `OCCUPIED_DATA_RANGE` to the total time slots +10. It could potentially help with speed, might not, don't really know. Just make sure that the second number is not below the number of total slots (e.g. if you have 360 time slots total, you would need `ALL_DATA_RANGE = "A2:A361"` and `OCCUPIED_DATA_RANGE = "B2:B361"` at minimum).
<br>
<input type="checkbox"> You may change the content of `FORM_CLOSE_MESSAGE` to change the location and time of the concert that is promoted, or to delete that line if you are not doing a concert this year.
<textarea cols="143" rows="6" style="resize:none;">/*#### Singing Valentines Booking Form ####
*
* Used on a multiple choice item in Google Forms, this can update the available slots
* after each booking.
*
* Requires: A Google Sheet created through a Google Form.
*
*/

//#### GLOBALS ####
var FORM_ID = "F_ID";//Add your Form ID (from the address bar)
var SS_ID = "S_ID"; //Add your Spreadsheet ID (from the address bar)
var SHEET_NAME = "For code"; //Add your Sheet tab name

// Find the multiple choice question with the groups and times
//         The ID will probably be displayed as something like "1.105161295E9"
// it does not matter if it is as that, or a plain number like "1105161295"
var SESSION_ITEM_ID = 1; //Use findItemId function in Get_session_item_id.gs

// set the "A2:A###" number as the number of total slots+1 (NUMBER_OF_SLOTS_PER_GROUP*NUMBER_OF_GROUPS)
var ALL_DATA_RANGE = "A2:A300"; //Add the range of booking items your selected sheet tab
var OCCUPIED_DATA_RANGE = "B2:B300"; //Add the range of booking items your selected sheet tab


// The message the form displays when the form is automatically closed
// Could be used to promote the Valentines concert or social media
var FORM_CLOSE_MESSAGE = `Registration is now closed.
Thank you for your interest in Singing Valentines!
But you can still listen to all of the Singing Valentines and more on the concert February 14th in the Daily Cup area!

Тіркеу аяқталды.
Музыкалық Ғашықхаттаррға көңіл бөлгеніңізге рақмет!
Бірақ сіз Музыкалық Ғашықхаттарды түгелдей 14 Ақпан күні 19:00де Daily Cup маңайында тыңдай аласыз!

Регистрация окончена.
Спасибо за ваш интерес в Поющих Валентинках!
Но вы всё еще можете послушать все Поющие Валентинки и больше на концерте 14ого Февраля в 19:00 в районе Daily Cup!`;

/* ###################################################################
* Seat booking function
*
* Requires: Set trigger Edit>Current project's triggers > select onSubmit
*
* After the form is submitted, it checks the information from the
* slots and then updates the form with the remaining slots.
* If a slot is chosen, that slot is removed.
* If all slots are taken for all groups, the form is closed.
*/

function onFormSubmit() {
  var allSlots = SpreadsheetApp
                        .openById(SS_ID)
                        .getSheetByName(SHEET_NAME)
                        .getRange(ALL_DATA_RANGE)
                        .getValues();
  allSlots = Object.keys(allSlots[0]).map(function (c) { return allSlots.map(function (r) { return r[c]; }).filter(function(i){ return i != ""; }); })[0];
  var occSlots = SpreadsheetApp
                        .openById(SS_ID)
                        .getSheetByName(SHEET_NAME)
                        .getRange(OCCUPIED_DATA_RANGE)
                        .getValues();
  occSlots = Object.keys(occSlots[0]).map(function (c) { return occSlots.map(function (r) { return r[c]; }).filter(function(i){ return i != ""; }); })[0];
 
  var form = FormApp.openById(FORM_ID);
  var session_id = form.getItemById(SESSION_ITEM_ID).asMultipleChoiceItem();
  
  //Filter item data by availability
  var remainingSlots = allSlots.filter(function(item){
    return occSlots.indexOf(item) == -1;
  });
  
  if(remainingSlots.length == 0){
    // Close the form.
    form.setAcceptingResponses(false);
    form.setCustomClosedFormMessage(FORM_CLOSE_MESSAGE);
    
  }else{
    session_id.setChoices(remainingSlots.map(function (c) {return session_id.createChoice(c)}));
  }
};

/* ###################################################################
* Form opening function
*
* Requires: Set trigger Edit>Current project's triggers > select time-driven > specific date and time
*
* At the specified time it opens the form
*/
function openFormAtTime() {
  var form = FormApp.openById(FORM_ID);
  form.setAcceptingResponses(true);
}
function closeFormAtTime() {
  var form = FormApp.openById(FORM_ID);
  form.setAcceptingResponses(false);
  form.setCustomClosedFormMessage(FORM_CLOSE_MESSAGE);
}</textarea>

<input type="checkbox"> Copy the box above (Click, `Ctrl + A`, `Ctrl + C`), paste and replace the contents of `Code.gs`, save the file by pressing `Ctrl + S`.
<br>
<input type="checkbox"> Copy the box below (Click, `Ctrl + A`, `Ctrl + C`), click on the **`+`** in the upper left part of the page, choose `Script`, name the file `Get_session_item_id.gs`, paste and replace the contents of the new file, save the file by pressing `Ctrl + S`, click on the `Run` button at the top, click `Review permissions`, and allow the code all permissions that it is asking for (in case you are worried, the code is literally yours no one would take advantage of the permissions xD).
<textarea cols="143" rows="6" style="resize:none;">/* ###################################################################
* Helper function used to find the Item ID that you wish to apply
* the seat booking code to.
* It logs the item ID and it's title.
*
* NOTE!!! Make sure you update FORM_ID in your Code.gs page.
*/
 
function findItemID(){
  var form = FormApp.openById(FORM_ID);
  var items = form.getItems()
  
  var item_list = items.map(function(item){
    Logger.log(item.getTitle());
    Logger.log(item.getId());
  });
};</textarea>

![create Get_session_item_id.gs](../assets/step_4_2_3.gif "Create Get_session_item_id.gs")
<br>
<br>
<input type="checkbox"> Scroll through the `Execution logs` and find the "Time and Group" question and copy the number right under that question in the `Execution logs`. Go to `Code.gs` and replace the `1` in SESSION_ITEM_ID with the copied number, then replace the scientific notation with a regular number (e.g. 2.051039813E9 -> delete the "." and "E9" -> 2051039813. However be careful that there may be 0-s at the end of the number so it could look like: 2.51E3 -> 2510, so check if the amount of numbers after "." matches the number after "E"!), save the file with `Ctrl + S`.
<br>

![set the item id](../assets/step_4_2_4.gif "Set the Item ID")
<br>
<br>
<input type="checkbox"> 3. On the left side of the page go to the `Triggers` tab (4th from the top), click on `+ Add Trigger` in the bottom right side of the page. Choose `Choose which function to run`: `onFormSubmit`, choose `Select event source`: `From spreadsheet`, choose `Select event type`: `On form submit`, choose `Failure notification settings`: `Notify me immediately` (so that you are notified of the errors by email, if they ever arise), and click on `Save`. Click on `+ Add Trigger`, choose the same options except for `Select event type`: `On edit`, and save the trigger (this is for when you delete cancelled orders from the spreadsheet).
<br>

![set up onformsubmit triggers](../assets/step_4_3.gif "set up onFormSubmit triggers")
<br>
<br>
<input type="checkbox"> Click on `+ Add Trigger`, choose `Choose which function to run`: `openFormAtTime`, choose `Select event source`: `Time-driven`, choose `Select type of time based trigger`: `Specific date and time`, make sure that the time zone in the lower box is correct (if it isn't you could either just account for the difference in time, or change the time zone in the `Project Settings` to your needed time zone) then set the time when the form is supposed to open (*you could also use this opportunity to double-check if the trigger works, set it to a couple minutes from now and see if the form opens or not*), and click on `Save`. Click on `+ Add Trigger`, choose the same options except for `Choose which function to run`: `closeFormAtTime`, then set the time when the form is supposed to close and save the trigger (this is for when the time slots don't run out until the deadline. it *never* happens but better be safe, than having to go and manually close it).
<br>

![set up time driven triggers](../assets/step_4_3_2.gif "Set up time driven triggers")
<br>
<br>
Congratulations! This is everything you need for the booking form to work. You could additionally check out how it works ahead of time (e.g. try to do a regular booking; try to double book by choosing the time slot option on two accounts simultaneously and then either having a small delay between them, or sending both forms almost simultaneously), if you decide to do testing don't forget to delete all the rows of the testing data in `'Forms Response 1'`.
<br>
<input type="checkbox" style="width:30px;height:30px;"> After you are done you can go to the Google Form, click on `Published`, make sure that accepting responses is OFF, make sure that the message on the screen is correct (it may look weird in the window, but if the version you copy pasted is normal, then it will turn out okay when you see it on the "closed form page" itself), verify that you chose who you wanted to choose in the `Responders` section (NU/Everyone with the link), copy the `Responder's link` (USE THIS LINK, not the link in the address bar, they lead to different pages), and save!

## **5. Notes About the Booking Form and the Valentine's in General**
- DO NOT change anything other than the `'Forms Response 1'` if you want to edit details (but if you want to delete available time slots you may delete from the first column in `'For code'`). You could delete rows from it (and the form replenishes the time slots automatically), edit contact info, location, name and anything else (other than the "Time and Group" question cells, do not edit those! if you want to make changes to the time just write the notes in the 9th column of the `'Group #'` sheets for choir members) upon a request from the users.
- Monitor the google forms once a couple hours after the beginning of booking just in case there are duplicates, check the `'For code'` sheet for that.
- Occasionnaly check the `'Group #'` sheets too, people could have not selected a song from the group whose slot they selected. Just email the respondent and copy and paste what they chose on the `'Forms Response 1'` sheet.
- After the form close deadline, or whenever all the slots are booked and you have time, contact the people through the contact information to confirm the order (either the choir members who are in charge of those particular valentine deliveries (at those specific times), or 1 LT per group, or something else, your decision). This way users have a quick and reliable way to contact us, and we know if an order is canceled ahead of time (so that someone can rebook it, or so that choir members can relax in those time slots).
- During the Valentine's Day, there should be at least one person per group in each time slot that is marking delivered valentines by painting them on their spreadsheets, letting joining group members know the group's location and direction so that they can find each other.
- Try to give each group a distinct style so that members can see each other from a km away xD. Also gives listeners joy! You could think of all kinds of gimmicks.

<script>
    function generateSlots() {
        let start_h = parseInt(document.getElementById("start_h").value);
        let start_m = parseInt(document.getElementById("start_m").value);
        let end_h = parseInt(document.getElementById("end_h").value);
        let end_m = parseInt(document.getElementById("end_m").value);
        let interval = parseInt(document.getElementById("interval").value);
        let groups = document.getElementById("groups").value.split(",");
        
        let res = "";
        let h = start_h;
        let m = start_m;
        let i = 0;
        
        while (h < end_h || (h === end_h && m < end_m)) {
            for (let g = 0; g < groups.length; g++) {
                res += `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')} | Group ${g + 1} ${groups[g].trim()}\n`;
                i += 1;
            }
            h = h + Math.floor((m + interval) / 60);
            m = (m + interval) % 60;
        }
        
        document.getElementById("output").innerHTML = res.slice(0, -1);
        document.getElementById("total").innerHTML = i;
    }
    function generateCipher() {
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let cipher = "";
        for (let i = 0; i < 12; i++) {
            cipher += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        document.getElementById("cipher").innerHTML = cipher;
    }
</script>