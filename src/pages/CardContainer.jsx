function CardContainer({titulo,children}) {
    //children utilizado para mudar o conteudo do site (texto) mudando o site de acordo com oque voce gostaria, porém precisa escrever onde o comonente é chamado
    
    return (
        <>
        <div className="m-5 mt-9">
            <h1 className="text-4xl">{titulo}</h1>
            <div className="flex gap-10 ">{children} </div>
        </div>
        </>
    )
}

export default CardContainer; 