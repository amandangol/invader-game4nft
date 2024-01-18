
window.passport = new window.immutable.passport.Passport({
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
    clientId: 'FZfEcdNrfTAwzAM9riHzgJUSN3ygiQZL',
    redirectUri: 'https://stackup4m4ninvader.vercel.app',
    logoutRedirectUri: 'https://stackup4m4ninvader.vercel.app/logout.html',
    audience: 'platform_api',
    scope: 'openid offline_access email transact'
  });

