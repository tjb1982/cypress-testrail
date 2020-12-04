const testCases = (test) => {
    try {
        return JSON.parse(test.title.split("Case IDs:")[1]);
    } catch (e) {
        return [];
    };
};

class X {
    constructor(runner) {
        runner.on("pass", function(test) {
            console.log(test.title, testCases(test));
        });

        runner.on("fail", function(test, err) {
            console.log(test.title, testCases(test), err);
        });
    }
}

module.exports = X;
