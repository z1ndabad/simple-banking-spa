# Simple Banking SPA

This mocked-up banking SPA simulates user money transfers, reflecting new transfers in a searchable list of transactions. The transaction list supports a basic clearable search and persistent sorting.

## Installation/running

- Prerequisites: NPM, Angular CLI v9
- Clone or download and unzip the repo at https://github.com/TSamee/simple-banking-spa
- Open a terminal window in the 'simple-banking-spa-master' folder
- Run 'npm install' to install dependencies
- Once dependencies are installed, run 'npm run api' to start a local JSON server feeding mock API data
- In a second terminal window opened to the project directory, run 'ng serve'

##Application Structure
The application's Home component handles data retrieval and routing, using a singleton service to request data from the mocked API, and relay new transactions to the API when the user enters them. Child components receive data from Home and perform any transformations necessary for display. The Transfer Panel and Transfer Preview components communicate with Home directly, since their display needs are simple. On the other hand, the 'recent transactions' UI panel comprises separate components for processing the list and displaying it, with the Transactions Sort Container component retrieving data from Home, handling search and filter state, and passing a filtered copy of the original data to the Transaction List.
