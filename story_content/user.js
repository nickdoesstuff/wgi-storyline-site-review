function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6k1eox56lOW":
        Script1();
        break;
      case "5Zp3sjansvP":
        Script2();
        break;
      case "6UI9m0XyISE":
        Script3();
        break;
      case "5bO3JBIiK1v":
        Script4();
        break;
      case "6PTKJxAZcUN":
        Script5();
        break;
      case "6IWAnRZSBOD":
        Script6();
        break;
      case "6LixcWkTZCO":
        Script7();
        break;
      case "64NIhzvg5yT":
        Script8();
        break;
      case "5XUiHv0brIl":
        Script9();
        break;
      case "5eOes7WGDlh":
        Script10();
        break;
      case "5hsWCjcPrZf":
        Script11();
        break;
      case "6XLfQvnORML":
        Script12();
        break;
      case "6hmSZ2jB8ix":
        Script13();
        break;
      case "5yEVyK4iLqK":
        Script14();
        break;
      case "6dnoZmSNa55":
        Script15();
        break;
      case "6MSPHe80Mos":
        Script16();
        break;
      case "62s3F6svUHX":
        Script17();
        break;
      case "6cgw2VQfKhd":
        Script18();
        break;
      case "6SleB8zcrvy":
        Script19();
        break;
      case "5ZmtHlsmuwV":
        Script20();
        break;
      case "6CY4lbQ1IfA":
        Script21();
        break;
      case "6KSG03jBqBp":
        Script22();
        break;
      case "5gJk7LJNzPC":
        Script23();
        break;
      case "5uP6wmirQBj":
        Script24();
        break;
      case "5Y2gEs0Fyt6":
        Script25();
        break;
      case "6fMeW7tzizf":
        Script26();
        break;
      case "5YjTgQna6nf":
        Script27();
        break;
      case "5u2JIAJ121X":
        Script28();
        break;
      case "6YxwOq1Vxug":
        Script29();
        break;
      case "5aQRphL4fPF":
        Script30();
        break;
      case "6ltVTohI5rO":
        Script31();
        break;
      case "5qsBD1VgKqn":
        Script32();
        break;
      case "6cC3mOb2SIz":
        Script33();
        break;
      case "67n8p5Z8xvX":
        Script34();
        break;
      case "5v2WiXxwWm1":
        Script35();
        break;
      case "6ZliZ7LFalm":
        Script36();
        break;
      case "6KTxU1G20OJ":
        Script37();
        break;
      case "6etq9eqUiEg":
        Script38();
        break;
      case "6fZqS0tlxqb":
        Script39();
        break;
  }
}

function Script1()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script2()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script3()
{
  ///////////////////////////////////////////////////////////////////////////
//THIS SECTION GETS VARIABLES FROM STORYLINE YOU CAN USE IN YOUR CODE
///////////////////////////////////////////////////////////////////////////
var player = GetPlayer();
var Course_Title = player.GetVar("Course_Title");
var Course_URL = player.GetVar("Course_URL");



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE SUBJECT
///////////////////////////////////////////////////////////////////////////
emailSub = "Check out the " + Course_Title + " resource!";



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE BODY
//The body is built by adding many strings together, for ease of editing
///////////////////////////////////////////////////////////////////////////

emailBody = "There's some really handy information in the " + Course_Title + " resource.";

//2 new lines
emailBody += "%0d%0a";
emailBody += "%0d%0a";

emailBody += "Here's the link:"

//1 new line
emailBody += "%0d%0a";

//the course url from the variable
emailBody += Course_URL

//2 new lines - leaves space for email signature
emailBody += "%0d%0a";
emailBody += "%0d%0a";


location.href = "mailto:?subject=" + emailSub + "&body=" + emailBody;
}

function Script4()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script5()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script6()
{
  ///////////////////////////////////////////////////////////////////////////
//THIS SECTION GETS VARIABLES FROM STORYLINE YOU CAN USE IN YOUR CODE
///////////////////////////////////////////////////////////////////////////
var player = GetPlayer();
var Course_Title = player.GetVar("Course_Title");
var Course_URL = player.GetVar("Course_URL");



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE SUBJECT
///////////////////////////////////////////////////////////////////////////
emailSub = "Check out the " + Course_Title + " resource!";



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE BODY
//The body is built by adding many strings together, for ease of editing
///////////////////////////////////////////////////////////////////////////

emailBody = "There's some really handy information in the " + Course_Title + " resource.";

//2 new lines
emailBody += "%0d%0a";
emailBody += "%0d%0a";

emailBody += "Here's the link:"

//1 new line
emailBody += "%0d%0a";

//the course url from the variable
emailBody += Course_URL

//2 new lines - leaves space for email signature
emailBody += "%0d%0a";
emailBody += "%0d%0a";


location.href = "mailto:?subject=" + emailSub + "&body=" + emailBody;
}

