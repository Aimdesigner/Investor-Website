const AppButtons = () => {
    return (
      <div className="space-y-3">
        <img
          src="/appstore.png"
          alt="Download on the App Store"
          className="h-10 cursor-pointer"
        />
  
        <img
          src="/googleplay.png"
          alt="Get it on Google Play"
          className="h-10 cursor-pointer"
        />
      </div>
    );
  };
  
  export default AppButtons;