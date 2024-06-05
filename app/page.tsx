import post from "./mock/post.json";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex flex-col focus:ring-blue-500 p-1.5">
          <input className="bg-black border h-9"></input>
        </div>
        <div className="flex flex-col items-center p-1.5">
          <button className="border p-1 hover:bg-blue-500 font-semibold ">
            Post
          </button>
        </div>
        <div className="border-b border-gray-400"></div>
        {post.map((element) => {
          return (
            <div key={element.id} className="border-b border-gray-400">
              <div className="ml-1 mt-1 text-sm font-semibold text-gray-400">
                {element.username}
              </div>
              <div className="ml-1.5">{element.text}</div>
              <div className="flex justify-center p-2">
                <button className="text-xs hover:bg-blue-500 border p-1 font-semibold">
                  like: {element.like}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
