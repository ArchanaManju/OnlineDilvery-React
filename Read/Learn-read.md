Read comments in App.js

Why is react is fast 
beacuse react does faster and efficaiten dom manupulation , changes in data will update dom

~~~~~ About Packages ~~~~~~~~~~~~~

NPm - Package manager 
package.json -Configuation for npm , packages is also called depedendecies 
Most imposrtenat package in project - bundler [ex: webpack, parcel]
Bundler - bundles the code , packages your app so we can ship to production 
install commands = npm install -D 'Package name', -D means dev depedency 
in package if use  "parcel": "^2.16.0" caret the auto update of even minor veriosn will be done if use ~ tilda then major version upgarte 

whats is difrence between package.json and package.lock.json 
package.lock.json will keep exact tract of version of dependeices installed 

when we isntall npm install we get node_moules folder.
Node_modules containes all the code for packages we installed from npm 
 
 so we dont want this node_moldes into git so we crate .gitigore and add node_modlues


~~~~ Ignit App ~~~
npx parcel index.html 

parcle for bundling and index.html is source of our app / this can be anything where the starting point of app is 

~~~~ adding react 
we can add by usin cdn link 
 <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
but is costly as it fetches eveytime from the netwrok 

so best way to do is add react inside our node modules adding it as dependeincy in package its not 
npm install reat and react-dom

~~~Parcel ~~
dev build 
local server 
HMR- hot module replacment , so when we cahnge anything it aou builds and updated the webpage 
how parcel does is using - file watching algorithm written in c++ 
parcel is caching as well , so build will take less time by updating only for changed files 

it does image optimization , minification , building , compressing 
for all this it will use diffrent library 

it does consistnent hashing , code splitting , 
and diffrential bundling - so app can run somthhly in diffrent browser , by creating diffrent bundles .

Tree Shaking - will remove unsued codes 
help use to build npx parcel build index.html - it craets folder called dist and 
so these files can be auto genarte so no need to push add in git ignore 

~~~ Browerslist inside node module ~~~~
it comes along with parcel install 
so we can use this package name in package.json and menation comptible brower version 


~~~~~~~~ Using api json out put as dynaminc input to the app ~~~~~~~~~~~
talking about swiggy app 

config driven UI --> 
Configuration-driven UI, also known as config-driven UI or configuration-based UI - When you build real a world application so you want should your website work in many country or many place we control our fontend it is known as using Config-Driven UI . API or Backend Driven which is data Comming from API.

In a configuration-driven UI, the layout, styles, and other properties of UI elements are defined in a configuration file or database, which can be easily modified without requiring changes to the codebase. This approach makes it easier to customize the UI for different use cases or user groups, without the need for extensive coding.

~~~~~~~~~~~~~~~App.js ~~~~~~~~~~~~~~~#
Read and learn about how to use react componete 
componet compostion 
jsx 

~~~~~~~~~~~~~~~RestaurantApp.js~~~~~~~~~~~~~~
Desgining app with hardcoded values 

~~~~~~~~~~~~~~~RestaurantAppJson.js~~~~~~~~~~~~~~
Desgining app with json objcet 

~~~~~~~~~~~~~~~RestaurantAppApi.js~~~~~~~~~~~~~~
Desgining app with api 

Map --> we need to pass key its must 
 when there are componests in same level in our example Resutrant card, so when new restruant is send back from api which needs to add at the top, if we dont give key/id during this case react will renrender becuse it doesnt know what place this needs to be added , so if you dont key unique key react will reload / rerender all the cards 
 
     {resObj.map((restaurant) => (
        <RestaurantCard 
            key={restaurant.info.id}
            resdata={restaurant} 
        />
    ))}


    here dont use index as key its not unique. if there is no uniuqe id we can use index as last option 
        
        {resObj.map((restaurant, index) => (
        <RestaurantCard 
            key={index}
            resdata={restaurant} 
        />
    ))}

    ~~~~~~~~~~~~ export 
    2 types of export 
    default export
    export default <name of variable or compoenent>
    import <name of variable or compoenent> from path 

    named export 
     export variable/componenet
     import {variable/componenet} from path 

    ~~~~~~~~~~~~~~Hooks ~~~~~~~~~~

    hook is just normal js function from react 

