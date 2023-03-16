

import axios from 'axios';
import { useQuery } from 'react-query';

import CardContainer from './components/card-container';
import LoadingError from './components/loading-error';
import LoadingInfo from './components/loading-info';

import { mapModels } from './view-model/mapper';

function App() {

  //const [events, setEvents] = useState([]); 
  
  const fetchData = () => axios.get('https://cat-fact.herokuapp.com/facts');
  //('https://crudcrud.com/api/c974ef5540f34583aacee5422b10fc66/my-events')     // https://datausa.io/api/data?drilldowns=Nation&measures=Population 


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
