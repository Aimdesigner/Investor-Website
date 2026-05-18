const FooterColumn = ({ title, links }) => {
    return (
      <div className="footer-column">
        <h4 className="text-lg font-semibold mb-4">{title}</h4>
  
        <ul>
          {links.map((link, index) => (
            <li key={index} className="mb-2">
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
  
      </div>
    );
  };
  
  export default FooterColumn;