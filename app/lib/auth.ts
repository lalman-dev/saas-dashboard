export function login(email: string, password: string) {
  if (email === "admin@test.com" && password === "1234") {
    localStorage.setItem("token", "dummy-token");
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem("token");
}

export function isAuthenticated() {
  return !!localStorage.getItem("token");
}