useState() if we want tocreate super powerful state variable, it mantianes stae of the componete ,
helps keep data and ui in sync, when data change it automatically refresn or rerenders the compoenet 
usestae returns array so when we write const [list, setlist] = useSate()
list and set list or destructerd from array returned from useState. 

when we do like this for input tag 
                <input type="text" className="search-box" placeholder="Search for restaurants" value={searchText} onChange={()=>{}} />
the input feld in ui will not take any text is this because when we used useState 
const [searchText, setSearchText] = useState("");
we have set default to "" and we have not use setSearchText to accept the changes so 

after we used  onChange={(e)=>{setSearchText(e.target.value)}}
it start accepting the values in the input and as and when we enter letters in box state is getting changed and hence component rerunder 

----- read how we use useState in Body.jsx

----- read how we use useState in BodyWithApi.jsx
useEffect() --> takes 2 arrguments , 1 arrow function its a call back function , dependecipy array 
when will this useeffcet call back function is called --> after the compoent is render , once render cycle of the componet is finsihed it will call the callback function of useEffct .

so if you want to do something after rendering the componet we write it inside the UseEffect 

~~~~~~ React Algorith ~~~
React uses Reconcilation algorithm also called React fiber 
Virtual dom -- is object gets crated when we carte compoente (see by logging out any comoponete <Body>)

when we do change to any componenet/or state we get new objevt (one more virtual dom)
react keeps copy of previous dom and it compares / diff between new and old and when there is diffrent it update the actual dom 
thats when we see the changes in ui .
When tearing down a tree/object, old DOM nodes are destroyed. Component instances receive componentWillUnmount(). When building up a new tree, new DOM nodes are inserted into the DOM. Component instances receive UNSAFE_componentWillMount() and then componentDidMount(). Any state associated with the old tree is lost.


React react Fiber

~~~~~~~ Monolith Architecture ~~~~~~~~~~

Single code base have everything inside 
API , UI , AUTh, Db , SMS 
all are written and handeled in same source
so if we need to change small things like color of button we need to complie whole project 

~~~~~~ Mico Service Architecture ~~~~~
we have diffrnent services for diffrent job 

Backend service 
UI Service 
Auth Service 
Db service 
SMS service 
Email notification service 

these are micro services 
all tese combined together forms app .
all these services talks to each other based on request /usecase

This is known as Seprtaion of concers#--- it folows single responsiblites princepile concepts 

Separation of Concerns (SoC) is a design principle in software engineering that advocates for organizing a codebase into distinct sections, each addressing a single concern. This approach enhances modularity, maintainability, and scalability of software systems by allowing developers to work on individual components without affecting others. Common implementations of SoC include:
Model-View-Controller (MVC) architecture, where the model handles data, the view manages the UI, and the controller acts as an intermediary.
Layered architecture, where different layers (e.g., presentation, business logic, data access) are separated to improve flexibility and scalability.
Clean Architecture, which emphasizes the separation of business logic and technical decisions.
By isolating different concerns, SoC leads to more maintainable and adaptable software, making it a fundamental principle in modern software development.

how these services talk to each other :  ?

Each services can be retrun in diffrent tech stach 

for example 
if Ui Return in react is hosted in port : http://localhost:1234/ and mappped to domain name ex: namestereact.com/
Similarly backend is hosted in diffrent port ex :  http://localhost:1200/ anad mapped to domain name ex:  namestereact.api.com/

Similarly SMS service is hosted in diffrent port ex :  http://localhost:1290/ anad mapped to domain name ex:  namestereact.sms.com/

how these intreacts is if ui wants to connect to backaned the will make call to /api or the port 

~~~~~~~~~~ 2approces how UI access the api 
 when we open the web page 
 1==> loads ---> api --> render
 as soon as page loads/opened we make api call and then render in ui once we get the data 

 2 ===> loads --> renderui --> api --> render 
 as soon as page loads we render what ever we have like skeleton or loading sate and the call api get the data and reload with new data 

 2 nd approch is better , better user experince 
 since react renders ui super fast we dont since much issue 

 ~~~~~ Shimmer UI ~~~~~
 Resembels actuall ui , instead of showing loading we can show the skeleton looks like  fake ui utill we get data back from api .
