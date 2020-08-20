![image](https://user-images.githubusercontent.com/13851807/90454511-df711580-e0c9-11ea-93cb-d540c4641da2.png)

[![Build Status](https://travis-ci.org/JDonadio/random-user.svg?branch=master)](https://travis-ci.org/JDonadio/random-user)
[![Coverage Status](https://coveralls.io/repos/github/JDonadio/random-user/badge.svg?branch=develop)](https://coveralls.io/github/JDonadio/random-user?branch=develop)

# Random User App

Simple Ionic 5 application using Angular 9 and Capacitor.
This app connects with https://randomuser.me/ API to retrieve all data needed.

## Features

* Fancy Animations - [GitHub Repository](https://github.com/mhartington/v5-animations)
* Pagination and State management using [NGXS](https://www.ngxs.io/)
* Takes pictures using the native [camera plugin](https://github.com/apache/cordova-plugin-camera)

## Prerequisites

Must have installed:

```
1- Ionic v5
2- Nodejs v10+
```

Optional:

* Android Studio (or Android SDK) to run the app natively.

## Installation

```
1- Clone the repository
2- cd random-user
3- Use the package manager npm to install Random User typing:
```

```bash
npm install
```

## Runing

* On browser:

```bash
ionic serve
```

* Native:
```bash
ionic capacitor add android 
//Add a new platform specific folder


ionic capacitor copy android
//Perform an Ionic build, which compiles web assets and copy web assets to Capacitor native platform


ionic capacitor open android
//Open the Android Studio IDE for your native project
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
