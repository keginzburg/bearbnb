
const ListingsIndexItem = ({listing, host}) => {

    return (
        <div className="listings-item-container">
            <h1>Title: {listing.title}</h1>
            <h2>Host: {host.fName} {host.lName}</h2>
        </div>
    )
};

export default ListingsIndexItem;