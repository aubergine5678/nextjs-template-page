const NavBar = () => {
    return(
        <div className="navbar bg-primary text-primary-content">
            <div className="flex-1">
                <h1 className="mx-10 font-bold normal-case text-xl rounded-lg flex-none">Website title here!</h1>
                <div className="divider divider-horizontal"></div>
                <div className="flex-1">
                    <li className="btn btn-ghost font-normal normal-case text-xl rounded-lg flex-auto"><a>Page one</a></li>
                    <li className="btn btn-ghost font-normal normal-case text-xl rounded-lg"><a>Page two</a></li>
                    <li className="btn btn-ghost font-normal normal-case text-xl rounded-lg"><a>Page three</a></li>
                    <li className="btn btn-ghost font-normal normal-case text-xl rounded-lg"><a>etc etc etc...</a></li>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="flex-none mx-10">
                    <h1>Right-aligned navbar div</h1>
                </div>
            </div>
        </div>
    );
}

export default NavBar;