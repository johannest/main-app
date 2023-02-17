import { ReactNode, createContext, useContext, useState } from 'react'

type Props = {
    children: ReactNode
}
type Person = {
    name: string
}
type ContextValue = {
    getPerson: Person | undefined
    setPerson: (person: Person) => void
}
const Context = createContext<ContextValue | undefined>(undefined)

export function PersonContext({ children }: Props): JSX.Element {
    const[getPerson, setPerson] = useState<Person>()

    return <Context.Provider value={{
        getPerson,
        setPerson
      }}>
      {children}
    </Context.Provider>
}

export function usePerson() {
    const context = useContext(Context)

    if (context === undefined) {
        throw new Error("usePerson should be called inside PersonContext")
    }

    return context
}