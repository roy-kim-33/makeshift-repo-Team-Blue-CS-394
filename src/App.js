import logo from './logo.svg';
import './App.css';

const job = [
	{
		"title": "job",
		"id" : 1,
		"pay" :	15,
		"term" : "Spring 2022",
		"location" : "Remote",
		"description" : "text"
	},
	{
		"title": "job",
		"id" : 1,
		"pay" :	15,
		"term" : "Spring 2022",
		"location" : "Remote",
		"description" : "text"
	}
]

const JobList = ({jobs}) => {
	return(
		<div className="FILLER">{jobs.map((job) => (
			<div className="FILLER">{job.title}</div>
		))}
		</div>
	)
}

function App() {
  
  return (
    <div className="App">
		<JobList jobs={job}></JobList>
    </div>
  );
}

export default App;
