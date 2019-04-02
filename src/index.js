import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        
        <div className="ui container comments">
        <ApprovalCard />
            <CommentDetail 
                author="Same" 
                avatar={faker.image.avatar()} 
                timeAgo="Today at 4:45PM" 
                content="Hello" 
            />
            <CommentDetail 
                author="Alex" 
                avatar={faker.image.avatar()} 
                timeAgo="Today at 3:45PM" 
                content="Hello2" 
            />
            <CommentDetail 
                author="Jane" 
                avatar={faker.image.avatar()} 
                timeAgo="Yesterday at 4:45PM" 
                content="Hello3" 
            />
        </div>
    )
};


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);