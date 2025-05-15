import styles from './Component.module.css';

    const Component = () => {
      return <div>

        <h1 className='styles.titulo'>CSS de componentes</h1>

        <p style = {{backgroundColor:'darkslategrey',color:'blue'}}>
            Esse é o CSS de um componente
            </p>

        <h2>CSS apenas desse componente</h2>
      </div>;
    };


export default Component;
