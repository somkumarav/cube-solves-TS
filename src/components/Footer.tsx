import { FaGithub, FaDonate, FaDiscord, FaCodeBranch } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <div className="Footer">
      <a
        href="https://github.com/somkumarav/cubeSolve"
        target="_blank"
        rel="noreferrer"
        className="footer-item"
      >
        <FaGithub className="footer-item-icon" />
        <h4>Github</h4>
      </a>
      <a
        href="https://github.com/somkumarav/cubeSolve"
        target="_blank"
        rel="noreferrer"
        className="footer-item"
      >
        <FaDonate className="footer-item-icon" />
        <h4>Donate</h4>
      </a>
      <a
        href="https://github.com/somkumarav/cubeSolve"
        target="_blank"
        rel="noreferrer"
        className="footer-item"
      >
        <FaDiscord className="footer-item-icon" />
        <h4>Discord</h4>
      </a>
      <div className="footer-item no-hover">
        <FaCodeBranch className="footer-item-icon" />
        <h4>1.0.0</h4>
      </div>
    </div>
  );
};
