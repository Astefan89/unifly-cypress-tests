# Unifly Cypress E2E Tests

## Overview
End-to-end tests for the Unifly Map page using Cypress and the Page Object Model (POM).

The tests cover:
- Language switching (Deutsch)
- Location search (Paris)
- API validation using `cy.intercept()`
- UI verification after user actions

---

## Setup

Install dependencies:
```
npm install
```

Run tests in interactive mode:
```
npm run cy:open
```

Run tests in headless mode:
```
npm run cy:run
```

---

## Structure

- `cypress/pages` → Page Objects (selectors, actions, assertions)
- `cypress/e2e` → Test specifications
