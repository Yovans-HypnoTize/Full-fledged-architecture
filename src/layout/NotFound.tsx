const NotFound = () => {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-9xl font-extrabold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-2xl font-bold text-gray-700 pt-1 pb-4">Oops! Page Not Found</p>
          <p>Sorry, the page you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  };
  
  export default NotFound;
  