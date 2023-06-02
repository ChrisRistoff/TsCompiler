"use strict";
const createKeyboard = (modelId) => {
    if (modelId === 10) {
        console.log("Not a valid model ID");
    }
    else {
        return { type: "keyboard", modelId };
    }
};
console.log(createKeyboard(23));
createKeyboard(10);
// best to always keep typechecking to "strict" in tsconfig.json it seems
//# sourceMappingURL=app.js.map