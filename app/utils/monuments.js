async function apiFetch(path, options, fallbackReturn) {
  const result = await fetch(`https://inventaris.onroerenderfgoed.be/${path}`, {
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

export async function searchForMonument(search) {
  const params = Object.entries(search)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return await apiFetch(`aanduidingsobjecten?${params}`, { method: 'GET' }, []);
}

export async function getMonument(id) {
  return await apiFetch(`aanduidingsobjecten/${id}`, { method: 'GET' }, false);
}
