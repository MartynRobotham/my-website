import '../bingo-cards/BingoCards.css';

const NumberSquare = () => {
    const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

    return (
        <>
            <p className='ones-place-text'>ones Place</p>
            <div className="square-wrapper">
                <p className="tens-place-text">Tens Place</p>
            <div className="number-square">
                {numbers.map((num) => (
                    <div className="number-cell" key={num}>
                        {num}
                    </div>
                ))}
            </div>
            </div>
        </>
    );
};

export default NumberSquare;