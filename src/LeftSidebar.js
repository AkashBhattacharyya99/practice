import React from 'react'
import './LeftSidebar.css';
import SearchIcon from '@mui/icons-material/Search';

export default function LeftSidebar() {
    return (
        <div>
            <div className="feed-find-friend-container">
                <div className="find-friend-header">
                    <div className="heading">
                        Contacts
                        <SearchIcon className='Sidebar_Sericon'/>
                    </div>

                </div>
                <div className="find-friend-body">
                    

                    <div className="user-row">
                        <div className="user-info">
                            <img src="https://howigotjob.com/wp-content/uploads/2021/07/portrait-of-smart-young-muscular-man-posing-against-grey-background-happy-young-hispan-SBI-301327491-scaled.jpg" />
                            <span>Aman Dasila</span>
                        </div>


                    </div>

                    <div className="user-row">
                        <div className="user-info">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtTkdRA43IzSm5btEo_QNRFRBBPrQDKeDAcA&usqp=CAU" />
                            <span>Agam Agrwal</span>
                        </div>


                    </div>

                    <div className="user-row">
                        <div className="user-info">
                            <img src="https://image.shutterstock.com/image-photo/male-model-looking-good-indian-260nw-1075171139.jpg" />
                            <span>Akash Bhatt</span>
                        </div>


                    </div>

                    <div className="user-row">
                        <div className="user-info">
                            <img src="https://manofmany.com/wp-content/uploads/2019/04/David-Gandy.jpg" />
                            <span>Deep Chatt</span>
                        </div>


                    </div>

                </div>
            </div>

            <div className="feed-find-friend-container">
                <div className="find-friend-header">
                    <div className="heading">Suggestion
                        <SearchIcon className='Sidebar_Sericon' /></div>

                </div>
                <div className="find-friend-body">
                    <div className="user-row">
                        <div className="user-info">
                            <img src="https://voilastudio.in/images/VMM11/2520.webp" />
                            <span>Jason Bond</span>
                        </div>
                        <button className='action-follow'>+Friend</button>

                    </div>

                    <div className="user-row">
                        <div className="user-info">
                            <img src="https://blog-admin.voylla.com/dare-blog/wp-content/uploads/2017/04/Model-blog.jpg" />
                            <span>Aman Dasila</span>
                        </div>
                        <button className='action-follow'>+Friend</button>

                    </div>

                    <div className="user-row">
                        <div className="user-info">
                            <img src="https://www.adoremodels.co/wp-content/uploads/2020/12/RINA-ADORE-MODELS-372.jpg" />
                            <span>Aditi Roy</span>
                        </div>
                        <button className='action-follow'>+Friend</button>

                    </div>

                    <div className="user-row">
                        <div className="user-info">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpEqByKXmr7Af0KFs6pjJuFSR98pjKXwJppQ&usqp=CAU" />
                            <span>Agam Agrwal</span>
                        </div>
                        <button className='action-follow'>+Friend</button>

                    </div>



                </div>
            </div>
        </div>
    )
}
