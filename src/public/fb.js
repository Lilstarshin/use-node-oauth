// TODO: initialize Facebook SDK

console.log(window.APP_CONFIG);
window.fbAsyncInit = () => {
  FB.init({
    appId: APP_CONFIG.FB_APP_ID,
    cookie: true,
    xfbml: true,
    version: 'v13.0',
  });
  document.getElementById('fb-login').addEventListener('click', () => {
    console.log('test');
    FB.login(
      (response) => {
        console.log(response);
        fetch(
          `/users/auth/facebook?access_token=${response.authResponse.accessToken}`,
          {
            method: 'POST',
          }
        ).then(() => window.location.reload());
      },
      { scope: 'public_profile,email' }
    );
  });
};

((d, s, id) => {
  const fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  const js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
