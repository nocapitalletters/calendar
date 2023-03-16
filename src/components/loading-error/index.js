import LoadingErrorStyled from "./style";

const LoadingError = ({ message, onButtonClick, title }) => {
  return (
    <LoadingErrorStyled>
      <p>{message}</p>
      <button onClick={() => onButtonClick} >
        {title}
      </button>
    </LoadingErrorStyled>
  );
};

export default LoadingError;