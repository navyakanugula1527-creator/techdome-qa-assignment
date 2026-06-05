# Techdome QA Engineer Assignment - Playwright Test Suite

This repository contains a comprehensive Playwright test suite for [techdome.io](https://techdome.io), including E2E, Integration, Security, and Load tests.

## Project Structure

```
techdome-assignment/
├── tests/
│   ├── e2e/                    # End-to-end tests
│   │   ├── homepage.spec.ts
│   │   ├── navigation.spec.ts
│   │   ├── contactPage.spec.ts
│   │   ├── contactCTA.spec.ts
│   │   ├── careers.spec.ts
│   │   ├── footer.spec.ts
│   │   ├── mobile375.spec.ts
│   │   └── mobile768.spec.ts
│   ├── integration/            # API and network tests
│   │   ├── statusCode.spec.ts
│   │   ├── contactNetwork.spec.ts
│   │   └── thirdPartyScripts.spec.ts
│   ├── security/               # Security tests
│   │   ├── securityHeaders.spec.ts
│   │   ├── xss.spec.ts
│   │   └── dataExposure.spec.ts
│   └── load/                   # Load tests (max 5 concurrent users)
│       └── load.spec.ts
├── docs/
│   ├── user-story-map.md       # Detailed user stories and acceptance criteria
│   ├── claude-code-log.md      # Claude Code usage and judgment calls
│   ├── bugs.md                 # Bug report and findings
│   └── load-test-results.md    # Load test performance metrics
├── playwright.config.ts        # Playwright configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## Installation

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Setup
```bash
# Install dependencies
npm install

# Verify Playwright installation
npx playwright --version

# Install browsers (if not already installed)
npx playwright install
```

## Running Tests

### Run All Tests
```bash
npm test
```

### Run Specific Test Suites
```bash
# E2E Tests only
npm run test:e2e

# Integration Tests only
npm run test:integration

# Security Tests only
npm run test:security

# Load Tests only
npm run test:load
```

### Run with UI Mode
```bash
npm run test:ui
```

### Debug Mode
```bash
npm run test:debug
```

### Run Tests in Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run Single Test File
```bash
npx playwright test tests/e2e/homepage.spec.ts
```

## Test Configuration

Tests are configured in `playwright.config.ts` with the following settings:
- **Test Directory:** `./tests`
- **Trace Recording:** On-first-retry
- **Reporters:** HTML report
- **Browser Coverage:** Chromium, Firefox, and WebKit
- **Timeout:** 30 seconds

## Test Categories

### E2E Tests (tests/e2e/)
Full user journey testing covering:
- Page loading and navigation
- Contact form submission
- Mobile responsiveness (375px, 768px)
- CTA and link functionality
- Footer accessibility

**Minimum:** 8 tests

### Integration Tests (tests/integration/)
API and network layer testing:
- Network request validation
- HTTP status code verification
- Third-party script loading
- Form data transmission

**Minimum:** 3 tests

### Security Tests (tests/security/)
Security vulnerability and header testing:
- HTTP security headers
- XSS injection prevention
- Sensitive data exposure
- CSP and HSTS validation

**Minimum:** 3 tests

### Load Tests (tests/load/)
Performance and concurrency testing:
- 5 concurrent user simulation
- Response time measurement (p95 < 3s)
- Error rate validation
- Zero 5xx errors required

**Hard Limit:** 5 concurrent users

## Test Results

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Documentation

- **[User Story Map](./docs/user-story-map.md)** - Detailed user stories covering all test scenarios
- **[Claude Code Log](./docs/claude-code-log.md)** - AI-assisted development and decision-making process
- **[Bug Report](./docs/bugs.md)** - Issues found during testing with severity levels
- **[Load Test Results](./docs/load-test-results.md)** - Performance metrics and analysis

## Key Test Scenarios

### Homepage
✅ Loads with correct title and metadata  
✅ All navigation links functional  
✅ Responsive at 375px and 768px viewports  

### Contact Form
✅ Accepts valid submissions  
✅ Validates required fields  
✅ Sanitizes XSS injection attempts  
✅ Sends correct POST request payload  

### Security
✅ Includes X-Frame-Options, CSP, HSTS headers  
✅ Prevents script execution from form inputs  
✅ No sensitive data exposure in page/network  

### Performance
✅ Handles 5 concurrent users  
✅ p95 response time < 3 seconds  
✅ Zero HTTP 5xx errors under load  

## Known Constraints

- **Load Test Limit:** Maximum 5 concurrent users (hard constraint)
- **Test Timeout:** 30,000 ms per test
- **Website Under Test:** https://techdome.io (no test environment available)
- **Browsers:** Chromium, Firefox, WebKit desktop only

## Troubleshooting

### Tests Failing
1. Ensure you're connected to the internet (tests run against live site)
2. Check if techdome.io is accessible
3. Clear browser cache: `rm -rf test-results/`
4. Reinstall browsers: `npx playwright install`

### Port Already in Use
The tests don't require local ports, but if experiencing network issues:
```bash
npx playwright test --workers=1  # Run serially
```

### Timeout Issues
Increase timeout in playwright.config.ts or pass via CLI:
```bash
npx playwright test --timeout=60000
```

## CI/CD Integration

To run tests in CI/CD pipeline:

```yml
# Example GitHub Actions
- name: Install dependencies
  run: npm install --legacy-peer-deps

- name: Install Playwright Browsers
  run: npx playwright install --with-deps

- name: Run Playwright tests
  run: npm test
```

## Browser Support

Tests are configured for:
- ✅ Chromium (Chrome, Edge)
- ✅ Firefox
- ✅ WebKit (Safari)

Tests run on desktop viewports. Mobile testing is emulated via Playwright's device configurations.

## Performance Targets

- **Page Load:** < 3 seconds
- **p95 Response Time (Load):** < 3000 ms
- **Form Submission:** < 2 seconds
- **Error Rate:** 0% (5xx errors)

## Contact & Support

For questions about:
- **Test Structure:** Refer to `docs/user-story-map.md`
- **Issues Found:** See `docs/bugs.md`
- **AI Usage:** Check `docs/claude-code-log.md`
- **Load Test Data:** Review `docs/load-test-results.md`

## Assignment Resources

- **Website:** https://techdome.io
- **Hiring:** [Techdome Careers](https://techdome.io)
- **Contact:** careers@techdome.net.in

---

**Last Updated:** June 2026  
**Test Framework:** Playwright v1.60.0  
**Node Version:** 16+  
**Status:** ✅ All tests passing
