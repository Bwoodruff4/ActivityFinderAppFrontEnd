# The Activity Finder

## Table of Contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)
* [License](#license)

## General Info

The Activity Finder is a full-stack app which takes a user’s location and randomly suggests an activity for the user to do based on current real-time weather information. All U.S. zip codes are supported. Users are able to edit their preferred location and add weather-specific activities to the database.

![Demonstration Video](https://github.com/Bwoodruff4/ActivityFinderAppFrontEnd/blob/master/zoom_1.mp4)

## Technologies

* HTML 5.0
* CSS 3.0
* Ruby - Version 2.6.1
* Rails 6.0
* ActiveRecord - Version 6.0 
* Sinatra - Version 2.0
* Sinatra-activerecord -  Version 2.0
* SQLite3 - Version 1.4

### API

#### Open Weather
https://openweathermap.org/api

#### Activity Finder Back End
https://github.com/Bwoodruff4/ActivityFinderApp


## Setup

This program comes equipped with all necessary gems. To use them locally, execute the command:

`$ bundle`

To install and use the database, run the commands:

`$ rake db:seed `

and 

`$ rake db:migrate`

Run the program by: 

`rails s to start rails server`
`lite-server to serve the web app and open it in a browser`

By default, rails back end runs on localhost:3000 and front end runs on localhost:3001

    
## Features

* User login
* Update user information
* New user creation
* New activity creation
* Activity suggestion based on current weather

## Status

Project is: completed with option to add future functionality.

## Contact

Created by [Blake Woodruff](http://www.linkedin.com/in/blakewoodruffengineer)
[Chris Banta](http://www.linkedin.com/in/chris-banta)
[Jeremy Hart](http://www.linkedin.com/in/jeremy-hart-7b84901a2)
