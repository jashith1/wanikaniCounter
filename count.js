let currentLevelPage = $('.page-header .page-header__title-subtext').text();
currentLevelPage = Number(currentLevelPage.substring(7, currentLevelPage.indexOf('-')));
console.log(currentLevelPage);

$('.container .character-grid .character-grid__items').each((index, level) => {
	let incompleteItems = 0;
	let completedItems = 0;
	let burnedItems = 0;
	$(level)
		.children()
		.each((index, item) => {
			if (item.children.length > 1) {
				incompleteItems++;
				return true;
			}
			const classes = $(item).find('a').attr('class').split(' ');
			if (classes.length == 2) {
				completedItems++;
				return true;
			}
			let status = classes[2].split('-');
			status = status[status.length - 1];
			if (status == 'burned') burnedItems++;
			else if (status == 'locked') incompleteItems++;
			else if (status == 'recent') completedItems++;
			else console.log('unkown elememt ' + status);
		});
	console.log(`Level ${currentLevelPage + index} : ${completedItems} completed, ${incompleteItems} incomplete, ${burnedItems} burned, total ${completedItems + incompleteItems + burnedItems}`);
});
