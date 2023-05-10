import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { login } from '@/apis/auth';
import { TOKEN_KEY } from '@/constants/auth';
import ROUTES, { redirectUri } from '@/constants/routes';
import { signUpInfoAtom } from '@/store/userInfo';
import { setLocalStorage } from '@/utils/storage';

import LoadingView from './LoadingView';

const Loading = () => {
  const { query, isReady, push } = useRouter();
  const setSignUpInfo = useSetRecoilState(signUpInfoAtom);

  const loginType = query.type as 'kakao' | 'google';
  const authenticationCode = query.code as string;

  useEffect(() => {
    if (!isReady) return;
    if (!authenticationCode) return;
    const fetchCode = async () => {
      const { code, data } = await login(
        loginType,
        authenticationCode,
        redirectUri[loginType] as string
      );
      if (code === 200 && 'accessToken' in data) {
        setLocalStorage(TOKEN_KEY, data.accessToken);
        push(ROUTES.MAIN);
      } else if (code === 412) {
        setSignUpInfo((prev) => ({
          ...prev,
          ...data,
        }));
        push(ROUTES.SIGNUP.TYPE);
      }
    };
    fetchCode();
  }, [isReady, authenticationCode, loginType, push, setSignUpInfo]);

  return <LoadingView />;
};
export default Loading;