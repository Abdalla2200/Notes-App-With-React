export function setItem(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    throw new Error();
  }
}

export function getItem(key: string) {
  try {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : undefined;
  } catch {
    throw new Error();
  }
}
