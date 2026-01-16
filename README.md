# 🚀 JavaScript Automation Framework

**Unified automation framework combining Web (Playwright) and Mobile (WebdriverIO) testing**

[![Node.js](https://img.shields.io/badge/Node.js-18.0.0+-brightgreen)](https://nodejs.org/)
[![Playwright](https://img.shields.io/badge/Playwright-1.48.0-blue)](https://playwright.dev)
[![WebdriverIO](https://img.shields.io/badge/WebdriverIO-8.16.12-orange)](https://webdriver.io/)
[![Allure](https://img.shields.io/badge/Allure-2.32.0-EE1B22)](https://allure-framework.github.io/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Web Testing (Playwright)](#-web-testing-playwright)
- [Mobile Testing (WebdriverIO)](#-mobile-testing-webdriverio)
- [Running Tests](#-running-tests)
- [Reporting](#-reporting)
- [Technologies](#-technologies)

---

## 🎯 Overview

This unified framework combines two powerful automation solutions:

- **Web Testing**: Playwright-based framework for E2E and API testing
- **Mobile Testing**: WebdriverIO-based framework for mobile and API testing

Both frameworks share:
- ✅ Allure reporting
- ✅ API testing capabilities
- ✅ Data generation with Faker.js
- ✅ Code quality tools (ESLint + Prettier)
- ✅ CI/CD integration

---

## 🏗️ Project Structure

```
javascript_framework/
├── 📁 web/                    # Playwright framework
│   ├── src/
│   │   ├── api/              # API testing
│   │   └── e2e/              # E2E testing
│   ├── tests/
│   │   ├── api/              # API tests
│   │   └── e2e/              # E2E tests
│   ├── playwright.config.js
│   └── package.json
│
├── 📁 mobile/                # WebdriverIO framework
│   ├── src/
│   │   ├── api/              # API testing
│   │   └── mobile/           # Mobile testing
│   ├── tests/
│   │   ├── api/              # API tests
│   │   └── mobile/           # Mobile tests
│   ├── wdio.api.conf.js
│   ├── wdio.mobile.conf.js
│   └── package.json
│
├── package.json              # Root package.json
├── README.md
└── .gitignore
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone git@github.com:Polishevskyi/javascript_framework.git
cd javascript_framework

# Install all dependencies
npm run install:all

# Install Playwright browsers (for web tests)
cd web && npx playwright install && cd ..
```

### Configuration

#### Web Framework

```bash
cd web
cp .env.example .env
# Edit .env with your configuration
```

#### Mobile Framework

```bash
cd mobile
cp .env.example .env
# Edit .env with your configuration
```

---

## 🌐 Web Testing (Playwright)

### Features

- ✅ E2E testing with Page Object Pattern
- ✅ API testing with models
- ✅ Cross-browser testing (Chromium, Firefox, WebKit)
- ✅ Multiple viewports (Desktop, Mobile, Tablet)
- ✅ Allure reporting with screenshots and videos

### Running Web Tests

```bash
# From root directory
npm run test:web              # Run all web tests
npm run test:web:e2e          # Run E2E tests only
npm run test:web:api          # Run API tests only
npm run test:web:chrome       # Run on Chrome
npm run test:web:headed       # Run with visible browser

# Or from web directory
cd web
npm test
```

### Documentation

See [web/README.md](web/README.md) for detailed documentation.

---

## 📱 Mobile Testing (WebdriverIO)

### Features

- ✅ Mobile app testing with Appium
- ✅ BrowserStack cloud testing
- ✅ API testing
- ✅ Page Object Model with Proxy Pattern
- ✅ Allure reporting

### Running Mobile Tests

```bash
# From root directory
npm run test:mobile           # Run all mobile tests
npm run test:mobile:api       # Run API tests only
npm run test:mobile:mobile    # Run mobile tests only
npm run bs:upload-app         # Upload APK to BrowserStack

# Or from mobile directory
cd mobile
npm test
```

### Documentation

See [mobile/README.md](mobile/README.md) for detailed documentation.

---

## ▶️ Running Tests

### All Tests

```bash
# Run both web and mobile tests
npm test
```

### Individual Frameworks

```bash
# Web only
npm run test:web

# Mobile only
npm run test:mobile
```

### Code Quality

```bash
# Lint all projects
npm run lint

# Format all projects
npm run format

# Check formatting
npm run format:check
```

---

## 📊 Reporting

### Generate Reports

```bash
# Generate Allure reports for both frameworks
npm run allure:generate

# Generate for specific framework
npm run allure:generate:web
npm run allure:generate:mobile

# Serve report
npm run allure:serve

# Open report
npm run allure:open
```

---

## 🛠️ Technologies

### Web Framework

- **[Playwright](https://playwright.dev)** - E2E and API testing
- **[Allure Playwright](https://github.com/allure-framework/allure-js)** - Reporting
- **[Faker.js](https://fakerjs.dev)** - Test data generation

### Mobile Framework

- **[WebdriverIO](https://webdriver.io)** - Automation framework
- **[Appium](https://appium.io)** - Mobile testing
- **[BrowserStack](https://browserstack.com)** - Cloud testing
- **[Allure WebdriverIO](https://github.com/allure-framework/allure-js)** - Reporting

### Shared Tools

- **[Allure](https://allure-framework.github.io)** - Test reporting
- **[ESLint](https://eslint.org)** - Code quality
- **[Prettier](https://prettier.io)** - Code formatting
- **[Faker.js](https://fakerjs.dev)** - Test data generation

---

## 📝 License

ISC

---

<div align="center">

**Made with ❤️ by Polishevskyi**

[![GitHub](https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github)](https://github.com/Polishevskyi)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/polishevskyi/)

</div>
