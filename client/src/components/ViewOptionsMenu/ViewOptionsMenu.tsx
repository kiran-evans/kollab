import { ChangeEvent } from "react";
import { ViewOptions } from "../../types/ViewOptions";
import ViewTool from "../ViewTool/ViewTool";
import "./ViewOptionsMenu.css";

export function ViewOptionsMenu(props: { viewOptions: ViewOptions, setViewOptions }) {
    const { viewOptions, setViewOptions } = props;

    const handleOptionsSelector = (e: ChangeEvent<HTMLSelectElement>) => {
        setViewOptions((prev: ViewOptions) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleReset = () => {
        setViewOptions({
            sort: "date",
            difficulty: "",
            tools: [...viewOptions.tools.map(tool=> ({...tool, isChecked: false}))],
        });
    };

    const handleToolCheck = (e: ChangeEvent<HTMLInputElement>) => {
      // loops through tools n toggle obj with matching name
        setViewOptions((prev: ViewOptions) => ({
            ...prev,
            tools: [
                ...prev.tools.map((tool) => {
                    if (tool.name == e.target.name) {
                        return { name: tool.name, isChecked: e.target.checked };
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
                <select name="sort" id="sort-options"  value={viewOptions.sort} onChange={(e) => handleOptionsSelector(e)}>
                    <option value="date">Date</option>
                    <option value="title">Title</option>
                    <option value="upvotes">Upvotes</option>
                    <option value="downvotes">Downvotes</option>
                    <option value="username">Username</option>
                </select>
            </label>
            
            <label htmlFor="difficulty">
                Difficulty:
                <select name="difficulty" id="difficulty-options"  value={viewOptions.difficulty} onChange={(e) => handleOptionsSelector(e)}>
                    <option value="">All</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Expert">Expert</option>
                </select>
            </label>

            <div className="tools-filter">
                <p>Tools</p>
                <div className="tools-list">
                    {viewOptions.tools.map((tool, i) => (
                        <ViewTool
                            key={i}
                            name={tool.name}
                            isChecked={tool.isChecked}
                            handleChange={handleToolCheck}
                        />
                    ))}
                </div>
            </div>

            <input type="button" value="Reset" onClick={() => handleReset()} />
        </div>
    );
}