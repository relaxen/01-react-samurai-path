import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Users.module.scss';

let Users = (props) => {
	let pagesCount = Math.ceil(+props.totalCount / +props.pageSize);
	let pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div id='img'>
			<div className={styles.pagination}>
				{pages.map((p) => {
					return (
						<span
							key={p}
							className={(props.currentPage === p ? styles.selectedPage : '') + ' ' + styles.pageNumber}
							onClick={(e) => {
								props.onPageNumberChanged(p);
							}}>
							{p}
						</span>
					);
				})}
			</div>
			{props.users.map((user) => (
				<div key={user.id}>
					<div>
						<NavLink to={'/profile/' + user.id}>
							<img src={user.photos.small} alt='avatar' className={styles.avatar} />
						</NavLink>
						<button
							disabled={props.isFollowing.some((id) => id === user.id)}
							onClick={() => {
								props.following(user.id, !user.followed);
							}}>
							{user.followed ? 'unfollow' : 'follow'}
						</button>
					</div>
					<div>
						<div>Name: {user.name}</div>
						<div>Status: {user.status}</div>
						<div>Followed: {user.followed ? 'Подписан' : 'Не подписан'}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Users;
