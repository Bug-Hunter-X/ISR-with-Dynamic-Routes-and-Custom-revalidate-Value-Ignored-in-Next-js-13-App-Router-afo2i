```javascript
import Link from 'next/link';

function MyComponent() {
  // ... same component as before
}

// Added revalidate to metadata and updated dynamic route handling
export const metadata = {
  revalidate: 60 // Revalidate every 60 seconds
};

export default MyComponent;
```