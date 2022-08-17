const MainContent = () => {
    return(
        <div className="hero">
            <div className="hero-content text-center">
                <div className="max-w-md m-10">
                    <h1 className="text-5xl font-bold">Hello World!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className="tooltip tooltip-bottom tooltip-secondary" data-tip="This is a very useful tooltip!">
                        <button className="btn btn-lg btn-primary rounded-lg">Button!</button>
                    </div>
                </div>

                <div className="alert shadow-lg rounded-lg fixed bottom-32 right-5 w-auto">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>We use cookies on this website...</span>
                    </div>
                    <button className="btn btn-sm btn-primary rounded-md">Close</button>
                </div>
            </div>
        </div>
    );
}

export default MainContent;