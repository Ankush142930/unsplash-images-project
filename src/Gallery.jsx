import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './context';

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);

      return result.data;
    },
  });

  //Handling when the content is being loaded
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>🔃 Loading...</h4>
      </section>
    );
  }

  //Handling when there is an error in loading the content
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>⛔ There was an Error!...</h4>
      </section>
    );
  }

  //Handling when no results were found
  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>!!! Sorry 🙏🙇‍♀️ !!!No Results were Found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            key={item.id}
            src={url}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};
export default Gallery;
