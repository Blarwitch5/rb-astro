function toggleDisplay(
	items: NodeListOf<Element>,
	shouldDisplay: boolean,
): void {
	items.forEach((item) => {
		item.classList.toggle("block", shouldDisplay);
		item.classList.toggle("hidden", !shouldDisplay);
	});
}

export function handleThemeChange(): void {
	const currentTheme = localStorage.getItem("theme");

	if (currentTheme) {
		const isDark = currentTheme === "dark";

		const logoLight = document.querySelectorAll(".logo-light");
		const logoDark = document.querySelectorAll(".logo-dark");
		toggleDisplay(logoDark, isDark);
		toggleDisplay(logoLight, !isDark);

		const itemsLight = document.querySelectorAll(".light-theme");
		const itemsDark = document.querySelectorAll(".dark-theme");
		toggleDisplay(itemsLight, !isDark);
		toggleDisplay(itemsDark, isDark);
	}
}
