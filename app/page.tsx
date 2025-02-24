export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <main className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          あみだくじ
        </h1>

        <form className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-center text-gray-700 mb-6">
            参加人数を選択してください
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <label key={num} className="relative">
                <input
                  type="radio"
                  name="playerCount"
                  value={num}
                  defaultChecked={num === 10}
                  className="absolute opacity-0 w-full h-full cursor-pointer peer"
                />
                <div
                  className="aspect-square flex items-center justify-center text-2xl font-bold border-2 rounded-lg 
                  peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-hover:bg-gray-50 transition-colors
                  cursor-pointer text-gray-900"
                >
                  {num}
                </div>
              </label>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            くじを作成する
          </button>
        </form>
      </main>
    </div>
  );
}
