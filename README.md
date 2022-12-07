# nopCommerce test automation

## About the Project

This project checks end to end order placement flow in nopCommerce website.

Different test scenarios has been covered to validate the order placement.

## Build with 

This project is build with below frameworks/libraries for checking the order placement.

* Cypress
* Cucumber Framework

## Getting started

Follow below steps to setup cypress locally. 

### Prerequisites

* nodejs
* npm 
* cypress 
* cucumber 


## Installation

The steps below will take you all the way through Cypress. 

It is assumed you have nothing installed except for node + git.

### 1. Install Cypress and Cucumber 

Below commands to install node modules and run cypress with cucumber locally. 

The `npm install` will automatically download cypress and cucumber for running the test automation. 

The dependencies are added in the package.json file. 

```bash
## clone this repo to a local directory
git clone https://github.com/nandhu88/nop-test-automation.git

## cd into the cloned repo
cd nop-test-automation

## install the node_modules
npm install

## run cypress through cypress runner. 

npm run cy:open

## run cypress with dashboard monitoring

npm run cy:dashboard

or 

## run cypress in headless mode

npm run cy:run
```


### 3. Cypress dashboard

The cypress test result are shown in Cypress dashboard. 

Failure results are notified in Slack channel 

