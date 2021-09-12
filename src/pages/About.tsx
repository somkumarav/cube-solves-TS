import { FaGithub, FaDiscord } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

export const About: React.FC = () => {
  const appName = 'cubesolve';

  return (
    <div className="About container">
      <div className="about-header">
        <h3>Created by NWOS and ADT666.On the 15th of may 2021</h3>
      </div>

      <div className="about-body">
        <div className="about-body-header">
          <h2>About</h2>
          <p>
            {appName} is a minimalistic and customizable website made for
            speedcubers. Constantly updated to ensure the user’s experience is
            met.
          </p>
        </div>

        <div className="about-body-section">
          <div className="about-body-section-header">
            <p>
              <span>LeaderBoard</span>
            </p>
          </div>

          <p>
            I think {appName} biggest unique feature is that it provides
            LeaderBoard which Helps speedCubers all around the world to compete
            with each other (NOT OFFICIAL).
          </p>

          <div className="about-body-section-subsection">
            <p>
              <span>Torunament: </span>You don’t need to go to a tournament to
              Participate. Although it take away the fun but in this Pandemic is
              better to stay inside as much as possible.
            </p>
            <p>
              <span>Comfort: </span>I believe that anyone can perform more
              efficiently and Consistently in their comfort zone which helps to
              improve your time.
            </p>
            <p>
              <span>Accessibility of time and space: </span>speedcubing as a
              hobby is not limited to a particular region people around the
              world do speedcubing and hence time-zone become a barrier{' '}
              {appName} removes this as an online website anyone from anywhere
              can use this website and participate to get their name into the
              leaderBoard.
            </p>
            <p>
              <span>How the leaderboards work: </span>
              now you might be thinking of how genuine is this leaderBoard.
              Don’t worry this leaderBoard is 100% legit because in order to get
              into the leaderboard you need to send the video proof of the same
              which will be thoroughly checked by our moderators. And then only
              the leaderboard will be updated.
            </p>
          </div>
        </div>

        <div className="about-body-section">
          <p>
            <span>Moderators: </span>
          </p>
          <p>You can also become a moderator.</p>
          <div className="about-body-section-subsection">
            <p>
              <span>Intro: </span>Moderators are the backbone of this website
              whom we trust. They maintain the authenticity of the leaderboard.
              And are in charge of verifying the submitted footage are authentic
              and update the leaderboard.
            </p>
            <p>
              <span>How to become a moderator: </span>In order to become a
              moderator you can contact me in any of the following ways. The
              Minimum criteria are that you should be atleast 18 Years Old and
              an active member of the community
            </p>
          </div>
        </div>

        <div className="about-body-section">
          <div className="about-body-section-links">
            <a
              href="https://github.com/somkumarav/cubeSolve"
              target="_blank"
              rel="noreferrer"
            >
              <IoMail />
              <h3>Mail</h3>
            </a>
            <a
              href="https://github.com/somkumarav/cubeSolve"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord />
              <h3>Discord</h3>
            </a>
            <a
              href="https://github.com/somkumarav/cubeSolve"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <h3>Github</h3>
            </a>
          </div>
        </div>

        <div className="about-body-section">
          <p>
            <span>Open-source: </span>cubeSolves is completely open-source i.e
            source code is publicly available and you can contribute to the
            website and can report a bug in the website via the above-mentioned
            ways.
          </p>
        </div>

        <div className="about-body-section">
          <p>
            <span>Support: </span>You can support the developer in any of the
            following ways. I really appreciate everyone who supports me without
            you people this would be almost impossible
          </p>
          <div className="about-body-section-links">
            <a
              href="https://github.com/somkumarav/cubeSolve"
              target="_blank"
              rel="noreferrer"
            >
              <IoMail />
              <h3>Mail</h3>
            </a>
            <a
              href="https://github.com/somkumarav/cubeSolve"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord />
              <h3>Discord</h3>
            </a>
            <a
              href="https://github.com/somkumarav/cubeSolve"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <h3>Github</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
