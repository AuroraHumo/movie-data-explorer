import { useInfiniteQuery } from '@tanstack/react-query';
import { InfiniteGetMovies } from '../hooks/InfiniteGetMovies'
import MovieList from './MovieList';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';
import { useEffect, useRef } from 'react';

export const InfiniteMoviesQuery = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: InfiniteGetMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.nextPage <= lastPage.totalPages ? lastPage.nextPage : undefined,
  });

  const loaderRef = useRef(null);

  useEffect(() => {
    const currentLoader = loaderRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorPage error={String(error)} />;

  const allMovies = data?.pages?.flatMap((page) => page.movies) ?? [];

  return (
    <>
      <MovieList movies={allMovies} />
      {isFetchingNextPage && <Spinner />}
      <div ref={loaderRef} className="h-10" />
    </>
  );
};
