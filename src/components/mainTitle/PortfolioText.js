function Portfolio(props) {
    const { title, subtitle } = props;
    return (
        <div className="portfilio">
        <h2 className='main-title'>{title}</h2>
<p className="main-subtitle" >{subtitle}</p>
      </div> 
    )
}

export default Portfolio;

