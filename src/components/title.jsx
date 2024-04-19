
const Title = ({title, size}) => {
    
    const styles = {
        color: '#777',
        fontSize: '12px',
        
    }

    if (size==='small'){
        styles.fontSize = '18px'
    }else if(size ==='medium'){
        styles.fontSize= '24px'
    }else if(size==='large'){
        styles.fontSize = '32px'
    }

    return(
        <h1 style = {styles}>{title}</h1>
    )
};
export default Title;