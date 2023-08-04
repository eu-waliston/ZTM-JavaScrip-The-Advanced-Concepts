class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = "authenticationError";
    this.favouriteSnack = "grapes";
  }
}

class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseError";
    this.userMessage = "Sorry :(";
  }
}

class PermissionError extends Error {
  constructor(message) {
    super(message);
    this.name = "authenticationError";
    this.userMessage = "A robot ?";
  }
}

const a = new PermissionError("oopse");
a.message