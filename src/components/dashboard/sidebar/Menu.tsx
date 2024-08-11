import NavLink from "./NavLink";
import homeIcon from "../../../assets/Home.svg";
import chatIcon from "../../../assets/Union.svg";
import fileIcon from "../../../assets/File.svg";
import dockIcon from "../../../assets/File_dock.svg";
import ticketIcon from "../../../assets/Ticket.svg";
import apiIcon from "../../../assets/CPU.svg";
import bookIcon from "../../../assets/Book_open_alt.svg";

const Menu = () => {
  let links: { icon: string; text: string; active?: boolean }[] = [
    {
      icon: homeIcon,
      text: "Dachboard",
      active: true
    },
    {
      icon: chatIcon,
      text: "Chatbots",
    },
    {
      icon: fileIcon,
      text: "Files",
    },
    {
      icon: dockIcon,
      text: "Propmts",
    },
    {
      icon: ticketIcon,
      text: "File Wizard",
    },
    {
      icon: apiIcon,
      text: "Api",
    },
    {
      icon: bookIcon,
      text: "User Guide",
    },
  ];

  return (
    <div>
      <h2 style={{color: '#D5D2D2', fontWeight: '700', fontSize: '20px', padding: '1rem', marginBottom: '1rem'}}>Menu</h2>
      <ul>
        {links.map((link) => (
          <NavLink key={link.icon} icon={link.icon} title={link.text} active={link.active} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
