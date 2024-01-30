// Title
document.title= "Resume Using JavaScript";

// Body
let body = document.body;
body.style.fontFamily="Arial, sans-serif";
// body.style.textAlign="center";

// Div
let div = document.createElement("div");

div.style.width="50%";
div.style.margin="auto";
div.style.maxWidth="100%";
div.style.height= "auto";
div.style.padding="5px 10px";
div.style.display="flex";

body.appendChild(div)

// Section 01
let section01 = document.createElement("section");

section01.style.width="35%";
section01.style.backgroundColor="#666666";

div.appendChild(section01)

//Image
let image = document.createElement("img");
image.src = "img.png";

image.style.maxWidth="90%";
image.style.height= "auto";
image.style.borderRadius ="5px";
image.style.margin=" 20px 5px 10px 10px ";

section01.appendChild(image)

// Heading 1 in Section 01
let headingSec01 = document.createElement("h2");
let headingSec01Text = document.createTextNode("MY CONTACT");

headingSec01.style.textAlign="center";
headingSec01.style.margin="10px 0";

headingSec01.appendChild(headingSec01Text)
section01.appendChild(headingSec01)

//Div01 in Section 01
let div01 = document.createElement("div");

div01.style.margin="10px 0"

section01.appendChild(div01)


// SubHeading01 in Section 01
let subHeading01 = document.createElement("h4");
let subHeading01Text = document.createTextNode("Phone");

subHeading01.style.margin="4px 39px";

div01.appendChild(subHeading01)
subHeading01.appendChild(subHeading01Text)


// Phone Number
let phoneNum = document.createElement("p");
let phoneNumText = document.createTextNode("+123-456-7890");

phoneNum.style.fontSize="14px";
phoneNum.style.margin="0px 39px";

div01.appendChild(phoneNum)
phoneNum.appendChild(phoneNumText)

// SubHeading02 in Section 01
let subHeading02 = document.createElement("h4");
let subHeading02Text = document.createTextNode("Email");

subHeading02.style.margin="4px 39px";

div01.appendChild(subHeading02)
subHeading02.appendChild(subHeading02Text)


// Email
let email = document.createElement("p");
let emailText = document.createTextNode("hello@gmail.com");

email.style.fontSize="14px";
email.style.margin="0px 39px";

div01.appendChild(email)
email.appendChild(emailText)


// SubHeading03 in Section 01
let subHeading03 = document.createElement("h4");
let subHeading03Text = document.createTextNode("Address");

subHeading03.style.margin="4px 39px";

div01.appendChild(subHeading03)
subHeading03.appendChild(subHeading03Text)


// Address
let address = document.createElement("p");
let addressText = document.createTextNode("123 Anywhere St, Any City");

address.style.fontSize="14px";
address.style.margin="0px 39px";

div01.appendChild(address)
address.appendChild(addressText)


// Heading 2 in Section 01
let headingSec02 = document.createElement("h2");
let headingSec02Text = document.createTextNode("EXPERTISE");

headingSec02.style.textAlign="center";
headingSec02.style.margin="15px 0";

headingSec02.appendChild(headingSec02Text)
section01.appendChild(headingSec02)


// Div02 
let div02 = document.createElement("div");

div02.style.margin="2px 0";

section01.appendChild(div02)

// ul tag
let ul = document.createElement("ul");

ul.style.marginLeft="12px";

div02.appendChild(ul)

// li01 list
let li01 = document.createElement("li");
let li01Text = document.createTextNode("Web Developer");

li01.style.fontSize="14px";

ul.appendChild(li01)
li01.appendChild(li01Text)

// li02 list
let li02 = document.createElement("li");
let li02Text = document.createTextNode("App Developer");

li02.style.fontSize="14px";

ul.appendChild(li02)
li02.appendChild(li02Text)

// li03 list
let li03 = document.createElement("li");
let li03Text = document.createTextNode("Graphic Design");

li03.style.fontSize="14px";

ul.appendChild(li03)
li03.appendChild(li03Text)

