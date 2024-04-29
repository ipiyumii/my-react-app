import propTypes from 'prop-types'

function ReusableList(props){

    const itemList = props.items;
    const category = props.category;

    const listItems = itemList.map(item => <li key = {item.id}>
        {item.name} : &nbsp;
        <b>{item.calories}</b> </li> )

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-item">{listItems}</ol>
        </>
    );
}

ReusableList.propTypes = {
    items: propTypes.arrayOf(propTypes.shape({id: propTypes.number, name: propTypes.string, calories: propTypes.number})),
    category: propTypes.string,
}

ReusableList.defaultProps = {
    category: "category",
    items: [],
}
export default ReusableList