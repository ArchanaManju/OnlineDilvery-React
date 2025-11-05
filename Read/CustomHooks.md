single resposiblity principle:

If you have function or componenet should have single resposiblites .


~~~~~~~~~ Custom hook ~~~~~~~

Createing custom hook is not madtaroy 
creating custom hook makes code more readabled , modular, reusable .

ex: we are doing etch and ui in same file in ResturantMenu.js 
compoenet should do only one thing creating ui should not worry about data . 
so split the fetch data part and create hook - useResturantMenu.js

hooks resposibilty here is think about contract , what it should get as input an dwhat should be output 

in this example useResturantMenu we need to fetch the data based on resId and retrun the data . Resid is input and resinfo will be output