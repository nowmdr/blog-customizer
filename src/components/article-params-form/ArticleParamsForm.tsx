import React, { useState } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Select } from 'components/select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
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
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	setFontFamily: (fontFamily: OptionType) => void;
	setFontColor: (fontColor: OptionType) => void;
	setBackgroundColor: (backgroundColor: OptionType) => void;
	setContentWidth: (contentWidth: OptionType) => void;
	setFontSize: (fontSize: OptionType) => void;
}

export const ArticleParamsForm = ({
	isOpen,
	setIsOpen,
	setFontFamily,
	setFontColor,
	setBackgroundColor,
	setContentWidth,
	setFontSize,
}: ArticleParamsFormProps) => {
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
	const handleApply = () => {
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
			<ArrowButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form}>
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
						<Button title='Применить' type='submit' onClick={handleApply} />
					</div>
				</form>
			</aside>
		</>
	);
};
