import React from 'react'
import {ProjectContainer , ProjectH1 , ProjectWrapper , ProjectCard , ProjectH2 , ProjectImg , ProjectP } from './ProjectsElements'
import ExpenseTracker from '../../images/expensetracker.png';
import Recipe from '../../images/recipe.png';
import Ecom from '../../images/ecom.png';
const Projects = () => {
    return (
        <ProjectContainer id={'projects'}>
            <ProjectH1>Web applications</ProjectH1>
            <ProjectWrapper>
                <ProjectCard>
                    <ProjectH2>E-commerce app</ProjectH2>
                    <ProjectImg src={Ecom} alt='not available'/>
                    <ProjectP>
                        Online store with Firebase and ReactJS.
                    </ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectH2>Expense Tracker</ProjectH2>                   
                    <ProjectImg src={ExpenseTracker} alt='not available'/>
                    <ProjectP>
                        Track your daily expenses with Expense-Tracker.
                    </ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectH2>Recipe app</ProjectH2>
                    <ProjectImg src={Recipe} alt='not available'/>
                    <ProjectP>
                        Food Recipe App for various ingredients used in particular recipe.
                    </ProjectP>
                </ProjectCard>
            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Projects ;