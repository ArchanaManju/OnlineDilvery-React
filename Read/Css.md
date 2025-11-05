diffrent way of doing css 
material ui 
styled compoenet 
sass
tailwind 
bootstrap
chakra ui 
any desgin 


~~~~~~~~~ Tailwind css ~~~~~~~
we need to istall tailwind and tailwind postcss

postcss is when we need to transfer the css with javascript. So parcel will understnad we are using taliwind in our code 

we use the css on compoenet classname 
m - margin 
mb - margin botton 
p - padding 
px - pading horizontal (top/bottom )

"m-4, p-4" all this are inbuild but if we dont have required values we can do hardcoaded like w-[200px] or m-[9.5px]


tailwind is lightwight
never ship unsued csss .whever we add something to the class then only it will add to css , it will not loads . 
it keep rebuilding when you add something to class .

similarty incode 
all dev in team will use similar kind of style to do css .

responsive - we can write media quries as well . 
for example if you want to load same webiste in mobile or tab we can specify to change in color or anything based on device used .

sm:bg-orange-200
if device is greated than small device use this color 

we can configure theme as well 
light and dark mode

if we want to make size half the width of page 
w-6/12 
tailwind splits page into 12 section 