// li04 list
let li04 = document.createElement("li");
let li04Text = document.createTextNode("Digital Marketing");

li04.style.fontSize="14px";

ul.appendChild(li04)
li04.appendChild(li04Text)

// li05 list
let li05 = document.createElement("li");
let li05Text = document.createTextNode("Affalite Marketing");

li05.style.fontSize="14px";

ul.appendChild(li05)
li05.appendChild(li05Text)

// li06 list
let li06 = document.createElement("li");
let li06Text = document.createTextNode("Google Ads");

li06.style.fontSize="14px";
ul.appendChild(li06)
li06.appendChild(li06Text)


// Section 02
let section02 = document.createElement("section");

section02.style.width="65%";
section02.style.backgroundColor="#dcdcdc";

div.appendChild(section02)

// Hr 01 tag
let horizontalLine01 = document.createElement("hr")

horizontalLine01.style.width="95%";
horizontalLine01.style.height="3px";
horizontalLine01.border="0px white solid";
horizontalLine01.color="white";
horizontalLine01.backgroundColor="white";

section02.appendChild(horizontalLine01)

// Name
let myName = document.createElement("h1");
let nameText = document.createTextNode("khizra idrees");

myName.style.textTransform="upperCase";
myName.style.color="#595755";
myName.style.margin="0 12px";
myName.style.fontSize="40px";

section02.appendChild(myName)
myName.appendChild(nameText)

// Profession
let profession = document.createElement("p");
let professionText = document.createTextNode("Web developer");

profession.style.textTransform="upperCase";
profession.style.color="#595755";
profession.style.margin="0 15px";
profession.style.fontSize="20px";

profession.appendChild(professionText)
section02.appendChild(profession)

// SubHeading04 in Section 02
let subHeading04 = document.createElement("h4");
let subHeading04Text = document.createTextNode("About myself");

subHeading04.style.margin="49px 15px 0 15px";
subHeading04.style.fontSize="20px";
subHeading04.style.color="#595755";
subHeading04.style.textTransform="upperCase";

section02.appendChild(subHeading04)
subHeading04.appendChild(subHeading04Text)


// About MySelf
let aboutMySelf = document.createElement("p");
let aboutMySelfText = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum id numquam nihil! Magnam, deleniti accusantium eveniet ut, incidunt quos ipsam est nihil quas veniam numquam qui totam architecto porro dolorum laborum ipsum quaerat possimus. Delectus!");

aboutMySelf.style.fontSize="16px";
aboutMySelf.style.margin="15px 15px";
aboutMySelf.style.color="#595755";
aboutMySelf.style.fontFamily="serif";

section02.appendChild(aboutMySelf)
aboutMySelf.appendChild(aboutMySelfText)


// SubHeading05 in Section 02
let subHeading05 = document.createElement("h4");
let subHeading05Text = document.createTextNode("Experience");

subHeading05.style.margin="40px 15px 0 15px";
subHeading05.style.fontSize="20px";
subHeading05.style.color="#595755";
subHeading05.style.textTransform="upperCase";

section02.appendChild(subHeading05)
subHeading05.appendChild(subHeading05Text)

// div03
let div03 = document.createElement("div");

section02.appendChild(div03)


// Div 03 Heading 01
let div03Heading01 = document.createElement("h6");
let div03Heading01Text = document.createTextNode("Graphic Designer | 2013-2019");

div03Heading01.style.fontSize="12px";
div03Heading01.style.fontWeight="900";
div03Heading01.style.fontFamily="sans-serif";
div03Heading01.style.color="#595755";
div03Heading01.style.margin="2px 15px";

div03.appendChild(div03Heading01)
div03Heading01.appendChild(div03Heading01Text)


let div03Para01 = document.createElement("p");
let div03Para01Text = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tempora perferendis ipsum neque non impedit distinctio quis iste ratione iusto, dolor illum error officia maxime fuga natus veniam tenetur quia sapiente? Quasi minima totam iste.");

