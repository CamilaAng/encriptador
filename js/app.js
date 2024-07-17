document.addEventListener("DOMContentLoaded", e => {
    const ENCRYPTION_MAP = {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat"
    };

    const [showResult, hideResult] = (() => {
        const resultContainer = document.getElementById("result");
        const contentOutputParagraph = document.getElementById("content-output");
        const noResultContainer = document.getElementById("no-result");

        const showResult = (value = "") => {
            resultContainer.style.display = "flex";
            noResultContainer.style.display = "none";
            contentOutputParagraph.innerHTML = value;
        };

        const hideResult = () => {
            resultContainer.style.display = "none";
            noResultContainer.style.display = "flex";
        };

        return [showResult, hideResult];
    })();

    const encryptButton = document.getElementById("encrypt");
    const decryptButton = document.getElementById("decrypt");
    const copyButton = document.getElementById("copy");
    const contentInputTextArea = document.getElementById("content-input");

    const encrypt = text => (text.split("").map(char => ENCRYPTION_MAP[char] || char).join(""));

    const decrypt = text => (Object.entries(ENCRYPTION_MAP).reduce((text, entry) => text.replace(new RegExp(entry[1], 'g'), entry[0]), text));

    encryptButton?.addEventListener("click", () => {
        const contentInput = contentInputTextArea.value;
        showResult(encrypt(contentInput));
    });

    decryptButton?.addEventListener("click", () => {
        const contentInput = contentInputTextArea.value;
        showResult(decrypt(contentInput));
    });

    copyButton?.addEventListener("click", () => {
        const contentOutputParagraph = document.getElementById("content-output");
        const value = contentOutputParagraph.innerHTML;
        navigator.clipboard.writeText(value);
    });
});