Why we need to bundle or chunk or split our files.

when parcel builds the app it creats single .js called index.js containg all the details of webpage . so its important to breakdown app into smaller chunks .

chunking // code spiltting // dynamic bundling  // lazyloading

think when to / what to bundle 

ex: flight booking  app 
fligt booking function --> one bundle 
hotle booking --> one bundle 
car --> one bundle 

so these are like small bundles inside big application 

doing this will not put oad into single bundle , so index.js file will not becaome heavy and dont take much time to show in the browser 

//// Our app is small we can bundle . 

we are implementing grocery 
grocery is still inside same sorce folder.

so we will import Grocery in app.js using lazyloading . same as chunking / dynamic loading 
when our app intial loads it will not load code of any compoenet imported as lazy loading in app.js 

ex: const Grocery = lazy(()=> import('./components/Grocery'))

now when you open index.js in webswite you will not see the code of grcery compoenet 
and also you can see now new js ile called grocery.js file you can see same in dist folder in codebase .
so now when we clik on grocery link react takes sometime to load the conetent , during that time we get the error To handle that state we use compoenet from react called 
"Suspense"


~~~~~~~~ optimizing 
when app is taking lot of time to  load 
this is the one off way to speed the loading 
split the code  use lazy loading to load on demand 