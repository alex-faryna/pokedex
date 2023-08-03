import {createContext} from "react";

export interface LoadingModel {
    loading: boolean;
    setLoading: (val: boolean) => void;
}

export const PokedexCoverContext = createContext<LoadingModel>({
    loading: false,
    setLoading: () => {}
});
