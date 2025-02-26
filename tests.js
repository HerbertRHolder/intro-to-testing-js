// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello()", function() {
   it("should be a defined function " , function() {
        expect(typeof sayHello()).toBe("string");
    });
   it("should return an empty string ", function(){
       expect(sayHello()).toBe("");
    });
   it("Jane, Hello, Jane!",function(){
       expect(sayHello("Jane")).toBe("Hello, Jane!");
   })
    it("Alex, Hello, Alex!",function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    })
    it("Pat, Hello, Pat!", function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })
    it("sayHello(), Hello, World!", function(){
        expect(sayHello()).toBe("Hello, World!");
    })








});

