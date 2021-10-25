export default function Card({ children }) {
  return (
    <div className="w-full px-10 sm:px-0 sm:w-6/12 lg:w-4/12 xl:w-3/12 ">
      <div className="pb-8 sm:mx-4 h-full">
        <div className="shadow border-2 rounded-md h-full transition transform hover:-translate-y-1 ">
          {children}
        </div>
      </div>
    </div>
  );
}
