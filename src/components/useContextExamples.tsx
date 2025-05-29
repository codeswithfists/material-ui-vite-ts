import { Divider, Typography } from "@mui/material";
import { createContext, useContext, useState } from "react";

export interface User {
    isSubscribed: boolean;
    name: string;
}

export function ContextExamples_Dashboard() {
    const [ user ] = useState<User>({
        isSubscribed: true,
        name: "Bob"
    });

    return (
        <div>
            {/* with prop drilling => bad*/}
            <Dashboard1 user={user} />

            <Divider />

            {/* using context => better */}
            <DashboardContext.Provider value={user}>
                <Dashboard />
            </DashboardContext.Provider>
        </div>
    );
}

/************************************************************************************************************/
// these components are NOT using context (ie. prop drilling)

interface Sidebar1Props { user: User; }
function Sidebar1({ user } : Sidebar1Props) {
    return (
        <div>
            <div>{user.name}</div>
            <div>{user.isSubscribed ? "Subscribed" : "Not Subscribed"}</div>
        </div>
    );
}

interface Profile1Props { user: User; }
function Profile1({ user } : Profile1Props) {
    return <div>{user.name}</div>;
}

// Right now, Dashboard doesn't really do anything with 'user' - it just forwards it along to Sidebar and Profile.
interface DashboardProps1 { user: User; }
function Dashboard1({ user } : DashboardProps1) {
  return (
    <div>
      <Typography variant="h6">Dashboard (prop drilling)</Typography>
      <Sidebar1 user={user} />
      <Profile1 user={user} />
    </div>
  );
}

/************************************************************************************************************/
// these components are using context

interface SidebarProps { }
function Sidebar({ } : SidebarProps) {
    const user = useUserContext();

    return (
        <div>
            <div>{user.name}</div>
            <div>{user.isSubscribed ? "Subscribed" : "Not Subscribed"}</div>
        </div>
    );
}

interface ProfileProps { }
function Profile({ } : ProfileProps) {
    const user = useUserContext();

    return <div>{user.name}</div>;
}

interface DashboardProps { }
function Dashboard({ } : DashboardProps) {
  return (
    <div>
      <Typography variant="h6">Dashboard (useContext)</Typography>
      <Sidebar />
      <Profile />
    </div>
  );
}

/************************************************************************************************************/
// This context-related stuff could be created in a separate file.

// The reason we are using undefined is because we are creating the contect outisde
// of any component and we don't have access to the user at this stage.
const DashboardContext = createContext<User | undefined>(undefined);

// Custom hook to handle the fact that 'user' could be undefined
function useUserContext() : User {
    const user = useContext(DashboardContext);

    if (user === undefined) {
        throw new Error("useUserContext must be used with a DashboardContext");
    }

    return user;
}

/************************************************************************************************************/