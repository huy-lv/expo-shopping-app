import { AppTheme } from "../config/DefaultConfig";
import Bag from "../pages/Bag";
import Home from "../pages/Home";
import Icon from "@expo/vector-icons/FontAwesome";
import Profile from "../pages/Profile";
import Shopping from "../pages/Shopping";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import useTheme from "../hooks/useTheme";

const Tab = createBottomTabNavigator();

const iconNames: Record<string, string> = {
  Home: "home",
  Shopping: "shopping-cart",
  Bag: "shopping-bag",
  Profile: "user",
};

export default function HomeTab() {
  const theme: AppTheme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Icon
              name={iconNames[route.name]}
              size={26}
              color={focused ? theme.appColor : theme.lightTextColor}
            />
          );
        },
        // tabBarLabelStyle: {
        //   color: focused ? theme.appColor : theme.lightTextColor,
        // },
        tabBarActiveTintColor: theme.appColor,
        tabBarInactiveTintColor: theme.lightTextColor,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Shopping" component={Shopping} />
      <Tab.Screen name="Bag" component={Bag} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
