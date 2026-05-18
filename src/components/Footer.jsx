import { footerColumns } from "../data/footerData";
import FooterColumn from "./FooterColumn";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container px-4">

        {/* Logo */}
        <div className="footer-logo">
          <h2 className="text-3xl font-bold text-red-700 mb-8">
            Vanguard
          </h2>
        </div>

        {/* Main Grid */}
        <div className="main_grid_wrap grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Footer Columns */}
          <div className="footer_4_clm lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-4">
            {footerColumns.map((column, index) => (
              <FooterColumn
                key={index}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>

          {/* Social Section */}
          <div className="lg:col-span-3">
            <FooterSocial />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;