function Script7()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script8()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script9()
{
  ///////////////////////////////////////////////////////////////////////////
//THIS SECTION GETS VARIABLES FROM STORYLINE YOU CAN USE IN YOUR CODE
///////////////////////////////////////////////////////////////////////////
var player = GetPlayer();
var Course_Title = player.GetVar("Course_Title");
var Course_URL = player.GetVar("Course_URL");



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE SUBJECT
///////////////////////////////////////////////////////////////////////////
emailSub = "Check out the " + Course_Title + " resource!";



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE BODY
//The body is built by adding many strings together, for ease of editing
///////////////////////////////////////////////////////////////////////////

emailBody = "There's some really handy information in the " + Course_Title + " resource.";

//2 new lines
emailBody += "%0d%0a";
emailBody += "%0d%0a";

emailBody += "Here's the link:"

//1 new line
emailBody += "%0d%0a";

//the course url from the variable
emailBody += Course_URL

//2 new lines - leaves space for email signature
emailBody += "%0d%0a";
emailBody += "%0d%0a";


location.href = "mailto:?subject=" + emailSub + "&body=" + emailBody;
}

function Script10()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script11()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script12()
{
  ///////////////////////////////////////////////////////////////////////////
//THIS SECTION GETS VARIABLES FROM STORYLINE YOU CAN USE IN YOUR CODE
///////////////////////////////////////////////////////////////////////////
var player = GetPlayer();
var Course_Title = player.GetVar("Course_Title");
var Course_URL = player.GetVar("Course_URL");



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE SUBJECT
///////////////////////////////////////////////////////////////////////////
emailSub = "Check out the " + Course_Title + " resource!";



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE BODY
//The body is built by adding many strings together, for ease of editing
///////////////////////////////////////////////////////////////////////////

emailBody = "There's some really handy information in the " + Course_Title + " resource.";

//2 new lines
emailBody += "%0d%0a";
emailBody += "%0d%0a";

emailBody += "Here's the link:"

//1 new line
emailBody += "%0d%0a";

//the course url from the variable
emailBody += Course_URL

//2 new lines - leaves space for email signature
emailBody += "%0d%0a";
emailBody += "%0d%0a";


location.href = "mailto:?subject=" + emailSub + "&body=" + emailBody;
}

function Script13()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script14()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script15()
{
  ///////////////////////////////////////////////////////////////////////////
//THIS SECTION GETS VARIABLES FROM STORYLINE YOU CAN USE IN YOUR CODE
///////////////////////////////////////////////////////////////////////////
var player = GetPlayer();
var Course_Title = player.GetVar("Course_Title");
var Course_URL = player.GetVar("Course_URL");



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE SUBJECT
///////////////////////////////////////////////////////////////////////////
emailSub = "Check out the " + Course_Title + " resource!";



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE BODY
//The body is built by adding many strings together, for ease of editing
///////////////////////////////////////////////////////////////////////////

emailBody = "There's some really handy information in the " + Course_Title + " resource.";

//2 new lines
emailBody += "%0d%0a";
emailBody += "%0d%0a";

emailBody += "Here's the link:"

//1 new line
emailBody += "%0d%0a";

//the course url from the variable
emailBody += Course_URL

//2 new lines - leaves space for email signature
emailBody += "%0d%0a";
emailBody += "%0d%0a";


location.href = "mailto:?subject=" + emailSub + "&body=" + emailBody;
}

