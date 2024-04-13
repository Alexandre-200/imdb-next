"use client"

export default function Error({ error, reset }) {

    return (
        <div className="text-center mt-10">
            <h1>Algo deu errado, por favor tente novamente mais tarde.</h1>
            <button className="hover:text-amber-600 mt-5" onClick={()=>reset()}>Tentar Novamente</button>
        </div>
    )
}