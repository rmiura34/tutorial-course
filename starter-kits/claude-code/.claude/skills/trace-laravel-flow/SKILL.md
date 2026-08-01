---
name: trace-laravel-flow
description: Use when investigating how one Laravel URL or action travels through routes, middleware, controllers, requests, services, models, the database, and the response. Do not use for implementation before the investigation is reviewed.
---

# Trace a Laravel request flow

1. State the target URL, HTTP method, expected response, and project Laravel version.
2. Do not edit files.
3. Locate the matching route and record the route file and line.
4. Record middleware in execution order.
5. Trace the controller method and any FormRequest or policy.
6. Trace services, repositories, models, relationships, scopes, and migrations.
7. Locate relevant tests.
8. Trace the Resource, View, JSON, redirect, or other response.
9. Separate verified facts from hypotheses.
10. Stop when a step cannot be verified and list the missing information.

## Required output

- Request flow table with file and method for every verified step
- Database tables and columns touched
- External services, queues, and events triggered
- Existing tests
- Risks
- Unverified assumptions
- Candidate change points, without implementing them

