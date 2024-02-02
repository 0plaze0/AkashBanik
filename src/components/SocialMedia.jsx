import { BsTwitter } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a target="_blank" href="https://twitter.com/_plaze_">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://github.com/0plaze0">
          <FaGithub />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/akash-banik-2b8093253/"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
