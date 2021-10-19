import React from 'react';
import style from './ProfileInfo.module.scss'

class ProfileStatus extends React.Component {

	state = {
		editMode: false,
		status: this.props.status
	}

	activateEditMode = () => {
		this.setState({
			editMode: true,
		});
	};
	deactivateEditMode = () => {
		this.setState({
			editMode: false,
		});
		this.props.updateUserStatus(this.state.status);
	};

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value,
		});
	};

	componentDidUpdate(prevProps) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}

	render() {
		return <>
			<div className={style.status}>
				<span>Статус: </span>
				{!this.state.editMode ?
					<div onDoubleClick={this.activateEditMode}>{this.props.status}</div> :
					<input onBlur={this.deactivateEditMode}
						onChange={this.onStatusChange}
						autoFocus={true} type="text" value={this.state.status} />}
			</div>
		</>
	};
}

export default ProfileStatus;