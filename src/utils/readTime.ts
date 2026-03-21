/**
 * Calculate reading time based on word count
 * @param content - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200)
 * @returns Estimated reading time in minutes
 */
export function calculateReadTime(content: string, wordsPerMinute: number = 200): number {
	const words = content.trim().split(/\s+/).length;
	return Math.ceil(words / wordsPerMinute);
}

/**
 * Format reading time for display
 * @param minutes - Number of minutes
 * @returns Formatted string like "5 min read"
 */
export function formatReadTime(minutes: number): string {
	return `${minutes} min read`;
}
