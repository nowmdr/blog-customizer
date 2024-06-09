import { useState, useRef } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Select } from 'components/select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { Text } from '../text';
import { useOutsideClickClose } from '../../hooks/useOutsideClickClose';
import {
	fontFamilyOptions,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	fontColors,
	OptionType,
	defaultArticleState,
} from 'src/constants/articleProps';

import { Button } from 'components/button';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';
interface ArticleParamsFormProps {
	isMenuOpen: boolean;
	setIsMenuOpen: (isOpen: boolean) => void;
	setFontFamily: (fontFamily: OptionType) => void;
	setFontColor: (fontColor: OptionType) => void;
	setBackgroundColor: (backgroundColor: OptionType) => void;
	setContentWidth: (contentWidth: OptionType) => void;
	setFontSize: (fontSize: OptionType) => void;
}

export const ArticleParamsForm = ({
	isMenuOpen,
	setIsMenuOpen,
	setFontFamily,
	setFontColor,
	setBackgroundColor,
	setContentWidth,
	setFontSize,
}: ArticleParamsFormProps) => {
	const rootRef = useRef<HTMLDivElement>(null);
	useOutsideClickClose({
		isOpen: isMenuOpen,
		rootRef,
		onChange: setIsMenuOpen,
	});
	// form states
	const [selectedFontFamily, setSelectedFontFamily] = useState<OptionType>(
		defaultArticleState.fontFamilyOption
	);
	const [selectedFontColor, setSelectedFontColor] = useState<OptionType>(
		defaultArticleState.fontColor
	);
	const [selectedBackgroundColor, setSelectedBackgroundColor] =
		useState<OptionType>(defaultArticleState.backgroundColor);
	const [selectedContentWidth, setSelectedContentWidth] = useState<OptionType>(
		defaultArticleState.contentWidth
	);
	const [selectedFontSize, setSelectedFontSize] = useState<OptionType>(
		defaultArticleState.fontSizeOption
	);
	// form handlers
	const handleApply = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setFontFamily(selectedFontFamily);
		setFontColor(selectedFontColor);
		setBackgroundColor(selectedBackgroundColor);
		setContentWidth(selectedContentWidth);
		setFontSize(selectedFontSize);
	};
	const handleReset = () => {
		// fontSize
		setFontFamily(defaultArticleState.fontFamilyOption);
		setSelectedFontFamily(defaultArticleState.fontFamilyOption);
		//fontColor
		setFontColor(defaultArticleState.fontColor);
		setSelectedFontColor(defaultArticleState.fontColor);
		//bgColor
		setBackgroundColor(defaultArticleState.backgroundColor);
		setSelectedBackgroundColor(defaultArticleState.backgroundColor);
		//contentWidth
		setContentWidth(defaultArticleState.contentWidth);
		setSelectedContentWidth(defaultArticleState.contentWidth);
		//fontSize
		setFontSize(defaultArticleState.fontSizeOption);
		setSelectedFontSize(defaultArticleState.fontSizeOption);
	};
	return (
		<>
			<ArrowButton
				isMenuOpen={isMenuOpen}
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			/>
			<aside
				ref={rootRef}
				className={clsx(styles.container, {
					[styles.container_open]: isMenuOpen,
				})}>
				<form className={styles.form} onSubmit={handleApply}>
					<Text as='h2' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<Select
						selected={selectedFontFamily}
						onChange={setSelectedFontFamily}
						options={fontFamilyOptions}
						title='Шрифт'
					/>
					<RadioGroup
						name={'font-size'}
						options={fontSizeOptions}
						selected={selectedFontSize}
						onChange={setSelectedFontSize}
						title={'Размер шрифта'}
					/>
					<Select
						selected={selectedFontColor}
						onChange={setSelectedFontColor}
						options={fontColors}
						title='Цвет шрифта'
					/>
					<Separator></Separator>
					<Select
						selected={selectedBackgroundColor}
						onChange={setSelectedBackgroundColor}
						options={backgroundColors}
						title='Цвет фона'
					/>
					<Select
						selected={selectedContentWidth}
						onChange={setSelectedContentWidth}
						options={contentWidthArr}
						title='Ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={handleReset} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
