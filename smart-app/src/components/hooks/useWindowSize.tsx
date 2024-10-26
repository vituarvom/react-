import { useWindowSize } from "react-smart-utils";

const UseWindowSize = () => {

    const { width, height } = useWindowSize();

    return (
        <div>
            <h2>Window Size</h2>
            <p>
                Width: {width}px
            </p>
            <p>
                Height: {height}px
            </p>
        </div>
    );
}
export default UseWindowSize;