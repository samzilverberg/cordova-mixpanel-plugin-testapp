## Test App for the [cordova mixpanel plugin at](https://github.com/samzilverberg/cordova-mixpanel-plugin)

I recommend and am using the ionic framework to run this app.
However it is not required, you can also use plain cordova.

#### prerequisites:
- cordova and/or ionic
- ios-sim if want to emulate ios ``` npm install -g ios-sim ```
- add your platform: ``` ionic platform add ios ```
- restore ionic plugin state from package.xml: ``` ionic state restore ```


#### Emulate or run the Test App:
```
ionic emulate ios
or
ionic run ios
```

### Troubleshooting

if you run into build errors, try this kind of cleanup:
```
cordova plugin rm com.samz.mixpanel && cordova plugin add com.samz.mixpanel
cordova platforms rm ios && cordova platforms add ios
```
