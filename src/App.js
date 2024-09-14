import { useState } from "react";

function App() {
  const [content, setContent] = useState("");

  return (
    <div className="flex gap-8 justify-center items-center h-screen">
      <input
        type="text"
        className="outline-none border border-green-600 px-4 py-2 w-[400px]"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="button"
        className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
      >
        ADD
      </button>
    </div>
  );
}

export default App;
