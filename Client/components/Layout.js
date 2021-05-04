

const  Layout=({children})=> {
    return (
        <div className="container mx-auto">
        <div className="">
            <main className="">
            {children}
            </main>
        </div>
        </div>
    )
}

export default Layout;