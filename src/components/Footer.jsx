import "../styles/Footer.css";
import { myInfo } from "../data/myInfo";

function Footer() {
  return (
    <footer>
      <div>
        © {new Date().getFullYear()} {myInfo.name}
      </div>
      <div className="contact">
        <div>
          <span>Contact: </span>
          <a href={`mailto:${myInfo.email}`}>
            <button>Email</button>
          </a>
          |
          <a
            href={`https://github.com/${myInfo.github}`}
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
