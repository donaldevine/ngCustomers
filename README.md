# Angular Sample App

Based on Dan Wahlin's talk [Angularjs in 20ish Minutes](http://weblogs.asp.net/dwahlin/archive/2014/01/18/angularjs-in-20ish-minutes-talk-at-ng-conf.aspx)
---
## Dependencies
Your web server will need to be able to serve JSON.
Here are some instructions on how to set IIS 7/7.5 to return JSON
First make sure you have ASP installed.
You need to do two things, add a .json extension and  add a json handler.
To set it locally to your specific application (not to the entire site)
Add a .json extension:
In the Properties page of your specific application:
Open the MIME Types panel
Click the Actions link
A pop up will open, set:
File name extension to .json
MIME type to application/json

Add a json handler
In the Properties page of your specific application:
Open Handler Mappings panel
Click Add Script Map link
A pop up will open, set:
Request path to *.json
Executable to [Browse to asp.dll, that may be located at C:\Windows\System32\inetsrv]
Name JSON
---