const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Ankit Kumar Gupta</span>
        <span>
          Designed By{" "}
          <a
            target="_blank"
            href="https://github.com/ankit-kumar-guptaa"
          >
            Ankit Kumar Gupta
          </a>
        </span>
        <ul>
          <li>
            <a href="#">
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-dribbble" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
