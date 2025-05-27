const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export interface Favorite {
  id: number;
  user_id: string;
  movie_id: number;
  movie_title: string;
  added_at: string;
}

export async function addFavorite(
  userId: string, 
  movieId: number, 
  movieTitle: string, 
  favorite: boolean = false, 
  country_origin: string = '',
  rate: number = 0
) {
  const res = await fetch(`${API_URL}/api/favorites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, movieId, movieTitle, favorite, country_origin, rate })
  });
  if (!res.ok) throw new Error('Failed to add or update favorite');
  return res.json();
}

export async function getFavorites(userId: string): Promise<Favorite[]> {
  const res = await fetch(`${API_URL}/api/favorites?userId=${encodeURIComponent(userId)}`);
  if (!res.ok) throw new Error('Failed to fetch favorites');
  return res.json();
}
