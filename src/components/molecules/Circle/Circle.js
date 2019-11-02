import React from 'react';

import styles from './Circle.module.css';

const Circle = props => {
	return (
		<div className={styles.circle}>
			{/* circle */}
			<ul className={styles.list}>
				{props.list.map((item, idx) => {
					const angle = (360 / props.list.length) * idx;
					return (
						<li
							key={idx}
							className={styles.listItem}
							style={{
								transform: `rotateZ(${angle}deg)`
							}}
						>
							<a
								href={item.path}
								className={styles.listItemPoint}
							>
								<div
									className={styles.listItemMeta}
									style={{
										transform: `rotateZ(${90 - angle}deg)`
									}}
								>
									<h1 className={styles.listItemTitle}>
										{item.title}
									</h1>
									<span
										className={styles.listItemDescription}
									>
										{item.description}
									</span>
								</div>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Circle;
