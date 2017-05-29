import React,  {Component} from 'react';

import style from './style.css';

class Banner extends Component {
		render () {

				let imageSrc = 'https://images.unsplash.com/photo-1474575981580-1ec7944df3b2?dpr=2&auto=format&fit=crop&w=1080&h=673&q=80&cs=tinysrgb&crop=&bg='
				return (
						<div className={style.banner}>
								<img src = {imageSrc} alt = "Hello"/>
						</div>
				)
		}
}

export default Banner;