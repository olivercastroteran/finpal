import { useEffect, useState } from 'react';
import './Banner.scss';
import { useSelector } from 'react-redux';
import { WalletImg } from '../../../../assets/images';
import { english, spanish } from '../../../../languages';

const Banner = () => {
  const firstName = useSelector((state) => state.firebase.profile.firstName);
  const language = useSelector((state) => state.settings.language);
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.dashboard.banner });
    } else if (language === 'spanish') {
      setContent({ ...spanish.dashboard.banner });
    }
    // eslint-disable-next-line
  }, [language]);

  return (
    <div className="banner">
      <div className="banner__left">
        <h2>
          {content?.welcomeTitle} {firstName}
        </h2>
        <p>{content?.welcomeTxt}</p>
      </div>
      <div className="banner__right">
        <WalletImg />
      </div>
    </div>
  );
};

export default Banner;