function Script16()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script17()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script18()
{
  ///////////////////////////////////////////////////////////////////////////
//THIS SECTION GETS VARIABLES FROM STORYLINE YOU CAN USE IN YOUR CODE
///////////////////////////////////////////////////////////////////////////
var player = GetPlayer();
var Course_Title = player.GetVar("Course_Title");
var Course_URL = player.GetVar("Course_URL");



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE SUBJECT
///////////////////////////////////////////////////////////////////////////
emailSub = "Check out the " + Course_Title + " resource!";



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE BODY
//The body is built by adding many strings together, for ease of editing
///////////////////////////////////////////////////////////////////////////

emailBody = "There's some really handy information in the " + Course_Title + " resource.";

//2 new lines
emailBody += "%0d%0a";
emailBody += "%0d%0a";

emailBody += "Here's the link:"

//1 new line
emailBody += "%0d%0a";

//the course url from the variable
emailBody += Course_URL

//2 new lines - leaves space for email signature
emailBody += "%0d%0a";
emailBody += "%0d%0a";


location.href = "mailto:?subject=" + emailSub + "&body=" + emailBody;
}

function Script19()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script20()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script21()
{
  ///////////////////////////////////////////////////////////////////////////
//THIS SECTION GETS VARIABLES FROM STORYLINE YOU CAN USE IN YOUR CODE
///////////////////////////////////////////////////////////////////////////
var player = GetPlayer();
var Course_Title = player.GetVar("Course_Title");
var Course_URL = player.GetVar("Course_URL");



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE SUBJECT
///////////////////////////////////////////////////////////////////////////
emailSub = "Check out the " + Course_Title + " resource!";



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE BODY
//The body is built by adding many strings together, for ease of editing
///////////////////////////////////////////////////////////////////////////

emailBody = "There's some really handy information in the " + Course_Title + " resource.";

//2 new lines
emailBody += "%0d%0a";
emailBody += "%0d%0a";

emailBody += "Here's the link:"

//1 new line
emailBody += "%0d%0a";

//the course url from the variable
emailBody += Course_URL

//2 new lines - leaves space for email signature
emailBody += "%0d%0a";
emailBody += "%0d%0a";


location.href = "mailto:?subject=" + emailSub + "&body=" + emailBody;
}

function Script22()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script23()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script24()
{
  ///////////////////////////////////////////////////////////////////////////
//THIS SECTION GETS VARIABLES FROM STORYLINE YOU CAN USE IN YOUR CODE
///////////////////////////////////////////////////////////////////////////
var player = GetPlayer();
var Course_Title = player.GetVar("Course_Title");
var Course_URL = player.GetVar("Course_URL");



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE SUBJECT
///////////////////////////////////////////////////////////////////////////
emailSub = "Check out the " + Course_Title + " resource!";



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE BODY
//The body is built by adding many strings together, for ease of editing
///////////////////////////////////////////////////////////////////////////

emailBody = "There's some really handy information in the " + Course_Title + " resource.";

//2 new lines
emailBody += "%0d%0a";
emailBody += "%0d%0a";

emailBody += "Here's the link:"

//1 new line
emailBody += "%0d%0a";

//the course url from the variable
emailBody += Course_URL

//2 new lines - leaves space for email signature
emailBody += "%0d%0a";
emailBody += "%0d%0a";


location.href = "mailto:?subject=" + emailSub + "&body=" + emailBody;
}

function Script25()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script26()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script27()
{
  ///////////////////////////////////////////////////////////////////////////
//THIS SECTION GETS VARIABLES FROM STORYLINE YOU CAN USE IN YOUR CODE
///////////////////////////////////////////////////////////////////////////
var player = GetPlayer();
var Course_Title = player.GetVar("Course_Title");
var Course_URL = player.GetVar("Course_URL");



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE SUBJECT
///////////////////////////////////////////////////////////////////////////
emailSub = "Check out the " + Course_Title + " resource!";



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE BODY
//The body is built by adding many strings together, for ease of editing
///////////////////////////////////////////////////////////////////////////

emailBody = "There's some really handy information in the " + Course_Title + " resource.";

//2 new lines
emailBody += "%0d%0a";
emailBody += "%0d%0a";

emailBody += "Here's the link:"

//1 new line
emailBody += "%0d%0a";

//the course url from the variable
emailBody += Course_URL

//2 new lines - leaves space for email signature
emailBody += "%0d%0a";
emailBody += "%0d%0a";


location.href = "mailto:?subject=" + emailSub + "&body=" + emailBody;
}

