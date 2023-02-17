import HelloReactView from 'Frontend/views/helloreact/HelloReactView.js';
import MainLayout from 'Frontend/views/MainLayout.js';
import { createBrowserRouter, IndexRouteObject, NonIndexRouteObject, useMatches } from 'react-router-dom';
import Component1 from "Frontend/views/component1/Component1";
import Component2 from "Frontend/views/component2/Component2";

export type MenuProps = Readonly<{
  icon?: string;
  title?: string;
}>;

export type ViewMeta = Readonly<{ handle?: MenuProps }>;

type Override<T, E> = Omit<T, keyof E> & E;

export type IndexViewRouteObject = Override<IndexRouteObject, ViewMeta>;
export type NonIndexViewRouteObject = Override<
  Override<NonIndexRouteObject, ViewMeta>,
  {
    children?: ViewRouteObject[];
  }
>;
export type ViewRouteObject = IndexViewRouteObject | NonIndexViewRouteObject;

type RouteMatch = ReturnType<typeof useMatches> extends (infer T)[] ? T : never;

export type ViewRouteMatch = Readonly<Override<RouteMatch, ViewMeta>>;

export const useViewMatches = useMatches as () => readonly ViewRouteMatch[];

export const routes: readonly ViewRouteObject[] = [
  {
    element: <MainLayout />,
    handle: { icon: 'null', title: 'Main' },
    children: [
      { path: '/', element: <HelloReactView />, handle: { icon: 'la la-globe', title: 'Hello React' } },
      { path: '/component1', element: <Component1 />, handle: { icon: 'la la-file', title: 'Component 1' } },
      { path: '/component2', element: <Component2 />, handle: { icon: 'la la-file', title: 'Component 2' } },
    ],
  },
];

const router = createBrowserRouter([...routes]);
export default router;
