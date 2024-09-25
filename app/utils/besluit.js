async function apiFetch(id, options, fallbackReturn) {
  const result = await fetch(`https://id.erfgoed.net/besluiten/${id}`, {
    ...options,
    headers: {
      Accept: 'application/json',
      ...options.headers,
    },
  });
  if (result.ok) {
    return result.json();
  }
  return fallbackReturn;
}

export async function getBesluit(id) {
  return await apiFetch(id, { method: 'GET' }, false);
}
