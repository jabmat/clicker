export interface DisplayProps {
	count: number;
};

export interface ManipulatorProps {
    setCount: (value: number | ((prevState: number) => number)) => void; 
}