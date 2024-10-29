import { kebabCase } from "react-smart-utils";

const KebabCase = () => {
    const text = "Hello World";
    const kebabText = kebabCase(text); // Output: "hello-world"

    return (
        <div>
            <p>Original Text: {text}</p>
            <p>Kebab-Case Text: {kebabText}</p>
        </div>
    );
};

export default KebabCase;