# Task 1

React Native library implementing Azure AD OAuth2 API

The library uses the latest __V2.0__ version of the [Azure AD endponts](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-compare) and provides token cache functionality.
`react-native-azure-auth` implements authentication flow using `fetch` API and native components.
The OpenID connect and `authorization_code` grant are implemented.


```js
    try {
        // Try to get cached token or refresh an expired ones
        let tokens = await azureAuth.auth.acquireTokenSilent({scope: 'Mail.Read', userId: this.state.userId})
        if (!tokens) {
            // No cached tokens or the requested scope defines new not yet consented permissions
            // Open a window for user interaction
            tokens = await azureAuth.webAuth.authorize({scope: 'Mail.Read'})
        }
        let mails = await azureAuth.auth.msGraphRequest({token: tokens.accessToken, path: '/me/mailFolders/Inbox/messages'})
    } catch (error) {
      console.log(error)
    }
```