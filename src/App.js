

import axios from 'axios';
import { useQuery } from 'react-query';
import CardContainer from './components/card-container';
import LoadingError from './components/loading-error';
import LoadingInfo from './components/loading-info';
import { mapModels } from './view-model/mapper';

function App() {

  const fetchData = () => axios.get('https://cat-fact.herokuapp.com/facts');

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["events"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <LoadingInfo />
  }

  if (isError) {
    return <LoadingError 
              title={'Försök igen'}
              message={`Något gick fel vid datahämtning: ${error.message}`}
              onButtonClick={refetch()} />
  }

  const eventViewmodels = mapModels(data.data, true);

  return <CardContainer eventViewmodels={eventViewmodels} />
}

export default App;
