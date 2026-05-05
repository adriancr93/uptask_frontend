# What is React Query?

## Introduction and Advantages

React Query, also known as TanStack Query, is a library for fetching data from a server.

Its main advantages are that it retrieves data in an optimized and fast way; it also caches queries, and synchronizes/updates server data very simply.

It can be used with both Fetch API and Axios.

## Terms in React Query

React Query introduces a lot of new concepts, but there are two that are the most important:

- **Queries (useQuery):** Used to fetch data from a server or API (GET)
- **Mutations (useMutation):** Used to create/update/delete data on the server (POST, PUT, PATCH, DELETE)

## Authentication and Account Creation

Creating a robust authentication system

Authentication and account creation

Nowadays, there is not a single website used by thousands of users that does not have authentication and user registration.

Bank sites, online stores, mobile applications—all have some integrated authentication system.

Authentication allows us to identify our users and give them certain access to their information.

## Principles of Authentication

A user can authenticate with something they remember (Email and Password)

A user can authenticate with a physical device (SMS message or alert)

A user can authenticate with something physical (Fingerprint, Voice, or Face)

## Cookie or LocalStorage

# LocalStorage

Advantage

Ease of use: localStorage is easy to use and does not require additional configuration to store and retrieve data.

Persistence: Data stored in localStorage remains in the browser even after closing it and restarting the computer.

Performance: Accessing data in localStorage can be faster than in cookies because it is not sent with every HTTP request.

Disadvantages

Vulnerability to XSS attacks: Data in localStorage is vulnerable to cross-site scripting (XSS) attacks if proper security measures are not implemented.

Limited capacity: Storage in localStorage is limited to a maximum size of 5-10 MB per domain.

Not compatible with cross-origin requests (CORS): Data stored in localStorage is not automatically sent with CORS requests to other domains.

# Cookies

Advantage

Security: Cookies can be configured with the HttpOnly and Secure flags to increase security and protect against XSS and CSRF attacks.

CORS support: Cookies are automatically sent with CORS requests, making authentication handling easier in distributed applications.

Expiration control: You can set an expiration date for cookies, and they are automatically deleted.

Disadvantages

Network overhead: Cookies are sent with every HTTP request, which can increase network traffic if the tokens are large.

Limited capacity: Like localStorage, cookies also have a maximum storage size per domain (generally 4KB per cookie).

Less persistence: Cookies can be deleted by the user or automatically expire after a period of time, which may require periodic token renewal.