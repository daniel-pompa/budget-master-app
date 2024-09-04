export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    useGrouping: true,
  }).format(amount);
};

export const formatDate = (date: string): string => {
  const dateObject = new Date(date);

  if (isNaN(dateObject.getTime())) {
    throw new Error('Formato de fecha no válido');
  }

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Intl.DateTimeFormat('es-ES', options).format(dateObject);
};
