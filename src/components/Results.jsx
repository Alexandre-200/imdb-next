

export default function Results({ results }) {
   // console.log("results ",results)
    return (
        <div>
            {results.map((result) => {

                <div key={result.id}>
                    <h2>{result.id}</h2>
                    {
                        console.log((result.id))
                    }
                </div>
            })}
        </div>
    );
}