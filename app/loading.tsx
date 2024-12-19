export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-100 z-50 transition-opacity duration-1000 ease-in-out">
      <div className="relative animate-custom-pulse">
        <div className="rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 flex items-center justify-center">
          <img
            src="/title.png"
            alt="Loading"
            className="transition-all duration-1000 ease-in-out w-24 h-24 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
