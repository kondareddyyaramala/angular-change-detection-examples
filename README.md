This is a sample project that showcases how the change detection run in angular onPush/default

It's a pretty simple application where you have a root component and it has one child comp
and the child one component has child two component


Firstly, why do we need to worry about change detection in Angular ?

  Well, in most cases you don't really need to worry about the change detection in Angular because Angular is capable of runninng change detection in a matter of few ms in most of the cases. But things get complicated when we are building an enterprise application where the complexity of the app increases as the new feature requests comes in. In such cases, it is really beneficial to know how the change detection works in Angular because that is the first place where you can optimize your application.


  Default change change detection strategy:  By default Angular runs the change detection when ever there is an event occurs


  OnPush: This takes care of running change detection in the child component only when the @Input changes