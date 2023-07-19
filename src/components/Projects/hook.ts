import { useCallback, useEffect, useState } from "preact/hooks"

interface IProjects {
  title: string
  description: string
  stack: string[]
  link?: string,
  image: string
}

export const useProjects = (projects: IProjects[]) => {
  const [filters, setFilters] = useState<string[]>([])
  const [myProjects, setMyProjects] = useState(projects)

  const getSkills = useCallback(() => {
    const skills = projects.map(item => item.stack).flat()
    return [...new Set(skills)]
  }, [projects])

  const addFilter = (name: string) => {
    setFilters([...filters, name])
  }

  const removeFilter = (name: string) => {
    setFilters(
      filters.filter(item => item !== name)
    )
  }

  const onChange = (e: any, name: string) => {
    if(e.target.checked){
      addFilter(name)
    }else{
      removeFilter(name)
    }
  }

  const doFilter = () => {
    const myProjectsFiltered = projects.filter(project => {
      return project.stack.some(stack => {
        return filters.includes(stack)
      })
    })

    if(filters.length === 0){
      setMyProjects(projects);
    }else{
      setMyProjects(myProjectsFiltered);
    }
  }

  useEffect(() => {
    doFilter()
  }, [filters])

  return {
    getSkills,
    onChange,
    myProjects
  }
}