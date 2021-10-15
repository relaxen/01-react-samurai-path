import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
	setCurrentPage,
	getUsers,
	following,
} from '../../redux/users-reducer';
import Preloader from '../common/preloader/Preloader';

class UsersContainer extends React.Component {

	componentDidMount() {

		this.props.getUsers(this.props.pageSize,this.props.currentPage);

	};

	onPageNumberChanged = (pageNumber) => {

		this.props.getUsers(this.props.pageSize,pageNumber);

	};

	render() {
		return (
			<>
				<Users
					totalCount={this.props.totalCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageNumberChanged={this.onPageNumberChanged}
					users={this.props.users}
					following={this.props.following}
					isFollowing={this.props.isFollowing}
				/>
				{this.props.isFetching ? <Preloader /> : null}
			</>
		);
	};
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.usersData,
		pageSize: state.usersPage.pageSize,
		totalCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		isFollowing: state.usersPage.isFollowing,
	};
};

const mapDispatchToProps = {
	setCurrentPage,
	getUsers,
	following,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
