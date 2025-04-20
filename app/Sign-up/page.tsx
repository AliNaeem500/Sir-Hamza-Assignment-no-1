export default function Sign_up() {
    return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
          <div className="max-w-md w-full bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
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
              <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                Create Account
              </button>
            </form>
          </div>
        </div>
    );
    };