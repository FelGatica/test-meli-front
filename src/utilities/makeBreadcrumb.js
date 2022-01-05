export const makeBreadcrumb = (breadcrumbs) => {
    if (breadcrumbs)
        return breadcrumbs.map(function (breadcrumb) { return breadcrumb.name });
}

export default makeBreadcrumb;