function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>

        <p className="text-white text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}

export default Loader;
