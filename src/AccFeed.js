import React from 'react'
import "./AccFeed.css";
import { useStateValue } from './StateProvider';

export default function AccFeed() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className='wrapperr'>
            <div className="coverr">
                <img src="https://cdn.pixabay.com/photo/2016/03/11/19/28/fern-1250903__340.jpg" />
            </div>

            <div className="id-sectionn">
                <div className="circlee">
                    <img src={user.photoURL} className="logoo" />
                </div>
                <div className="ids">
                    <h2>{user.displayName}</h2>
                    <h4>Newly Recruit at TTN</h4>
                    <div className="pro-post">
                        <div className="profile">
                            <h3>100</h3>
                            <h4>Profile View</h4>
                        </div>
                        <div className="Acc_post">
                            <h3>12</h3>
                            <h4>Post</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
