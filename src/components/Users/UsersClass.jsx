import React from 'react';
import axios from 'axios';
import styles from './Users.module.scss';


class Users extends React.Component{
	// constructor (props){
	// 	super(props);
	// };

	componentDidMount(){
		axios({
			method:"get",
			url:"https://social-network.samuraijs.com/api/1.0/users",
			params: {
				count: this.props.pageSize,
				page:this.props.currentPage,
			},
		}).then(response=>{
			this.props.setUsers(response.data.items);
			this.props.setTotalCount(response.data.totalCount);
		})
	};

	onPageNumberChanged = (pageNumber) =>{
		this.props.setCurrentPage(pageNumber);
		axios({
			method:"get",
			url:"https://social-network.samuraijs.com/api/1.0/users",
			params: {
				count: this.props.pageSize,
				page:pageNumber,
			},
		}).then(response=>{
			this.props.setUsers(response.data.items)
		})
	}


	render(){
		let pagesCount = Math.ceil(+this.props.totalCount / +this.props.pageSize);

		let pages = [];
		for ( let i = 1; i <= pagesCount; i++){
			pages.push(i);
		};
		return <div id="img">
			<div className="pagination">
				{
					pages.map(p=>{
						return	<span className={this.props.currentPage === p && styles.selectedPage + " " + styles.pageNumber}
						onClick={(e)=>{this.onPageNumberChanged(p)}}>{p}</span>
					})
				}
			</div>
        {
            this.props.users.map(user => <div key={user.id}>
                <div>
                    <img src={user.photos.small} alt="avatar"/>
                    <button onClick={() => {
                        this.props.follow(user.id)
                    }}>
                        {user.followed ? 'unfollow' : 'follow'}
                    </button>
                </div>
                <div>
                    <div>Name: {user.name}</div>
                    <div>Status: {user.status}</div>
                    <div>Location: {user.country}, {user.city}</div>
                </div>
            </div>)
        }
        <br/>
        <input type="number" id="countNumber"/>
    </div>

	};

};

export default Users;