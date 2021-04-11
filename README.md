# A small project with ReactJS and API

This is a front end application which calls API to fetch data of Spacex Programs, and display it. <br>
This also includes some filters like launch year, successful launch and successful land. <br>
I prefered not to use any UI libraries, we could easily with few just lines in css, create similar effects. <br>

Heroku Link : 
<br>

## Stack Details
HTML, CSS, Javascript (inevitable) <br>
React JS <br>
JQuery (could avoid by using XHR or Axios) <br>

### Extra Packages :
react-numeric-input (proved very helpful for numric input)
<br>

## Approach
First started traditionaly without reactjs to make some design. This helped me alot to make sepereate componet and functions is react.
Then when felt ok with design, I tried Ajax approach to call API and place it through DOM manipulation using Jquery. But I soon realised, it will be very tedious. At this moment I had realised the value of ReactJS.<br>

I setuped react through npm, and made some changes here and there in template and make it useful for me. Then I converted each component from HTML to react. Then figured out how I should use states and props for proper flow of data. After designing props and states. I created API calling. Then added it to App states and rendered it into HTML using list and comp component/function.<br>

This had left only one work of creating form of filters. While creating the form, I faced many problems in number inputs, which got solver using react-numeric-input npm package.<br>

This concludes the whole approach. To understande the code you could read the code. I have commented the code to make it readable.<br>

## Snapshots

PC Screen
<br>

![img1](snapshots/img1.PNG) 
<br>

![img2](snapshots/img2.PNG)
<br>

![img3](snapshots/img3.PNG)
<br>

![img4](snapshots/img4.PNG)
<br>

Mobile Screen
<br>
![img5](snapshots/img5.JPEG)