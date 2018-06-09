# PDC-Battle
This is an app built for the Fitbit Versa that lets you battle against Pokemon trainers to see who can get the most steps!

As this is not my IP, I am not able to upload this onto the GAM, but follow these instuctions to deploy the app on your device as a developer.

## How to Install
(taken from the sdk-oauth tutorial)

1. You must first register a Web Application on
   [dev.fitbit.com](https://dev.fitbit.com/apps/new) to get an OAuth ID and
   secret. Configure the application as:

- OAuth 2.0 Application Type: **Personal**
- Callback URL:
  **https://app-settings.fitbitdevelopercontent.com/simple-redirect.html**
  
2. Download the PDC-Battle files and create an empty project in Fitbit Studio. Copy over all the files (except the readme).

2. Enter your **OAuth 2.0 Client ID** and **Client Secret** into
   `settings/index.jsx`

3. After installing the project from Fitbit Studio, you need to login to the
   Fitbit Web API using the settings page within the Fitbit mobile application
   
## Connecting to the web API

If you try to sync your app without giving the correct permissions, you will be directed to the error screen.
To fix this, go to:
your Fitbit app > click the versa icon on the top left > Developer Menu > PDC Battle (under sideloaded apps) > settings > login > follow the prompts.

This will grant permissions for a limited time. You will need to repeat this process every time the permissions expire.

## How to Play

There is no tutorial in PDC, the limited memory space really doesn't allow it. So, here's how to use PDC:

### Syncing Steps

Synchronizing steps isn't too much of a hassle in PDC. 
Once a battle is complete, clicking the view results on the home page will get your steps and show the battle results.

### Menu

To access the PDC menu, click the top right button of your Versa. From there, you'll be able to return to the main page, view trainers, and view your badges stats. On any of the trainer lists/details page, press the bottom right button to go back to your last page. Press the top right button on the trainer menu to get back to the main menu, then home to get to the main page.

### Battles

When on a trainers detail page, you'll see a "Battle!" button. When you click this button, a timer will start and you will have 30 minutes to get as many steps as possible. Once the timer is up, the home page will have a button to the results page, and you'll be able to see your steps, as well as your opponents.

#### Elite Four and Champion

The elite four and champion won't be challenge-able until you've beaten the Kanto Gym Leaders.
They are very tough challengers, so you'll need to really run like you mean it!

### Badges and Stats

This page shows your badges (if any), as well as your total wins, losses, and highest steps result.

## Find a bug/error?

My testing on the Fitbit Simulator proved to find no errors. However, if you seem to find something you think shouldn't be, please let me know.
