export default function Login() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }