import { useState } from "react"
import PhaseFilters from "./PhaseFilters"
import SearchInput from "./SearchInput"
import ProjectList from "./ProjectList"

const ProjectContainer = ({ projects, onUpdateProjects, onDeleteProject }) => {
	const [searchQuery, setSearchQuery] = useState("")
	const [phase, setPhase] = useState(0)

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
			<h2>Projects</h2>
			<PhaseFilters setPhase={setPhase} />
			<SearchInput setSearchQuery={setSearchQuery} />
			<ProjectList
				projects={searchResults}
				onUpdateProjects={onUpdateProjects}
				onDeleteProject={onDeleteProject}
			/>
		</section>
	)
}

export default ProjectContainer
