import { useState } from 'react';
import { PostList } from '../../components/PostList/PostList';
import { ViewOptionsMenu } from '../../components/ViewOptionsMenu/ViewOptionsMenu';
import { Difficulty } from '../../types/Post';
import { ViewOptions } from '../../types/ViewOptions';
import './Home.css';

export const Home = () => {
    
    const [viewOptions, setViewOptions] = useState<ViewOptions>({
        sort: "date",
        difficulty: Difficulty.All,
        tools: [], // Array of all tools used by projects
    });

    return (
        <div id="home">
            <ViewOptionsMenu viewOptions={viewOptions} setViewOptions={setViewOptions} />
            <PostList viewOptions={viewOptions} setViewOptions={setViewOptions} />
        </div>
    )
}