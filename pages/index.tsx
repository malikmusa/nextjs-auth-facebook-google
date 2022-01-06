import type { NextPage } from 'next';
import Head from 'next/head';
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import styles from '../styles/Home.module.css';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';

const Home: NextPage = () => {
  const onSuccess = (response: any) => {
    console.log(response);
    axios.post('http://localhost:1997/auth/google/authenticate', {
      accessToken: response.accessToken,
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <GoogleLogin
        clientId='7502573060-is7g5vlmdv5bim5vjmoei02292bf7hor.apps.googleusercontent.com'
        buttonText='Sign in with Google'
        onSuccess={onSuccess}
        // onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <FacebookLogin
        appId='601343690966802'
        autoLoad={true}
        fields='name,email,picture'
        // onClick={componentClicked}
        callback={(val: any) => {
          console.log('facebook response', val);
        }}
      />
    </div>
  );
};

export default Home;