# nopCommerce test automation

## About the Project

This project checks end to end order placement flow in nopCommerce website.

Different test scenarios has been covered to validate the order placement.

## Build with 

This project is build with below frameworks/libraries.

* Cypress
* Cucumber Framework
* POM 

## Getting started

Follow below steps to setup cypress locally. 

### Prerequisites

* nodejs
* npm 
* cypress 
* cucumber 


## Installation

The steps below will take you all the way through Cypress. 

### 1. Install nodejs

It is advised to have latest version of node.js and npm to run the cypress test.

Install using below command. 

```bash
## brew install node
brew install node 

## check node version 
node -v

## check npm version
npm -v
```

### 2. Install Cypress and Cucumber 

Follow the below commands to install node modules and run cypress with cucumber locally. 

The `npm install` will automatically download cypress and cucumber for running the test automation. 

```bash
## clone this repo to a local directory
git clone https://github.com/nandhu88/nop-test-automation.git

## cd into the cloned repo
cd nop-test-automation

## install the node_modules
npm install

## to execute the cypress test in browser mode. 
npm run cy:open

## to execute the cypress test with dashboard monitoring
npm run cy:dashboard

## to execute the cypress test in headless mode
npm run cy:run
```

### 3. Cypress dashboard

The cypress test result are shown in Cypress dashboard. 

Failure results are notified in Slack channel. 

