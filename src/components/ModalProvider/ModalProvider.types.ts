export interface IModalContext {
  invokeModalWindow: (element: JSX.Element | JSX.Element[]) => void;
  closeModalWindow: () => void;
}
