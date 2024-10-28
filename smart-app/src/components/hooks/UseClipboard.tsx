import { useClipboard } from 'react-smart-utils';

const UseClipboard = () => {
    const { isCopied, copy, copiedText } = useClipboard();

    const handleCopy = () => {
        copy("Hello");
    };

    return (
        <div>
            <button onClick={handleCopy}>
                {
                    isCopied ? (
                        'Copied!'
                    ) : (
                        'Copy to clipboard'
                    )
                }
            </button>
            {isCopied && <p>Copied: {copiedText}</p>}
        </div>
    );
};

export default UseClipboard;