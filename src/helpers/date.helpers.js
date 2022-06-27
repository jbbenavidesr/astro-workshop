function formatDate(date, options = {}) {
    const { locale, ...formatSettings } = Object.assign(
        {
            locale: "es-CO",
            year: "numeric",
            month: "long",
            day: "numeric",
        },
        options
    );

    return new Date(date).toLocaleDateString(locale, formatSettings);
}

export { formatDate };
