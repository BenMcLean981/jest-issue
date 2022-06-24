# jest-issue
A repository for an issue I believe I have found in jest.

# The issue:
`expect(false)` does not fail. I believe that this should either:
1. Raise an error or warning if this is a design decision of jest. It is misleading, and I'm sure I have written very simple boolean checks like this.
2. Be equivalent to `expect(false).toBe(true)`, or more generally `expect(expression)` should be equivalent to `expect(expression).toBe(true)`.
