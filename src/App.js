import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [content, setContent] = useState("");

  const handleAdd = () => {
    if (todo?.some((item) => item.id === content?.replace(/\s/g, ""))) {
      toast.warn("Added Already");
    } else {
      setTodo((prev) => [
        ...prev,
        { id: content?.replace(/\s/g, ""), job: content },
      ]);
      setContent("");
    }
  };

  const handleDeleteJob = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="flex flex-col gap-8 justify-center items-center h-screen">
        <div className="flex gap-8">
          <input
            type="text"
            className="outline-none border border-green-600 px-4 py-2 w-[400px]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            type="button"
            className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
            onClick={handleAdd}
          >
            ADD
          </button>
        </div>
        <div>
          <h3 className="font-bold text-xl">Content:</h3>
          <ul>
            {todo?.map((item) => {
              return (
                <li key={item.id} className="flex gap-10 items-center">
                  <span className="my-2">{item.job}</span>
                  <span
                    onClick={() => handleDeleteJob(item.id)}
                    className="my-2 cursor-pointer p-2"
                  >
                    X
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
