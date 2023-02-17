import Component1ReactView from "component1-lib/frontend/views/Component1ReactView"
import { usePerson } from "../../PersonContext";



export default function Component1() {
    const {getPerson, setPerson} = usePerson();
    return (
        <>
            <Component1ReactView person={getPerson}/>
        </>
    );
}
