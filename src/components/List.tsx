import { Sub } from '../types'

interface Props {
  //to add children -> children: React.ReactNode
  subs: Array<Sub>
}

const List = ({ subs }: Props) => {
  //to add children -> const List: React.FC<Props> = ({ subs })
  const renderList = (): JSX.Element[] => {
    return subs.map((sub, index) => {
      return (
        <li key={index}>
          <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
          <h4>{sub.nick}</h4>
          <h5>{`Suscribed since ${sub.subMonths} months`}</h5>
          <p>{sub.description}</p>
        </li>
      )
    })
  }

  return <ul>{renderList()}</ul>
}

export default List
