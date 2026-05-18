import SocialIcons from "./SocialIcons";
import AppButtons from "./AppButtons";

const FooterSocial = () => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">
        Connect with us
      </h4>

      <SocialIcons />

      {/* <div className="mt-6">
        <AppButtons />
      </div> */}
    </div>
  );
};

export default FooterSocial;