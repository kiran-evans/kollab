import { useEffect, useState } from "react";
import "./ViewOptions.css";
import ViewTool from "../ViewTool/ViewTool";

function ViewOptions({tools}) {
    const [viewOptions, setViewOptions] = useState({
        sort: "date",
        difficulty: "",
        tools: [], // Array of all tools used by projects
    });
    useEffect(()=> {
        setViewOptions(prev => ({...prev, tools: tools }))
    },[tools])

    const handleSelector = ({ target }) => {
        setViewOptions((prev) => ({ ...prev, [target.name]: target.value }));
    };

    const handleReset = () => {
        setViewOptions({
            sort: "date",
            difficulty: "",
            tools: [...viewOptions.tools.map(tool=> ({...tool, isChecked: false}))],
        });
    };

    const handleToolCheck = ({ target }) => {
      // loops through tools n toggle obj with matching name
        setViewOptions((prev) => ({
            ...prev,
            tools: [
                ...prev.tools.map((tool) => {
                    if (tool.name == target.name) {
                        return { name: tool.name, isChecked: target.checked };
                    } else {
                        return tool;
                    }
                }),
            ],
        }));
    };
    return (
        <div className="view-options">
            <label htmlFor="sort">
                Sort:
                <select name="sort" id="sort-options" onChange={(e) => handleSelector(e)}>
                    <option value="date">Date</option>
                    <option value="score">Score</option>
                    <option value="username">Username</option>
                    <option value="duration">Duration</option>
                </select>
            </label>
            <label htmlFor="difficulty">
                Difficulty:
                <select name="difficulty" id="difficulty-options" onChange={(e) => handleSelector(e)}>
                    <option value="">All</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                </select>
            </label>
            <div className="tools-filter">
                <p>Tools</p>
                {viewOptions.tools.map((tool) => (
                    <ViewTool
                        key={tool.name}
                        name={tool.name}
                        isChecked={tool?.isChecked}
                        handleChange={handleToolCheck}
                    />
                ))}
            </div>

            <input type="button" value="Reset" onClick={() => handleReset()} />
        </div>
    );
}

export default ViewOptions;
