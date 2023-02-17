

const Layouts = ({children}) =>{
    return (
        <>
        <div className="bg-blur">
            <div className="container">
                <div className="content-layout">
                {children}
                </div>
            </div>
        </div>

        </>

    )
}

export default Layouts;