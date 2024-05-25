import SaveProgress from "./testHooks/SaveProgress"
import StateUserOnline from "./testHooks/StatusUserOnline"


export default function User() {






    return (
        <div className="flex flex-col items-center justify-center h-64 bg-green-50">
            <h4 className="font-bold">Custom Hook</h4>
            <SaveProgress />
            <StateUserOnline />
        </div>
    )

}



