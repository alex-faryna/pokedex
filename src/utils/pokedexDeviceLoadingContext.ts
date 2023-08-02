import {createContext} from "react";

export interface LoadingModel {
    loading: boolean;
    setLoading: (val: boolean) => void;
}

export const PokedexDeviceLoadingContext = createContext<LoadingModel>({
    loading: false,
    setLoading: () => {}
});
