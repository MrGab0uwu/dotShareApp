import GitHubOauth from "react-github-login";
import { FaGithub } from "react-icons/fa";
const PROJECT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_GITHUB_REDIRECT_URI;
function GitHubLoginButton({ onFailure, onSuccess }) {
  return (
    <GitHubOauth
      className="mt-5"
      clientId={PROJECT_ID}
      redirectUri={REDIRECT_URI}
      onSuccess={onSuccess}
      onFailure={onFailure || ((res) => console.log(res))}
      buttonText={<FaGithub className="h-7 w-7" />}
    />
  );
}

export default GitHubLoginButton;
