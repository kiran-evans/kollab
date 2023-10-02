import { useState } from 'react';
import { Difficulty } from '../../../types/Post';
import { ViewOptions } from '../../../types/ViewOptions';
import { PostList } from '../../components/PostList/PostList';
import { ViewOptionsMenu } from '../../components/ViewOptionsMenu/ViewOptionsMenu';
import './Home.css';

export const Home = () => {
    
    const [viewOptions, setViewOptions] = useState<ViewOptions>({
        sort: "date",
        difficulty: Difficulty.Beginner,
        tools: tools, // Array of all tools used by projects
    });

    return (
        <div id="home">
            <ViewOptionsMenu viewOptions={viewOptions} setViewOptions={setViewOptions} />
            <PostList />
        </div>
    )
}