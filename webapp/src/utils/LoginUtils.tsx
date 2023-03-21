import { getPodUrlAll, getStringNoLocale, getThing, getWebIdDataset, getSolidDataset, getFile, deleteFile, overwriteFile, saveFileInContainer } from "@inrupt/solid-client";
import { fetch, getDefaultSession, handleIncomingRedirect, login } from "@inrupt/solid-client-authn-browser";


async function loginAndFetch(webId:string, privider:string) {
    // 1. Call `handleIncomingRedirect()` to complete the authentication process.
    //    If called after the user has logged in with the Solid Identity Provider, 
    //      the user's credentials are stored in-memory, and
    //      the login process is complete. 
    //   Otherwise, no-op.  
    await handleIncomingRedirect();
  
    // 2. Start the Login Process if not already logged in.
    if (!getDefaultSession().info.isLoggedIn) {
      await login({
        //clientSecret: webId,
        // Specify the URL of the user's Solid Identity Provider;
        // e.g., "https://login.inrupt.com".
        oidcIssuer: privider,
        // Specify the URL the Solid Identity Provider should redirect the user once logged in,
        // e.g., the current page for a single-page app.
        //o otra url 
        redirectUrl: window.location.href,
        // Provide a name for the application when sending to the Solid Identity Provider
        clientName: "Lomap"
      });
    }
}

// 2. Get Pod(s) associated with the WebID
async function getUserPod(webID : string) {
  //obtener el webId donde se llame a la funcion
  const mypod = await getPodUrlAll(webID, { fetch: fetch });
  return mypod;
  //si se tuviesen varios pod iterar con foreach
}

export {loginAndFetch,getUserPod};