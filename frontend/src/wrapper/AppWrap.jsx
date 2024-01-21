export const AppWrap = (component, idName, className) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${className}`}>
        <div className="app__wrapper app__flex">{component}</div>
      </div>
    );
  };
