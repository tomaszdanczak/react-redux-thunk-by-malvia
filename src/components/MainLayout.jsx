import Header from "./Header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className="mt-20 pt-6 w-full md:w-11/12 md:mx-auto lg:w-10/12">
        {children}
      </div>
    </>
  );
}
