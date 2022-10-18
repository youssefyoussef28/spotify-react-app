import "./App.css";

function App() {
  const CLIENT_ID = "d8bdc8257b2a46cbbe92d51c547c47a6";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  return (
    <>
      <h1>Hello world</h1>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login to spotify
      </a>
    </>
  );
}

export default App;
