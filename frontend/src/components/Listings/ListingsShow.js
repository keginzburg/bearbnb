import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListing } from '../../store/listings';

import ShowHeader from './Show/ShowHeader';
import ShowPhotos from './Show/ShowPhotos';
import ShowDetails from './Show/ShowDetails';

import './ListingsShow.css';
import { Redirect } from 'react-router';

const ListingsShow = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const listing = useSelector(state => state.entities.listings[id])

    useEffect(() => {
        dispatch(fetchListing(id));
    }, [id, dispatch]);

    if (!listing) return null;

    return (
        <div className="listing-container">
            <div className='listing-show'>
                <ShowHeader listing={listing} />
                <ShowPhotos listing={listing} />
                <ShowDetails listing={listing} />
                {/* <Reservation/> */}
            </div>
        </div>
    );
};

export default ListingsShow;