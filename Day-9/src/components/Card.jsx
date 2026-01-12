import './Card.css';

export const Card = ({title="Heba", description="Faisal"}) => {
    return(
        <div className='card'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