function Script28()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script29()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script30()
{
  ///////////////////////////////////////////////////////////////////////////
//THIS SECTION GETS VARIABLES FROM STORYLINE YOU CAN USE IN YOUR CODE
///////////////////////////////////////////////////////////////////////////
var player = GetPlayer();
var Course_Title = player.GetVar("Course_Title");
var Course_URL = player.GetVar("Course_URL");



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE SUBJECT
///////////////////////////////////////////////////////////////////////////
emailSub = "Check out the " + Course_Title + " resource!";



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE BODY
//The body is built by adding many strings together, for ease of editing
///////////////////////////////////////////////////////////////////////////

emailBody = "There's some really handy information in the " + Course_Title + " resource.";

//2 new lines
emailBody += "%0d%0a";
emailBody += "%0d%0a";

emailBody += "Here's the link:"

//1 new line
emailBody += "%0d%0a";

//the course url from the variable
emailBody += Course_URL

//2 new lines - leaves space for email signature
emailBody += "%0d%0a";
emailBody += "%0d%0a";


location.href = "mailto:?subject=" + emailSub + "&body=" + emailBody;
}

function Script31()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script32()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script33()
{
  ///////////////////////////////////////////////////////////////////////////
//THIS SECTION GETS VARIABLES FROM STORYLINE YOU CAN USE IN YOUR CODE
///////////////////////////////////////////////////////////////////////////
var player = GetPlayer();
var Course_Title = player.GetVar("Course_Title");
var Course_URL = player.GetVar("Course_URL");



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE SUBJECT
///////////////////////////////////////////////////////////////////////////
emailSub = "Check out the " + Course_Title + " resource!";



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE BODY
//The body is built by adding many strings together, for ease of editing
///////////////////////////////////////////////////////////////////////////

emailBody = "There's some really handy information in the " + Course_Title + " resource.";

//2 new lines
emailBody += "%0d%0a";
emailBody += "%0d%0a";

emailBody += "Here's the link:"

//1 new line
emailBody += "%0d%0a";

//the course url from the variable
emailBody += Course_URL

//2 new lines - leaves space for email signature
emailBody += "%0d%0a";
emailBody += "%0d%0a";


location.href = "mailto:?subject=" + emailSub + "&body=" + emailBody;
}

function Script34()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script35()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script36()
{
  ///////////////////////////////////////////////////////////////////////////
//THIS SECTION GETS VARIABLES FROM STORYLINE YOU CAN USE IN YOUR CODE
///////////////////////////////////////////////////////////////////////////
var player = GetPlayer();
var Course_Title = player.GetVar("Course_Title");
var Course_URL = player.GetVar("Course_URL");



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE SUBJECT
///////////////////////////////////////////////////////////////////////////
emailSub = "Check out the " + Course_Title + " resource!";



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE BODY
//The body is built by adding many strings together, for ease of editing
///////////////////////////////////////////////////////////////////////////

emailBody = "There's some really handy information in the " + Course_Title + " resource.";

//2 new lines
emailBody += "%0d%0a";
emailBody += "%0d%0a";

emailBody += "Here's the link:"

//1 new line
emailBody += "%0d%0a";

//the course url from the variable
emailBody += Course_URL

//2 new lines - leaves space for email signature
emailBody += "%0d%0a";
emailBody += "%0d%0a";


location.href = "mailto:?subject=" + emailSub + "&body=" + emailBody;
}

function Script37()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script38()
{
  var dummy = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);

var player = GetPlayer();
player.SetVar('Course_URL', text);
}

function Script39()
{
  ///////////////////////////////////////////////////////////////////////////
//THIS SECTION GETS VARIABLES FROM STORYLINE YOU CAN USE IN YOUR CODE
///////////////////////////////////////////////////////////////////////////
var player = GetPlayer();
var Course_Title = player.GetVar("Course_Title");
var Course_URL = player.GetVar("Course_URL");



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE SUBJECT
///////////////////////////////////////////////////////////////////////////
emailSub = "Check out the " + Course_Title + " resource!";



///////////////////////////////////////////////////////////////////////////
//THIS IS WHERE YOU SET THE BODY
//The body is built by adding many strings together, for ease of editing
///////////////////////////////////////////////////////////////////////////

emailBody = "There's some really handy information in the " + Course_Title + " resource.";

//2 new lines
emailBody += "%0d%0a";
emailBody += "%0d%0a";

emailBody += "Here's the link:"

//1 new line
emailBody += "%0d%0a";

//the course url from the variable
emailBody += Course_URL

//2 new lines - leaves space for email signature
emailBody += "%0d%0a";
emailBody += "%0d%0a";


location.href = "mailto:?subject=" + emailSub + "&body=" + emailBody;
}

