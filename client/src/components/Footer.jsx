import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <Footer className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-clos-1">
          <div className="mt-5">
            <Link
              to={"/"}
              className=" self-center whitespace-nowrap  text-lg sm:text-xl  font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Faisal&apos;s
              </span>{" "}
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://faisal23.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Faisal
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://faisal23.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Faisal&apos;s Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.linkedin.com/in/faisalahmed23/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>

              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/23-faisal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
              </Footer.LinkGroup>

              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://twitter.com/faisalahmed_23"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Policy" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
              </Footer.LinkGroup>

              <Footer.LinkGroup col>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div>
          <Footer.Copyright
            href="#"
            by="Faisal's Blog"
            year={new Date().getFullYear()}
          />
          {/* <div className="flex items-center gap-3">
            <Footer.Icon href="#" icon={<FaFacebook />} />
            <Footer.Icon href="#" icon={<FaTwitter />} />
            <Footer.Icon href="#" icon={<FaGithub />} />
            <Footer.Icon href="#" icon={<FaLinkedin />} />
          </div> */}
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
