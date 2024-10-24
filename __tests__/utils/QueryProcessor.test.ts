import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: You should update the test below after you add your andrew id
    test('should return my andrew id', () => {
        const query = "what's your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "khalifat"
          ));
    });

        // TODO: You should update the test below after you add your andrew id
        test('should return my name', () => {
            const query = "name";
            const response: string = QueryProcessor(query);
            expect(response).toBe((
                "khalifa"
              ));
        });

        test('should return largest', () => {
            const query = "Which of the following numbers is the largest: 58, 44, 34?";
            const numbersMatch = query.match(/\d+/g);
            const numbers = numbersMatch ? numbersMatch.map(Number) : [];
            const response = numbers.length > 0 ? Math.max(...numbers) : "No numbers found";
            expect(response).toBe(58);
        });
        
        test('should return sum', () => {
            const query = "Add 45 and 30 together";
            const numbersMatch = query.match(/\d+/g);
            const numbers = numbersMatch ? numbersMatch.map(Number) : [];
            const result = numbers.reduce((a, b) => a + b, 0);
            expect(result).toBe(75);
        });
        
        test('should return multiple', () => {
            const query = "Multiply 2 and 3 together";
            const numbersMatch = query.match(/\d+/g);
            const numbers = numbersMatch ? numbersMatch.map(Number) : [];
            const result = numbers.length > 0 ? numbers.reduce((a, b) => a * b, 1) : "No numbers found";
            expect(result).toBe(6);
        });
        
});
