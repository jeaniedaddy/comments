import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        
        <div className="ui container comments">
            <ApprovalCard>
                
                <div>
                    <h2>Warning!</h2>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail 
                    author="Same" 
                    avatar={faker.image.avatar()} 
                    timeAgo="Today at 4:45PM" 
                    content="Hello" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    avatar={faker.image.avatar()} 
                    timeAgo="Today at 3:45PM" 
                    content="Hello2" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    avatar={faker.image.avatar()} 
                    timeAgo="Yesterday at 4:45PM" 
                    content="Hello3" 
                />
            </ApprovalCard>
        </div>
    )
};


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);