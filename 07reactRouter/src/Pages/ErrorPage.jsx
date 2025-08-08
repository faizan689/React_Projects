import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Oops! 🚨</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <pre>{error?.statusText || error?.message}</pre>
    </div>
  );
}
