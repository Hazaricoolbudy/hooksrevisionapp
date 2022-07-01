

const Link = ({ className, href, children }) => {
    const onClickHandler = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault()
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent)



    }
    return (
        <a href={href} className={className} onClick={onClickHandler}> {children}
        </a>
    )
}

export default Link
