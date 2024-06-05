import vote from "../mock/vote.json";

export default function Home() {
  return (
    <>
      {vote.map((element) => {
        return (
          <div key={element.id} className="border-b border-gray-400">
            <div className="ml-1 mt-1 text-sm font-semibold text-gray-400">
              {element.username}
            </div>
            <div className="ml-1.5">{element.text}</div>
            <div className="flex justify-center p-2">
              <button className="text-xs hover:bg-blue-500 border p-1 font-semibold">
                human: {element.human}
              </button>
              <button className="text-xs hover:bg-blue-500 border p-1 font-semibold">
                ai: {element.ai}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
