import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query{
    lessons{
      id
      title
      teacher{
        name
      }
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {

  const { data } = useQuery<{ lessons: Lesson []}>(GET_LESSONS_QUERY)

  console.log(data);

  return (
    <div>
      <h1 className = "text-5xl font-bold text-violet-500">Hello, world!</h1>
      <ul>
        {data?.lessons.map(lesson => {
          return (
            <li key={lesson.id}>{lesson.title}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
