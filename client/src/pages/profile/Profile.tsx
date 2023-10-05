import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserByUsername } from '../../api/userApi';
import { PostList } from '../../components/PostList/PostList';
import { User } from '../../types/User';
import './Profile.css';

export const Profile = () => {

    const { username } = useParams();

    const [user, setUser] = useState(null as User | null);
    const [isFetching, setIsFetching] = useState(true);
    const navigator = useNavigate();

    useEffect(() => {
        // Load the user data on page load
        setIsFetching(true);
        (async () => {
            if (!username) throw Error("Error loading comments. Username is undefined.");
            const foundUser = await getUserByUsername(username);
            if (!foundUser) return navigator("/not-found");
            setUser(foundUser);
            setIsFetching(false);
        })();
    }, [username]);

    return (
        <div id="profile">
            {isFetching ? <CircularProgress />
                :
                user &&
                <>
                    <h2>Posts by {user.username}</h2>
                    <PostList author_id={user.id} />
                </>
            }
        </div>
    )
}