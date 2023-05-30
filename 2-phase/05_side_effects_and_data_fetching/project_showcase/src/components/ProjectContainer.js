import { useState } from "react"
import PhaseFilters from "./PhaseFilters"
import SearchInput from "./SearchInput"
import ProjectList from "./ProjectList"

const ProjectContainer = ({ projects, setProjects }) => {
	const [searchQuery, setSearchQuery] = useState("")
	const [phase, setPhase] = useState(0)

	const handleClick = () => {
		fetch("http://localhost:4000/projects")
			.then((res) => res.json())
			.then((projects) => setProjects(projects))
	}

	const phaseResults = () => {
		if (!!phase) {
			return projects.filter((project) => {
				return project.phase === phase
			})
		} else {
			return projects
		}
	}

	const searchResults = phaseResults().filter((project) => {
		return project.name.toLowerCase().includes(searchQuery.toLowerCase())
	})

	return (
		<section>
			<button onClick={handleClick}>Load Projects</button>
			<h2>Projects</h2>
			<PhaseFilters setPhase={setPhase} />
			<SearchInput setSearchQuery={setSearchQuery} />
			<ProjectList projects={searchResults} />
		</section>
	)
}

export default ProjectContainer
