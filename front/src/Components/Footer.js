

function Footer() {
    return (
        <div className="bg-dark text-white text-left fixed-bottom pl-2">
            <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />
            <span> Some footer information</span>
        </div>
    ) 
}

export default Footer;