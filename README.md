# store-challenge

This project is built with **Cypress** and **JavaScript**. The tests are designed to run in both English (`en`) and Japanese (`ja`).

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v12 or higher)
- **npm** (v6 or higher)

### Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/Samplezt/store-challenge.git
    ```

2. Navigate to the project directory:

    ```bash
    cd store-challenge
    ```

3. Install the project dependencies:

    ```bash
    npm install
    ```

## Running the Tests

### Headless Mode

You can run the tests in headless mode, which means they will execute without displaying the browser. To do so, use the following commands:

- To run the tests in **English**:

    ```bash
    npm run test:en
    ```

- To run the tests in **Japanese**:

    ```bash
    npm run test:ja
    ```

### Debug Mode (Interactive Mode)

If you want to see the tests running in real-time in the browser, you can use **debug mode**. This will open the browser interface where you can watch the tests being executed:

- To run the tests in **English (Debug)**:

    ```bash
    npm run test:en:debug
    ```

- To run the tests in **Japanese (Debug)**:

    ```bash
    npm run test:ja:debug
    ```

## Test Reports

Once the tests are completed, you can find the generated test reports here: **`cypress/reports/index.html`**