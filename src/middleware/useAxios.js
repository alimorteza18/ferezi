// ***  *** --- ***  *** --- ***  *** 
//   pattern for this module
// ***  *** --- ***  *** --- ***  ***

//   const [allMeasurementUnits,
//     errorGetAllMeasurementUnits,
//     loadingGetAllMeasurementUnits,
//     refetchAllMeasurementUnits] = useAxios({
//       axiosInstance: axiosInstance,
//       method: 'GET',
//       url: '/v_sanjesh',
//       requestConfig: {
//         headers: {
//           'Content-Type': 'application/json',
//           'Content-Language': 'en-US',
//           'Accept': 'text/html'
//         }
//       }
//     });

// ***  *** --- ***  *** --- ***  *** 
//  pattern for this module
// ***  *** --- ***  *** --- ***  ***




import {
    useState,
    useEffect
} from "react";

import Axios from "./axiosInstance"

const useAxios = (configObj) => {
    const {
        // axiosInstance,
        method,
        url,
        requestConfig = {}
    } = configObj;
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(0);
    const refetch = () => setReload(prev => prev + 1);
    useEffect(() => {
        setLoading(true)
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                const res = await Axios[method.toLowerCase()](url, {
                    ...requestConfig,
                    // signal use for cancel the request
                    signal: controller.signal
                });
                setResponse(res.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        // call the function
        fetchData();
        // useEffect cleanup function, cancel the request
        return () => controller.abort();
        // eslint-disable-next-line
    }, [reload]);
    return [response, error, loading, refetch];
}
// export default useAxios


export const useAxiosFunction = () => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); //different!
    const [controller, setController] = useState();

    const axiosFetch = async (configObj) => {
        const {
            // axiosInstance,
            method,
            url,
            requestConfig = {}
        } = configObj;

        try {
            setLoading(true);
            const ctrl = new AbortController();
            setController(ctrl);
            const res = await Axios[method.toLowerCase()](url, {
                ...requestConfig,
                signal: ctrl.signal
            });
            console.log(res);
            setResponse(res.data);
        } catch (err) {
            console.log(err.message);
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        console.log(controller)

        // useEffect cleanup function
        return () => controller && controller.abort();

    }, [controller]);

    return [response, error, loading, axiosFetch];
}

export default useAxios