const TestCase = function(fn, ...caseids) {
    return function() {
        const ints = caseids.map(x => parseInt(x)).filter(x => x);
        const cidstr =
            ints.length
                ? ` — Case IDs: ${JSON.stringify(ints)}`
                : "";
        this.test.title = `${this.test.title}${cidstr}`;
        return fn();
    }
};

describe("Some thing", function() {
    it("Should be ignored", new TestCase(() => {
        assert(1 === 1);
    }, 123, 456, 6789));

    it("Will be a failure", new TestCase(() => {
        assert(1 == 2);
    }));

    it("Will use Cypress", new TestCase(() => {
        cy.wrap(1).should("eq", 1);
    }, 123456789));
});
