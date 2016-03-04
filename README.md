# Ionic2-meteor-starter 

*Ionic2 & angular2 are in beta and this package will use meteor 1.3 eventually, which is also in beta. Everything is very basic and future to change. But this is a very good starting point to use and learn these frameworks. When those frameworks will be ready you can already have large part of the code of your project ready for them.*

This package bundles ionic2 and meteor.
It adds to an existing ionic2 project meteor client abilities and meteor backend.
For meteor-ionic2 integration I suggest [this](https://github.com/barbatus/ionic2-meteor.git) atmosphere package.

I found that most of the products in general includes an app and a website/io,
so what I have done here is adding a full meteor project inside my ionic project.

The meteor-core folder contains a server folder which contains the server logic and
a client folder that contains the web-client/io that will be served from your deploy URL.

In the index.html you can configure to which meteor server the ionic application will connect thanks to the [angular2-meteor-package](https://www.npmjs.com/package/angular2-meteor-client).
It also where meteor packages like accounts-password should be installed so they could be exposed to the ionic2 app.

The meteor-core contains all the dependencies from the bootstrap chapter of [this very recommended angular2-meteor tutorial](http://www.angular-meteor.com/tutorials/socially/angular2/bootstrapping).

## Installation 
**make sure you use npm 3.x**

You must have ionic2 cli cordova and meteor 1.2+ installed:

Install ionic2 cli and cordova:

``` sudo npm install -g ionic@beta cordova```

Install meteor:

   ```curl https://install.meteor.com/ | sh ```
   
You also must have tsd installed globally because zone.js postinstall script runs tsd install:

``` sudo npm install -g tsd```

After your system is ready you can clone the repository, install the dependencies, and run the app:


``` bash
git clone https://github.com/Muffasa/ionic2-meteor-starter.git
cd ionic2-meteor-starter
npm install
ionic serve

```
Page2 is where the magic happen. The MeteorComponent class is used to 'watch' the parties and display them a any given moment, reactively.  (see the [angular2-meteor tutorial](http://www.angular-meteor.com/tutorials/socially/angular2/bootstrapping) for more details)
Right now the app connecting to ionic2.meteor.com (see www/index.html).
You can go [there](http://ionic2.meteor.com/) add new parties and see the reactivity in your real device if you want.

In order to connect the ionic application to the meteor-core/server first you need to run it:
``` bash
cd meteor-core
meteor
```

Wait for the build to finish and go to the output URL, then tell the ionic app to connect to this URL:
change this
``` html
<script>DDP_DEFAULT_CONNECTION_URL = 'http://ionic2.meteor.com';</script>
```
to
``` html
<script>DDP_DEFAULT_CONNECTION_URL = 'http://localhost:3000';</script>
```

(the default meteor dev deploy URL is localhost:3000).


Now you can develop your own server, when finish prototyping use [mup](https://github.com/arunoda/meteor-up) to deploy it to your own virtual machine or just run ```meteor deploy``` for example, and change the 
``` html
<script>DDP_DEFAULT_CONNECTION_URL = 'http://ionic2.meteor.com';</script>
```
to
``` html
<script>DDP_DEFAULT_CONNECTION_URL = 'http://<your-app-name>.meteor.com';</script>
```
