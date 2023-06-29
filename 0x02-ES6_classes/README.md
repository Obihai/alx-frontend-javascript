# ES6 Classes

This repository contains JavaScript code implementing various tasks related to ES6 classes. Each task corresponds to a separate file in the repository.

## Table of Contents
1. [Task 0: ClassRoom](#task-0-classroom)
2. [Task 1: Make Classrooms](#task-1-make-classrooms)
3. [Task 2: Holberton Course](#task-2-holberton-course)
4. [Task 3: Currency](#task-3-currency)
5. [Task 4: Pricing](#task-4-pricing)
6. [Task 5: Building](#task-5-building)
7. [Task 6: SkyHigh Building](#task-6-skyhigh-building)
8. [Task 7: Airport](#task-7-airport)
9. [Task 8: Holberton Class](#task-8-holberton-class)
10. [Task 9: StudentHolberton](#task-9-studentholberton)
11. [Task 10: Car](#task-10-car)

---

## Task 0: ClassRoom
- File: [0-classroom.js](./0x02-ES6_classes/0-classroom.js)
- Description: This file implements a class named `ClassRoom` with a constructor that accepts an attribute `maxStudentsSize` (Number) and assigns it to `_maxStudentsSize`.

## Task 1: Make Classrooms
- File: [1-make_classrooms.js](./0x02-ES6_classes/1-make_classrooms.js)
- Description: This file implements a function named `initializeRooms` that returns an array of 3 `ClassRoom` objects with sizes 19, 20, and 34 (in this order).

## Task 2: Holberton Course
- File: [2-hbtn_course.js](./0x02-ES6_classes/2-hbtn_course.js)
- Description: This file implements a class named `HolbertonCourse` with constructor attributes `name` (String), `length` (Number), and `students` (array of Strings). It also includes getters and setters for each attribute.

## Task 3: Currency
- File: [3-currency.js](./0x02-ES6_classes/3-currency.js)
- Description: This file implements a class named `Currency` with constructor attributes `code` (String) and `name` (String). It includes getters and setters for each attribute, as well as a method `displayFullCurrency` that returns the attributes in the format `name (code)`.

## Task 4: Pricing
- File: [4-pricing.js](./0x02-ES6_classes/4-pricing.js)
- Description: This file imports the `Currency` class from `3-currency.js` and implements a class named `Pricing` with constructor attributes `amount` (Number) and `currency` (Currency). It includes getters and setters for each attribute, as well as a method `displayFullPrice` that returns the attributes in the format `amount currency_name (currency_code)`. Additionally, it includes a static method `convertPrice` that accepts `amount` and `conversionRate` as arguments and returns the converted amount.

## Task 5: Building
- File: [5-building.js](./0x02-ES6_classes/5-building.js)
- Description: This file implements an abstract class named `Building` with a constructor attribute `sqft` (Number). It includes a getter for `sqft` and requires any class that extends it to implement a method named `ev

acuationWarningMessage`.

## Task 6: SkyHigh Building
- File: [6-sky_high.js](./0x02-ES6_classes/6-sky_high.js)
- Description: This file imports the `Building` class from `5-building.js` and implements a class named `SkyHighBuilding` that extends `Building`. It overrides the `evacuationWarningMessage` method to return the string "Evacuate slowly".

## Task 7: Airport
- File: [7-airport.js](./0x02-ES6_classes/7-airport.js)
- Description: This file implements a class named `Airport` with constructor attributes `name` (String) and `code` (String). It includes a method `toString` that returns the string representation of the airport object in the format "NAME (CODE)".

## Task 8: Holberton Class
- File: [8-hbtn_class.js](./0x02-ES6_classes/8-hbtn_class.js)
- Description: This file implements a class named `HolbertonClass` with constructor attributes `size` (Number) and `location` (String). It includes getters and setters for each attribute.

## Task 9: StudentHolberton
- File: [9-student_hbtn.js](./0x02-ES6_classes/9-student_hbtn.js)
- Description: This file imports the `HolbertonClass` class from `8-hbtn_class.js` and implements a class named `StudentHolberton` that extends `HolbertonClass`. It includes a static method `displayClass` that returns the string "No Class Available" if the `size` attribute is less than 1, or "Classroom available" if the `size` attribute is 1 or greater.

## Task 10: Car
- File: [10-car.js](./0x02-ES6_classes/10-car.js)
- Description: This file implements a class named `Car` with constructor attributes `brand` (String), `motor` (String), and `color` (String). It includes a method `cloneCar` that returns a new `Car` object with the same attributes as the original object.

---

## Dependencies

To run and test the code in this repository, you need to install the following dependencies:

- Jest: `npm install --save-dev jest`
- Babel: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
- ESLint: `npm install --save-dev eslint`

## Configuration Files

### package.json

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "@babel/node": "^7.8.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

### babel.config.js

```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },


      },
    ],
  ],
};
```

### .eslintrc.js

```javascript
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

Don't forget to run `npm install` to install the required dependencies when you have the `package.json` file.