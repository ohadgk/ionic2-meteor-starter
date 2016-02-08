# ionic2-meteor-starter 

*Ionic2 is in alpha, angular2 is in beta and this package will use meteor 1.3 eventually, which is also in beta. Everything is very basic and future to change. But this is a very good point to start development using this frameworks, when those frameworks will be ready you can already have the code of your project ready for them.*

This package bundles ionic2 and meteor.
It adds to an ionic2 project meteor abilities.
For meteor-ionic2 integration I suggest [this](https://github.com/barbatus/ionic2-meteor.git) atmosphere package.

I found that most of the products includes an app and a website/io,
so what I have done here is adding a full meteor project inside my ionic project.

The meteor-core folder contains a server folder which contains the server logic and
a client folder that contains the web-client/io that will be served from your deploy URL.

In the index.html you can configure to which meteor server the ionic application will connect thanks to the [angular2-meteor-package](https://www.npmjs.com/package/angular2-meteor-client).
It also wher meteor packages like acconts-password sould be installed so they could be exposed to the ionic2 app.

The meteor-core contains all the dependencies from the bootstrap chapter of [this amazing and very recommended angular2-meteor tutorial](http://www.angular-meteor.com/tutorials/socially/angular2/bootstrapping).

## installation 

you must have ionic2 cli and meteor 1.2+ installed.
you also must have tsd installed globally (zone.js postinstall script runing tsd install)

``` bash
git clone https://github.com/Muffasa/ionic2-meteor-starter.git
cd ionic2-meteor-starter
npm install
ionic serve

```
right now the app connecting to ionic2.meteor.com (see www/index.html).
You can go [there](http://ionic2.meteor.com/) and see the reactivity in your real device if you want.

In order to connect the ionic application to the meteor-core/server first you need to run it:
``` bash
cd meteor-core
meteor
```

wait for the build to finish and go to the URL, then tell the ionic app to connect to this same URL.
(the default meteor dev deploy URL is localhost:3000).
Now you can develop your own server, when finish prototyping meteor deploy it for example, and change the 
``` html
<script>DDP_DEFAULT_CONNECTION_URL = 'http://ionic2.meteor.com';</script>
```
to
``` html
<script>DDP_DEFAULT_CONNECTION_URL = 'http://<your-app-name>.meteor.com';</script>
```
