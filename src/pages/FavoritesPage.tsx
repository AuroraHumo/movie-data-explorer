import { useEffect, useState, useContext } from 'react';
import { getFavorites, type Favorite } from '../services/favoritesService';
import { AuthContext } from '../contexts/AuthContext';
import Spinner from '../components/Spinner';

export default function FavoritesPage() {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    getFavorites(user.uid)
      .then(setFavorites)
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [user]);

  if (!user) return <Spinner/>;
  if (loading) return <p>Loading favorites…</p>;

  return (
    <div>
      <h1 className="text-2xl mb-4">My Favorites</h1>
      {favorites.length === 0 && <p>No favorites yet.</p>}
      <ul className="space-y-2">
        {favorites.map(fav => (
          <li key={fav.id} className="p-2 bg-gray-100 rounded">
            {fav.movie_title} <span className="text-sm text-gray-500">({new Date(fav.added_at).toLocaleDateString()})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
