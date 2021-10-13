import React from 'react';
import styles from './Preloader.module.scss'

let Preloader = () =>{
	return (
		<div className={styles.wrapper}>
			<div className={styles.profileMainLoader}>
				<div className={styles.loader}>
					<svg className={styles.circularLoader}viewBox="25 25 50 50" >
						<circle className={styles.loaderPath} cx="50" cy="50" r="20" fill="none" stroke="#70c542" stroke-width="2" />
					</svg>
				</div>
			</div>
		</div>
	)
};

export default Preloader;