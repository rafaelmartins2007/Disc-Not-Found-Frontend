export const login = (data) =>
    fetch("/api/auth/login", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data),
    }).then((r) => r.json())
