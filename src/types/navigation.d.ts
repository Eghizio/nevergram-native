export type Screen  = {
    name: string;
    screen: React.FC<any>;
    options: {
        title: string;
    };
    // options?: ScreenOptions | ((props: {
    //     route: RouteProp<ParamList, RouteName>;
    //     navigation: any;
    // }) => ScreenOptions);
};

export type ScreenOptions = 
    | DrawerNavigationOptions
    | ((props: { route: Route<string, object | undefined>, navigation: any }) => DrawerNavigationOptions)
    | undefined;