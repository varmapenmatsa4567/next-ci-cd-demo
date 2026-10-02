export default function Login() {
  return (
    <main>
      <h1>Login</h1>
      <h1>Welcome to the Login Page</h1>

      <form>
        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button type="submit">
          Login
        </button>
      </form>
    </main>
  );
}