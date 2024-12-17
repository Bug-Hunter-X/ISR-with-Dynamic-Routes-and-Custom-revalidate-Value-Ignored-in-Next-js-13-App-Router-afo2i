# Next.js 13 App Router: ISR with Dynamic Routes and Custom revalidate Issue

This repository demonstrates a bug in Next.js 13's App Router where custom `revalidate` values are ignored when used with dynamic routes and Incremental Static Regeneration (ISR).

## Bug Description

When specifying a custom `revalidate` value in a page using dynamic routes within the App Router, the value is not correctly applied. Instead, the page uses the default `revalidate` setting (often 1 second), leading to unexpected revalidation behavior.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe that the pages are revalidated far more frequently than the custom `revalidate` setting specifies.

## Expected Behavior

The page should be revalidated according to the `revalidate` value specified in the page's metadata.

## Actual Behavior

The page revalidates far more frequently than expected, ignoring the custom `revalidate` value.

## Solution

The solution involves configuring the dynamic route to work correctly with ISR and a custom revalidate value. See `bugSolution.js` for the correct implementation.