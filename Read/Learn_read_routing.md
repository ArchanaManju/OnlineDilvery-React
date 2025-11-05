useeffect --> if no dependicy array , useeffcet is called on evrytime componenet rendered .
if there is empty dependecy array, rendered on intail render of the compoenet.even if the compoenet re render the useffcet is not called 
if we have something inside the dependecy array , usefffect is called everytime the dependent is cahnged the useeffct is called .

Usestate --> never create outside the compoenet .it is used to crate local state variable for that compoenet so it has to be inside that componenet .
do create inside the if else or condation or loop or function -- this will cause inconsistency 
on higher level as first compoenet 


~~~~~~~~~~~~~~ Npm java script libaray react route Dom ~~~~~~~~~~~
carteing aboutus page ===> Header componenet

when ever we create route we create routing configuration in main App.js file 
import { createBrowserRouter } from "react-router-dom";

configuartion 
const appRouter = createBrowserRouter([
    {  
        path:'/',
        element:<AppLayout /> 
    },
{
    path:'/about',
    element:<About/>
},

])

when we create this config , i need to provide this to config to render .
for that we will use RouterProvide from react-router-dom

before we were rendering applayout directly 
root.render(<AppLayout />);
now we need to provide this to Routerprovider 
root.render(<Routerprovide router={appRoute} />);

~~~~~~~~~~~ Creating child routuer ~~~~~~~~~~~
example if i naviaget to about page . i should still see header componet , and should be see about us page under header .
currently we show header and body in a smae way when we change path header should reatin only body should be changed 

so in <AppLayout>



const AppLayout = () => {
    return (
        <div className="app">   
            <Header />
            // if path / than load 
            <BodyWithApiCall />
            // if path is /about than load
            <About/>
        </div>
    );
}

add all the routes as childer for app laouyt , now we need to load header and path specifi compoenet 
const appRouter = createBrowserRouter([
    {  
        path:'/',
        element:<AppLayout />, 
        children:[{path:'/',
        element:<BodyWithApiCall/>},{
    path:'/about',
    element:<About/>
},
{
    path:'/contact',
    element:<Contact/>
},],
        errorElement:<Error/>

    },

])
so no we need to fill in the comppoenet based on the path match , for this we can use function called Outlet Provide by react-dom 
Outlet will check the path and based on the path it will load the childern 
Check file RestaurantsAppApi.js

~~~~~ No we need to link the About us to open the page 
for this in header componet 
<li><a href ='/about'>About </li>
In react when we are routing dont use <a> anchor tag to do the routing 
if we do this that means page is re loading , 

we should not use this as it loads eniter page , we will use Link compoent from recat-dom 
Link will replace respective compoent not realoding eniert dom 

if we go to new route its changing the compoent not loading new page ===> hence react is called single page application , we dont need change the page it reloads the compoent as required.

# Routing in web apps ########
Clinet side routing  and server side routing

-- Server side routing -> we click on about us reloads eniter page sends ntweork call fetch the data and loads the data on to page 

-- Client side routing -> in our application when we clik on about us we are loading teh already exiting compoenet not fetch any data from netwrok .


# Dynamic routing 
we could not get swiggy menu card api working because of proxy issue 
so i have used parecle proxy severe created own api end point and passed mocked data from menu.js file 
to start the servere first start the parcel npx parcel index.html and then start server  node server.js
