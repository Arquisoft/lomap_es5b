import { getPodUrlAll, getStringNoLocale, getThing, getWebIdDataset, getSolidDataset } from "@inrupt/solid-client";
import { fetch, getDefaultSession, handleIncomingRedirect, login } from "@inrupt/solid-client-authn-browser";
import { FOAF, VCARD } from "@inrupt/vocab-common-rdf";

async function loginAndFetch() {
    // 1. Call `handleIncomingRedirect()` to complete the authentication process.
    //    If called after the user has logged in with the Solid Identity Provider, 
    //      the user's credentials are stored in-memory, and
    //      the login process is complete. 
    //   Otherwise, no-op.  
    await handleIncomingRedirect();
  
    // 2. Start the Login Process if not already logged in.
    if (!getDefaultSession().info.isLoggedIn) {
      await login({
        // Specify the URL of the user's Solid Identity Provider;
        // e.g., "https://login.inrupt.com".
        oidcIssuer: "https://solidweb.org/login",
        // Specify the URL the Solid Identity Provider should redirect the user once logged in,
        // e.g., the current page for a single-page app.
        redirectUrl: window.location.href,
        // Provide a name for the application when sending to the Solid Identity Provider
        clientName: "Lomap"
      });
    }
    // For example, the user must be someone with Read access to the specified URL.
    const myDataset = await getSolidDataset(
      "https://storage.inrupt.com/somepod/todolist", 
      { fetch: fetch }
    );

    // ...

    // For example, the user must be someone with Write access to the specified URL.
    const savedSolidDataset = await saveSolidDatasetAt(
      "https://storage.inrupt.com/somepod/todolist",
      myChangedDataset,
      { fetch: fetch }
    );
}

loginAndFetch();
