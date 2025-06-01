export const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  
  // Handle YYYY-MM format
  if (/^\d{4}-\d{2}$/.test(dateString)) {
    const [year, month] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }
  
  // Handle YYYY-MM-DD format
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }
  
  return dateString;
};

export const formatDateRange = (startDate: string, endDate: string, current: boolean = false): string => {
  const formattedStart = formatDate(startDate);
  
  if (current) {
    return `${formattedStart} - Present`;
  }
  
  const formattedEnd = formatDate(endDate);
  return `${formattedStart} - ${formattedEnd}`;
};