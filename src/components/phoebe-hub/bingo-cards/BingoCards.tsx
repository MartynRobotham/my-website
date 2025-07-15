import './BingoCards.css';

const BingoCards = ({ highestNumber = 50, totalNumbers = 15, createCards = 6 }) => {

    const generateBingoCard = () => {
        const numbers: number[] = [];
        while (numbers.length < totalNumbers) {
            const randomNumber = Math.floor(Math.random() * highestNumber) + 1;

            // Ensure we don't have duplicates & no numbers ending with the same digit more than 3 times appear
            if (!numbers.includes(randomNumber) && numbers.filter(x => x % 10 === randomNumber % 10).length !== 3) {
                numbers.push(randomNumber);
            }
        }

        const numberCollection = [];

        for(let i = 1; i <= 10; i++) {
            const filteredNumbers = numbers
                .filter((number) => number % 10 === (i === 10 ? 0 : i))
                .sort((a, b) => a - b);

            const paddedArray = [...filteredNumbers];
            while (paddedArray.length < 3) {
                paddedArray.push(Number(''));
            }

            numberCollection.push({
                key: i,
                value: paddedArray
            });
        }
        return (<div className='container'>
            {numberCollection.map((m) => <div className='sub-container'>
                {(m.value.map((x) => <span className='grid'>{x !== 0 ? x : ` `}</span>))}
            </div>)}
        </div>)
    }


    return (
        <>
            {[...Array(createCards)].map(() => (<>{generateBingoCard()}</>))}
        </>
    );
};

export default BingoCards;