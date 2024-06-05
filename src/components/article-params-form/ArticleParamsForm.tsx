import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';
interface ArticleParamsFormProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export const ArticleParamsForm = ({
	isOpen,
	setIsOpen,
}: ArticleParamsFormProps) => {
	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
