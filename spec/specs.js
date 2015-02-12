describe("wordOrder", function() {

  it("returns a list of words in a string", function() {
    expect(wordOrder("world world")).to.eql(["world"]);
  });

  it("returns a list of words in a string containing more than one unique word", function() {
    expect(wordOrder("hello hello world world")).to.eql(["hello", "world"]);
  });

  it("returns a list of words in a string containing more than one unique word, ordered by frequency of appearance", function() {
    expect(wordOrder("hello hello world world world")).to.eql(["world", "hello"]);
  });

  it("returns a list of words in a string containing more than one unique word, ordered by frequency of appearance", function() {
    expect(wordOrder("hello hello world world world")).to.eql(["world", "hello"]);
  });

  it("returns a list of words in a string containing more than one unique word, ordered by frequency of appearance", function() {
    expect(wordOrder("hello hello hello world world world")).to.eql(["hello", "world"]);
  });

  it("returns a list of words in a string containing more than one unique word, ordered by frequency of appearance", function() {
    expect(wordOrder("hi hola hola hola hello hello world world world")).to.eql(["hola", "world", "hello", "hi"]);
  });

});
