function Footer() {
    return (
        <div className="bg-dark text-white fixed-bottom pl-2">
            <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />
            <span> Some footer information</span>
        </div>
    ) 
}

export default Footer;