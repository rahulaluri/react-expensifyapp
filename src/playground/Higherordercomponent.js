 
const Info = (props) => (
    <div>
    This is the info: {props.info}
    </div>
    );
    
    const AdminData = (WrappedComponent) => {
    return (props) => (
        <div>
           {props.isAuth ? <WrappedComponent {...props}/> : <h1>Please login to continue</h1>} 
           
        </div>
    );
    }
    
    const AdminInfo = AdminData(Info);
    
    ReactDOM.render(<AdminInfo isAuth={true} info="Love"/>, document.getElementById('app'));
      
    