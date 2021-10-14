import { useEffect } from "react";
import { useState } from "react"

const useCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(Response => Response.json())
            .then(data => setCourses(data));
    }, [])
    return [courses, setCourses];
}

export default useCourses;