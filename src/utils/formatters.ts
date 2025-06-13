/**
 * Formats a date string into a human-readable format
 * @param dateString - ISO date string or any format that Date can parse
 * @returns Formatted date string (e.g., "May 19, 2025")
 */
export function formatDate(dateString: string | Date): string {
  if (!dateString) return 'N/A';
  
  try {
    const date = dateString instanceof Date ? dateString : new Date(dateString);
    
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return 'Invalid date';
    }

    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
}

/**
 * Format a date range (useful for reports or date filters)
 * @param startDate - Start date string or Date object
 * @param endDate - End date string or Date object
 * @returns Formatted date range string
 */
export function formatDateRange(startDate: string | Date, endDate: string | Date): string {
  try {
    const start = formatDate(startDate);
    const end = formatDate(endDate);
    return `${start} - ${end}`;
  } catch (error) {
    console.error('Error formatting date range:', error);
    return 'Invalid date range';
  }
}

/**
 * Get a friendly representation of time elapsed since a date
 * @param dateString - Date string or Date object
 * @returns Human-readable relative time
 */
export function timeAgo(dateString: string | Date): string {
  if (!dateString) return 'N/A';
  
  try {
    const date = dateString instanceof Date ? dateString : new Date(dateString);
    
    if (isNaN(date.getTime())) {
      return 'Invalid date';
    }
    
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    // Less than a minute
    if (diffInSeconds < 60) {
      return 'just now';
    }
    
    // Less than an hour
    const minutes = Math.floor(diffInSeconds / 60);
    if (minutes < 60) {
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    }
    
    // Less than a day
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    }
    
    // Less than a week
    const days = Math.floor(hours / 24);
    if (days < 7) {
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    }
    
    // Less than a month
    if (days < 30) {
      const weeks = Math.floor(days / 7);
      return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
    }
    
    // Less than a year
    const months = Math.floor(days / 30);
    if (months < 12) {
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    }
    
    // More than a year
    const years = Math.floor(days / 365);
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  } catch (error) {
    console.error('Error calculating time ago:', error);
    return 'Unknown time';
  }
}

/**
 * Format a date for use in input[type="date"] fields
 * @param dateString - Date string or Date object
 * @returns YYYY-MM-DD formatted string for HTML date inputs
 */
export function toInputDateFormat(dateString: string | Date): string {
  try {
    const date = dateString instanceof Date ? dateString : new Date(dateString);
    
    if (isNaN(date.getTime())) {
      return '';
    }
    
    return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD
  } catch (error) {
    console.error('Error formatting date for input:', error);
    return '';
  }
}