# Student Clearance System

A web-based system for managing student clearance workflows across departments. It provides role-based portals for students, department staff, and administrators to submit, review, and approve clearance requirements, with progress tracking and notifications.

## Features

- Secure authentication and role-based access control (students, staff, admins)
- Student dashboard with clearance progress tracking
- Department-specific document submission and validation
- Staff review queue with approve/reject and feedback
- Final clearance certificate generation (when all departments approve)
- Administrative management for users and departments
- Audit trail and system activity logging

## Tech Stack

- **Frontend**: TypeScript, Tailwind CSS, HTMX
- **Backend**: MVC-style architecture with RESTful endpoints (see docs)
- **Database**: Relational schema (Users, Departments, Clearance Requests, Documents, Action Logs)

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- Package manager: npm / pnpm / yarn

### Install

```bash
npm install
```

### Run (development)

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Project Structure

- `src/` — application source code
- `docs/` — product requirements and technical notes

## Documentation

- Product requirements document: [`docs/README.md`](docs/README.md)

## Roadmap (High-level)

- Core authentication, student flows, and clearance tracking
- Staff & admin interfaces for review and management
- Infrastructure and monitoring, notifications, and UX polish

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes with clear messages
4. Open a pull request describing the change

## License

Add a license file (e.g., MIT) and update this section accordingly.
