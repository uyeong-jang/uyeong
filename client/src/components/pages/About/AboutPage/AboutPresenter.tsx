import { SECTION, DIV } from './AboutStyle';
import Head from 'next/head';
import Image from 'next/image';
import GitHubChart from '@pages/About/AboutComponents/GitHubChart';
import { SubFrame } from '@templates/SubFrame';
import LocationIcon from '@icons/LocationIcon';
import EnvelopeIcon from '@icons/EnvelopeIcon';
import GithubIcon from '@icons/GithubIcon';
import InstagramIcon from '@icons/InstagramIcon';
import Badges from '../AboutComponents/Badges/Badges';

const AboutPresenter = () => {
  return (
    <>
      <Head>
        <title>UYeong | About</title>
      </Head>
      <SubFrame>
        <SECTION.Layout>
          {/* 0 */}
          <h1>About</h1>

          {/* 1 */}
          {/* pc 버전 일때는 다른 사진으로? */}
          <DIV.AboutPart1>
            <div>
              <div className="about-avatar-wrapper about-avatar">
                <Image className="about-avatar" src={'/profile.jpg'} alt="profile" width={80} height={80} />
              </div>
              <p>UYeong</p>
            </div>
          </DIV.AboutPart1>

          {/* 2 */}
          <DIV.AboutPart2>
            <div>
              <p>U Yeong Jang</p>
              <p>Front-end developer</p>
              <p>A blog that records my daily life</p>
            </div>
            <div>
              <ul>
                <li>
                  <LocationIcon /> Korea, Repulic of
                </li>
                <li>
                  <EnvelopeIcon /> wjacob2103@gmail.com
                </li>
                <li>
                  <GithubIcon />
                  Github
                </li>
                <li>
                  <InstagramIcon />
                  Instagram
                </li>
              </ul>
            </div>
          </DIV.AboutPart2>

          {/* 3 */}
          <DIV.AboutPart3>
            <div>
              <GitHubChart />
            </div>
          </DIV.AboutPart3>

          {/* 4 */}
          <DIV.AboutPart4>
            <div>
              <h3>Experiences</h3>
              <Badges />
            </div>
            <div>
              <h3>Likes</h3>
              <ul>
                <li>👀📺🍿</li>
                <li>🍺🍗🍺</li>
                <li>
                  🧑‍💻 <strong>&#62;</strong> 👨‍💻
                </li>
                <li>❤️ 🐕🐈 ❤️</li>
                <li>🌴 ✈️🌏🧳📷 🌴</li>
                <li>⚾🏀⚽🎳🏓🚴💦</li>
              </ul>
            </div>
          </DIV.AboutPart4>
        </SECTION.Layout>
      </SubFrame>
    </>
  );
};

export default AboutPresenter;
