import Avatar from "../avatar/avatar";
import Socials from "../socials/socials";
import SidebarInfo from "../informations/sidebar-info";
import CvButton from "./cv-button";

export default function Sidebar() {
    return (
        <div className="h-dvh flex flex-col justify-between">
            <div>
                <Avatar />
                <Socials />
                <SidebarInfo />
            </div>
            <div>
                <CvButton />
            </div>
        </div>
    );
};