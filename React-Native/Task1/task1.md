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