import {ReactNode, useState} from "react";

const ResizableFontText = ({children}:{children:ReactNode}) => {

    const [fontSize, setFontSize] = useState(1);

    const leftClick = () => {
        setFontSize((prevSize) =>(prevSize<4? prevSize + 0.1: prevSize));
    }
    const rightClick = () => {
        setFontSize((prevSize) =>(prevSize>0.2 ? prevSize - 0.1 : prevSize));
    }

    return (
        <div style={{
            fontSize: `${fontSize}em`,
            cursor: "pointer",
            userSelect: "none"
        }}
        onClick={leftClick}
        onContextMenu={e => {
            e.preventDefault();
            rightClick();
        }}>
            {children}
        </div>
    );
};

export default ResizableFontText;
