export default function Results({ results }) {
    return (
        <div>
            {results.map((result) => {

                <div key={result.id}>
                    <h2>{result.id}</h2>
                </div>
            })}
        </div>
    );
}