div03Para01.style.margin="2px 15px";
div03Para01.style.fontSize="12px";
div03Para01.style.fontFamily="math";
div03Para01.style.color="#595755";

div03.appendChild(div03Para01)
div03Para01.appendChild(div03Para01Text)


// Div 03 Heading 02
let div03Heading02 = document.createElement("h6");
let div03Heading02Text = document.createTextNode("Digital Marketing | 2009-2020");

div03Heading02.style.fontSize="12px";
div03Heading02.style.fontWeight="900";
div03Heading02.style.fontFamily="sans-serif";
div03Heading02.style.color="#595755";
div03Heading02.style.margin="2px 15px";

div03.appendChild(div03Heading02)
div03Heading02.appendChild(div03Heading02Text)


let div03Para02 = document.createElement("p");
let div03Para02Text = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tempora perferendis ipsum neque non impedit distinctio quis iste ratione iusto, dolor illum error officia maxime fuga natus veniam tenetur quia sapiente? Quasi minima totam iste.");

div03Para02.style.margin="2px 15px";
div03Para02.style.fontSize="12px";
div03Para02.style.fontFamily="math";
div03Para02.style.color="#595755";

div03.appendChild(div03Para02)
div03Para02.appendChild(div03Para02Text)


// SubHeading06 in Section 02
let subHeading06 = document.createElement("h4");
let subHeading06Text = document.createTextNode("Education");

subHeading06.style.margin="40px 15px 0 15px";
subHeading06.style.fontSize="20px";
subHeading06.style.color="#595755";
subHeading06.style.textTransform="upperCase";

section02.appendChild(subHeading06)
subHeading06.appendChild(subHeading06Text)


// Div 04
let div04 = document.createElement("div");

div04.style.display="flex";
div04.style.justifyContent="space-between";

section02.appendChild(div04)


let div04Heading01 = document.createElement("h6");
let div04Heading01Text = document.createTextNode("2008");

div04Heading01.style.margin="5px 15px";
div04Heading01.style.color="#595755";
div04Heading01.style.fontWeight="900";

div04.appendChild(div04Heading01)
div04Heading01.appendChild(div04Heading01Text)


let div04Para01 = document.createElement("p");
let div04Para01Text = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iure harum quos fugit, illum sit officia debitis cupiditate? Unde consectetur architecto ea minima quo? Ea?");

div04Para01.style.fontSize="12px";
div04Para01.style.textAlign="start";
div04Para01.style.margin="5px 30px";
div04Para01.style.fontFamily="serif";
div04Para01.style.color="#595755";

div04.appendChild(div04Para01)
div04Para01.appendChild(div04Para01Text)


// Div 05
let div05 = document.createElement("div");

div05.style.display="flex";
div05.style.justifyContent="space-between";

section02.appendChild(div05)


let div05Heading01 = document.createElement("h6");
let div05Heading01Text = document.createTextNode("2021");

div05Heading01.style.margin="5px 15px";
div05Heading01.style.color="#595755";
div05Heading01.style.fontWeight="900";

div05.appendChild(div05Heading01)
div05Heading01.appendChild(div05Heading01Text)


let div05Para01 = document.createElement("p");
let div05Para01Text = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iure harum quos fugit, illum sit officia debitis cupiditate? Unde consectetur architecto ea minima quo? Ea?");

div05Para01.style.fontSize="12px";
div05Para01.style.textAlign="start";
div05Para01.style.margin="5px 30px";
div05Para01.style.fontFamily="serif";
div05Para01.style.color="#595755";

div05.appendChild(div05Para01)
div05Para01.appendChild(div05Para01Text)

// Hr 02 tag
let horizontalLine02 = document.createElement("hr")

horizontalLine02.style.width="95%";
horizontalLine02.style.height="3px";
horizontalLine02.border="0px white solid";
horizontalLine02.color="white";
horizontalLine02.backgroundColor="white";
horizontalLine02.style.bottom="0";

section02.appendChild(horizontalLine02)