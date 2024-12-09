<script>
    import { auth, provider } from "../services/firebase";
    import { signInWithPopup, signOut } from "firebase/auth";
  
    let user = null;
  
    async function login() {
      try {
        const result = await signInWithPopup(auth, provider);
        user = result.user;
      } catch (error) {
        console.error("Login failed", error);
      }
    }
  
    async function logout() {
      try {
        await signOut(auth);
        user = null;
      } catch (error) {
        console.error("Logout failed", error);
      }
    }
  </script>
  
  <div>
    {#if user}
      <p>Welcome, {user.displayName}</p>
      <button on:click={logout}>Logout</button>
    {:else}
      <button on:click={login}>Login with Google</button>
    {/if}
  </div>
  