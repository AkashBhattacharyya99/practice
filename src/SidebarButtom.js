import "./SidebarButtom.css";
import TagIcon from '@mui/icons-material/Tag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import KeyIcon from '@mui/icons-material/Key';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import CodeIcon from '@mui/icons-material/Code';

export default function SidebarButtom() {
  return (
    
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItemHeadingggg">
            <img src="" className="sidebarIcon" />
            <span className="sidebarListItemHeadingggg">Recent</span>
          </li>
          <li className="sidebarListItem">
            <TagIcon className="sidebarIcon" />
            <span className="sidebarListItemText">JavaScript </span>
          </li>
          <li className="sidebarListItem">
            <CalendarMonthIcon className="sidebarIcon" />
            <span className="sidebarListItemText">App Development </span>
          </li>
          <li className="sidebarListItem">
            <PeopleOutlineIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feelance Developer</span>
          </li>
         
          
          <hr className="sidebarHr" />
          <li className="sidebarListItemHeadingggg">
            <img src="" className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <TagIcon className="sidebarIcon" />
            <span className="sidebarListItemText">JavaScript </span>
          </li>
          <li className="sidebarListItem">
            <CalendarMonthIcon className="sidebarIcon" />
            <span className="sidebarListItemText">App Development </span>
          </li>
          <li className="sidebarListItem">
            <PeopleOutlineIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feelance Developer</span>
          </li>
          
          <hr className="sidebarHr" />
          
          <li className="sidebarListItemHeadingggg">
            <KeyIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Subscription</span>
          </li>
          <li className="sidebarListItem">
            <LaptopChromebookIcon className="sidebarIcon" />
            <span className="sidebarListItemText">E-learning Bridge</span>
          </li>
          <li className="sidebarListItem">
            <CodeIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Clever Programer</span>
          </li>
        </ul>
        
        
      </div>
    
  );
}