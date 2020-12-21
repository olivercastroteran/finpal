import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileImg } from '../../assets/images';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/actions/authActions';
import './User.scss';
import { english, spanish } from '../../languages';

const User = () => {
  const uid = useSelector((state) => state.firebase.auth.uid);
  const profile = useSelector((state) => state.firebase.profile);
  const language = useSelector((state) => state.settings.language);
  const [content, setContent] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!uid) history.push('/auth');
    // eslint-disable-next-line
  }, [uid]);

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.user });
    } else if (language === 'spanish') {
      setContent({ ...spanish.user });
    }
  }, [language]);

  return (
    <div className="user content">
      <div className="user__banner">
        <div className="user__banner--left">
          <h2>
            {content?.hello} {profile?.firstName}
          </h2>
          <p>
            {content?.firstName}: <span>{profile?.firstName}</span>
          </p>
          <p>
            {content?.lastName}: <span>{profile?.lastName}</span>
          </p>
          <p>
            {content?.email}: <span>{profile?.email}</span>
          </p>
          <p>
            {content?.password}:{' '}
            <span>{'*'.repeat(profile?.password?.length)}</span>
          </p>
          <p>
            {content?.pin}: <span>****</span>
          </p>
        </div>
        <div className="user__banner--right">
          <ProfileImg />
        </div>
      </div>

      <button onClick={() => dispatch(logout())} className="logout-btn">
        {content?.btn}
      </button>
    </div>
  );
};

export default User;
