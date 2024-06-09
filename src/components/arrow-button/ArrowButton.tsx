import arrow from 'src/images/arrow.svg';
import clsx from 'clsx';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */

export type ArrowButtonProps = {
	isMenuOpen: boolean;
	onClick: () => void;
};

export const ArrowButton = ({ isMenuOpen, onClick }: ArrowButtonProps) => {
	const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		event.stopPropagation();
		onClick();
	};
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, {
				[styles.container_open]: isMenuOpen,
			})}
			onClick={handleClick}>
			<img src={arrow} alt='иконка стрелочки' className={styles.arrow} />
		</div>
	);
};
