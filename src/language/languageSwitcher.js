import React from "react";
import { IntlContext } from "./IntlContext";

const LanguageSwitch = () => {
  const { switchToEnglish, switchToDeutsch, switchToHindi } = React.useContext(IntlContext);
  return (
    <div>
        <ul className="list-inline">
            <li className="list-inline-item btn btn-outline-primary" onClick={switchToEnglish}>English</li>
            <li className="list-inline-item btn btn-outline-primary" onClick={switchToDeutsch}>Deutsch</li>
            <li className="list-inline-item btn btn-outline-primary" onClick={switchToHindi}>Hindi</li>
        </ul>
    </div>
  );
};


export default LanguageSwitch;
