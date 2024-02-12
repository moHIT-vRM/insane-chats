import { createContext } from "react";
import defaultSettings from "./config";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  BOLD,
  DARK,
  DEFAULT,
  HORIZONTAL,
  LEFT_TO_RIGHT,
  LIGHT,
  RIGHT_TO_LEFT,
  VERTICAL,
} from "../config";
import { colorPresets, defaultPreset, getColorPresets } from "../utils/getColorPresets";

const initialState = {
  ...defaultSettings,

  // Mode
  onToggleMode: () => {},
  onChangeMode: () => {},

  // Direction
  onToggleDirection: () => {},
  onChangeDirection: () => {},
  onChangeDirectionByLang: () => {},

  // Layout
  onToggleLayout: () => {},
  onChangeLayout: () => {},

  // Contrast
  onToggleContrast: () => {},
  onChangeContrast: () => {},

  // Color
  onChangeColor: () => {},
  setColor: defaultPreset,
  colorOption: [],

  // Stretch
  onToggleStretch: () => {},

  // Reset
  onResetSetting: () => {},
};

const SettingsContext = createContext(initialState);

const SettingsProviders = ({ children }) => {
  const [settings, setSettings] = useLocalStorage("settings", {
    themeMode: initialState.themeMode,
    themeLayout: initialState.themeLayout,
    themeStretch: initialState.themeStretch,
    themeContrast: initialState.themeContrast,
    themeDirection: initialState.themeDirection,
    themeColorPresets: initialState.themeColorPresets,
  });

  //   MODE functions
  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === LIGHT ? DARK : LIGHT,
    });
  };

  const onChangeMode = (event) => {
    setSettings({
      ...settings,
      themeMode: event.target.value,
    });
  };

  //   Direction Funtions

  const onToggleDirection = () => {
    setSettings({
      ...settings,
      themeDirection:
        settings.themeDirection === RIGHT_TO_LEFT
          ? LEFT_TO_RIGHT
          : RIGHT_TO_LEFT,
    });
  };

  const onChangeDirection = (event) => {
    setSettings({
      ...settings,
      themeDirection: event.target.value,
    });
  };

  const onChangeDirectionByLang = (lang) => {
    setSettings({
      ...settings,
      themeDirection: lang === "ar" ? RIGHT_TO_LEFT : LEFT_TO_RIGHT,
    });
  };

  //   Layout

  const onToggleLayout = () => {
    setSettings({
      ...settings,
      themeLayout: settings.themeLayout === VERTICAL ? HORIZONTAL : VERTICAL,
    });
  };

  const onChangeLayout = (event) => {
    setSettings({
      ...settings,
      themeLayout: event.target.value,
    });
  };

  // Contrast

  const onToggleContrast = () => {
    setSettings({
      ...settings,
      themeContrast: settings.themeContrast === DEFAULT ? BOLD : DEFAULT,
    });
  };

  const onChangeContrast = (event) => {
    setSettings({
      ...settings,
      themeContrast: event.target.value,
    });
  };

  // Color

  const onChangeColor = (event) => {
    setSettings({
      ...settings,
      themeColorPresets: event.target.value,
    });
  };

  // Stretch

  const onToggleStretch = () => {
    setSettings({
      ...settings,
      themeStretch: !settings.themeStretch,
    });
  };

  const onResetSetting = () => {
    setSettings({
      themeMode: initialState.themeMode,
      themeLayout: initialState.themeLayout,
      themeStretch: initialState.themeStretch,
      themeContrast: initialState.themeContrast,
      themeDirection: initialState.themeDirection,
      themeColorPresets: initialState.themeColorPresets,
    });
  };

  // Reset

  return (
    <SettingsProviders.Provider
      value={{
        ...settings,
        onToggleMode,
        onChangeMode,
        onToggleDirection,
        onChangeDirection,
        onChangeDirectionByLang,
        onToggleContrast,
        onChangeContrast,
        onToggleLayout,
        onChangeLayout,
        onChangeColor,
        onToggleStretch,
        onResetSetting,
        setColor: getColorPresets(settings.themeColorPresets),
        colorOption: colorPresets.map((color) => ({
          name: color.name,
          value: color.main,
        })),
      }}
    >
      {children}
    </SettingsProviders.Provider>
  );
};

export { SettingsContext };

export default SettingsProviders;
