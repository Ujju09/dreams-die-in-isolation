import Sidebar from "./sidebar"


export default function Wrapper({children}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: '0',
            padding: '0',
          }}>
            <Sidebar/>
            {children}
            <Sidebar/>
            </div>
    )
}