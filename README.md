# WhatsApp Lite

* [Getting started](#getting-started)
  * [What is WhatsApp Lite](#what-is-whatsapp-lite)
  * [Green API](#green-api)
  * [Run the app](#run-the-app)
* [Usage](#usage)

## Getting started

### What is WhatsApp Lite
WhatsApp Lite is just a simplified version of the well-known messenger WhatsApp. You don't need to log in with your phone number and password. Instead, you can link your account to the API instance using a QR code and chat with people just like in the WhatsApp messenger.

### Green API
Green API is a free WhatsApp API for developers. To receive and send messages on WhatsApp, you need to sign up on the [official website](https://green-api.com), and then create an instance.

![image](https://github.com/TarasDemchenkooo/WhatsApp-Lite/assets/111509370/6c315af6-b53f-48f0-ba0d-f4f0f0b4e071)

After that, open the WhatsApp app and go to the "Linked Devices" section. Scan the QR code, which you can find by clicking on the created instance.

![image](https://github.com/TarasDemchenkooo/WhatsApp-Lite/assets/111509370/905c649f-b8a8-4276-b172-8d79fedbae3d)

### Run the app
Clone the project with the following command:
```
$ git clone https://github.com/TarasDemchenkooo/WhatsApp-Lite.git
$ cd WhatsApp-Lite
```
Install all packages and run the project:
```
$ npm i
$ npm run dev
```
The [application](https://localhost:3001) will run on the localhost on port 3001.

## Usage
This is the login page. Here, you need to enter your ApiToken and Id, which you can find on the page of the instance you created in Green API.

![image](https://github.com/TarasDemchenkooo/WhatsApp-Lite/assets/111509370/536cce09-d2f4-4fbc-a2d4-71e542e55e66)

Search Page. Enter the phone number of the person you want to chat with.

![image](https://github.com/TarasDemchenkooo/WhatsApp-Lite/assets/111509370/8bab1d79-b432-4080-ad05-a8aa676d3077)

Chat Page. Here you can chat with people.

![image](https://github.com/TarasDemchenkooo/WhatsApp-Lite/assets/111509370/068fbe6a-b608-4cad-9533-9c52874cbecb)