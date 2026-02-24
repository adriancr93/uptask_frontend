export function formatDate(isoSring: string) : string {
    const date = new Date(isoSring)
    const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
    return formatter.format(date)
}