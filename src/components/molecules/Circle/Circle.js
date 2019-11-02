import React from 'react';

import styles from './Circle.module.css';

const Circle = props => {
	return (
		<div className={styles['navigation-circle']}>
			{/* circle */}
			<ul className={styles['navigation-circle__list']}>
				{props.list.map((item, idx) => {
					const angle = (360 / props.list.length) * idx;
					return (
						<li
							key={idx}
							className={styles['navigation-circle-list-item']}
							style={{
								transform: `rotateZ(${angle}deg)`
							}}
						>
							<a
								href={item.path}
								className={
									styles['navigation-circle-list-item__point']
								}
							>
								<div
									className={
										styles[
											'navigation-circle-list-item__meta'
										]
									}
									style={{
										transform: `rotateZ(${90 - angle}deg)`
									}}
								>
									<h1
										className={
											styles[
												'navigation-circle-list-item__title'
											]
										}
									>
										{item.title}
									</h1>
									<span
										className={
											styles[
												'navigation-circle-list-item__description'
											]
										}
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
