import React, {Fragment} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {follow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching} from "../redux/users-reducer";
import axios from "axios";
import Preloader from "../common/preloader/Preloader"

class UsersContainer extends React.Component{
	// constructor (props){
	// 	super(props);
	// };

	componentDidMount(){
		this.props.toggleIsFetching(true);
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
			this.props.toggleIsFetching(false);
		})
	};

	onPageNumberChanged = (pageNumber) =>{
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		axios({
			method:"get",
			url:"https://social-network.samuraijs.com/api/1.0/users",
			params: {
				count: this.props.pageSize,
				page:pageNumber,
			},
		}).then(response=>{
			this.props.setUsers(response.data.items);
			this.props.toggleIsFetching(false);
		})
	};

	render(){ return (
				<>
					<Users 
						totalCount={this.props.totalCount}
						pageSize={this.props.pageSize}
						currentPage={this.props.currentPage}
						onPageNumberChanged={this.onPageNumberChanged}
						users={this.props.users}
						follow={this.props.follow}
					/>
					{this.props.isFetching? <Preloader/>: null}
				</>
	);
	}
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
				pageSize: state.usersPage.pageSize,
				totalCount: state.usersPage.totalUsersCount,
				currentPage: state.usersPage.currentPage,
				isFetching: state.usersPage.isFetching,
    }
};

const mapDispatchToProps = {
      follow,
      setUsers,
			setCurrentPage,
			setTotalCount,
			toggleIsFetching,
};


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);