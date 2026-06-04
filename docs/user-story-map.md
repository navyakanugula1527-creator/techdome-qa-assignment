# User Story Map

## US-001

Title: Homepage Loads Successfully

As a: Visitor

I want to: Open the homepage

So that: I can understand Techdome's services

Acceptance:

* [ ] Homepage loads successfully
* [ ] Correct page title is displayed
* [ ] Hero section is visible

Test Type: E2E

Priority: P0

---

## US-002

Title: Navigate to About Us

As a: Visitor

I want to: Access the About Us page

So that: I can learn about the company

Acceptance:

* [ ] About Us link is visible
* [ ] Clicking the link opens the About Us page

Test Type: E2E

Priority: P0

---

## US-003

Title: Access Careers Page

As a: Job Seeker

I want to: Open the Careers page

So that: I can explore job opportunities

Acceptance:

* [ ] Careers page loads successfully
* [ ] Careers content is visible

Test Type: E2E

Priority: P1

---

## US-004

Title: Open Contact Page

As a: Prospect

I want to: Access the Contact page

So that: I can contact Techdome

Acceptance:

* [ ] Contact page loads successfully
* [ ] Contact form is displayed

Test Type: E2E

Priority: P0

---

## US-005

Title: Submit Contact Information

As a: Prospect

I want to: Fill contact details

So that: I can send an enquiry

Acceptance:

* [ ] Company field accepts input
* [ ] First Name field accepts input
* [ ] Last Name field accepts input

Test Type: E2E

Priority: P0

---

## US-006

Title: Mobile Homepage Experience

As a: Mobile User

I want to: Browse the site on a mobile device

So that: I can access information easily

Acceptance:

* [ ] Homepage loads on 375px viewport
* [ ] Content remains visible

Test Type: E2E

Priority: P1

---

## US-007

Title: Tablet Homepage Experience

As a: Tablet User

I want to: Browse the site on a tablet

So that: I can access information without layout issues

Acceptance:

* [ ] Homepage loads on 768px viewport
* [ ] Content remains visible

Test Type: E2E

Priority: P1

---

## US-008

Title: Footer Accessibility

As a: Visitor

I want to: Access footer links

So that: I can view additional resources

Acceptance:

* [ ] Footer is visible
* [ ] Privacy Policy link is displayed

Test Type: E2E

Priority: P2

---

## US-009

Title: Verify Network Responses

As a: QA Engineer

I want to: Validate response codes

So that: I can ensure service availability

Acceptance:

* [ ] Homepage returns successful response
* [ ] No unexpected server errors

Test Type: Integration

Priority: P0

---

## US-010

Title: Validate Third-Party Resources

As a: QA Engineer

I want to: Verify external resources load

So that: The website functions correctly

Acceptance:

* [ ] Script resources are loaded
* [ ] Page remains functional

Test Type: Integration

Priority: P1

---

## US-011

Title: Verify Security Headers

As a: Security Reviewer

I want to: Check response headers

So that: The application follows security best practices

Acceptance:

* [ ] X-Frame-Options present
* [ ] Content-Security-Policy present
* [ ] Strict-Transport-Security present

Test Type: Security

Priority: P0

---

## US-012

Title: Prevent Script Injection

As a: Security Reviewer

I want to: Test form inputs

So that: Script injection vulnerabilities are identified

Acceptance:

* [ ] Form accepts input safely
* [ ] No unexpected execution occurs

Test Type: Security

Priority: P0

---

## US-013

Title: Check Sensitive Data Exposure

As a: Security Reviewer

I want to: Inspect page content

So that: Secrets are not exposed

Acceptance:

* [ ] No API keys exposed
* [ ] No passwords exposed
* [ ] No secrets exposed

Test Type: Security

Priority: P0

---

## US-014

Title: Basic Load Validation

As a: QA Engineer

I want to: Validate site behavior under load

So that: Core functionality remains available

Acceptance:

* [ ] Homepage responds successfully
* [ ] No server errors observed

Test Type: Load

Priority: P1
