// ----------------------------------------------------------------------

import { alpha } from "@mui/material";
import { DARKER, LIGHT, LIGHTER } from "../../config";
import {
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
  CheckboxIcon,
  CheckboxCheckedIcon,
  CheckboxIndeterminateIcon,
  CloseIcon,
  TreeViewCollapseIcon,
  TreeViewExpandIcon,
  TreeViewEndIcon,
  StarIcon,
  InputSelectIcon,
} from "./customIcons";

const Accordion = (theme) => {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&.Mui-expanded": {
            boxShadow: theme.customShadows.z8,
            borderRadius: theme.shape.borderRadius,
          },
          "&.Mui-disabled": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(1),
          "&.Mui-disabled": {
            opacity: 1,
            color: theme.palette.action.disabled,
            "& .MuiTypography-root": {
              color: "inherit",
            },
          },
        },
        expandIconWrapper: {
          color: "inherit",
        },
      },
    },
  };
};

const Autocomplete = (theme) => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.dropdown,
        },
        listbox: {
          padding: theme.spacing(0, 1),
          "& .MuiAutocomplete-option": {
            padding: theme.spacing(1),
            margin: theme.spacing(1, 0),
            borderRadius: theme.shape.borderRadius,
          },
        },
      },
    },
  };
};

const Avatar = (theme) => {
  return {
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.grey[400],
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        avatar: {
          fontSize: 16,
          fontWeight: theme.typography.fontWeightMedium,
          "&:first-of-type": {
            fontSize: 14,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.lighter,
          },
        },
      },
    },
  };
};

const Alert = (theme) => {
  const isLight = theme.palette.mode === LIGHT;

  const standardStyle = (color) => ({
    color: theme.palette[color][isLight ? DARKER : LIGHTER],
    backgroundColor: theme.palette[color][isLight ? LIGHTER : DARKER],
    "& .MuiAlert-icon": {
      color: theme.palette[color][isLight ? "main" : "light"],
    },
  });

  const filledStyle = (color) => ({
    color: theme.palette[color].contrastText,
  });

  const outlinedStyle = (color) => ({
    color: theme.palette[color][isLight ? DARKER : LIGHTER],
    border: `solid 1px ${theme.palette[color][isLight ? "light" : "dark"]}`,
    backgroundColor: theme.palette[color][isLight ? LIGHTER : DARKER],
    "& .MuiAlert-icon": {
      color: theme.palette[color][isLight ? "main" : "light"],
    },
  });

  return {
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          info: <InfoIcon />,
          success: <SuccessIcon />,
          warning: <WarningIcon />,
          error: <ErrorIcon />,
        },
      },

      styleOverrides: {
        message: {
          "& .MuiAlertTitle-root": {
            marginBottom: theme.spacing(0.5),
          },
        },
        action: {
          "& button:not(:first-of-type)": {
            marginLeft: theme.spacing(1),
          },
        },

        standardInfo: standardStyle("info"),
        standardSuccess: standardStyle("success"),
        standardWarning: standardStyle("warning"),
        standardError: standardStyle("error"),

        filledInfo: filledStyle("info"),
        filledSuccess: filledStyle("success"),
        filledWarning: filledStyle("warning"),
        filledError: filledStyle("error"),

        outlinedInfo: outlinedStyle("info"),
        outlinedSuccess: outlinedStyle("success"),
        outlinedWarning: outlinedStyle("warning"),
        outlinedError: outlinedStyle("error"),
      },
    },
  };
};

const Backdrop = (theme) => {
  const varLow = alpha(theme.palette.grey[900], 0.48);
  const varHigh = alpha(theme.palette.grey[900], 1);

  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            `rgb(22,28,36)`,
            `-moz-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
            `-webkit-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
            `linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent",
          },
        },
      },
    },
  };
};

const Badge = () => {
  return {
    MuiBadge: {
      styleOverrides: {
        dot: {
          width: 10,
          height: 10,
          borderRadius: "50%",
        },
      },
    },
  };
};

const Breadcrumbs = (theme) => {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          marginLeft: theme.spacing(2),
          marginRight: theme.spacing(2),
        },
      },
    },
  };
};

const Button = (theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          height: 48,
        },
        // contained
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          "&:hover": {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows.primary,
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        containedInfo: {
          boxShadow: theme.customShadows.info,
        },
        containedSuccess: {
          boxShadow: theme.customShadows.success,
        },
        containedWarning: {
          boxShadow: theme.customShadows.warning,
        },
        containedError: {
          boxShadow: theme.customShadows.error,
        },
        // outlined
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
};

const ButtonGroup = (theme) => {
  const styleContained = (color) => ({
    props: { variant: "contained", color },
    style: { boxShadow: theme.customShadows[color] },
  });

  return {
    MuiButtonGroup: {
      variants: [
        {
          props: { variant: "contained", color: "inherit" },
          style: { boxShadow: theme.customShadows.z8 },
        },
        styleContained("primary"),
        styleContained("secondary"),
        styleContained("info"),
        styleContained("success"),
        styleContained("warning"),
        styleContained("error"),

        {
          props: { disabled: true },
          style: {
            boxShadow: "none",
            "& .MuiButtonGroup-grouped.Mui-disabled": {
              color: theme.palette.action.disabled,
              borderColor: `${theme.palette.action.disabledBackground} !important`,
              "&.MuiButton-contained": {
                backgroundColor: theme.palette.action.disabledBackground,
              },
            },
          },
        },
      ],

      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
  };
};

const Card = (theme) => {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          position: "relative",
          boxShadow: theme.customShadows.card,
          borderRadius: Number(theme.shape.borderRadius) * 2,
          zIndex: 0, // Fix Safari overflow: hidden with border radius
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: "h6" },
        subheaderTypographyProps: {
          variant: "body2",
          marginTop: theme.spacing(0.5),
        },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3),
        },
      },
    },
  };
};

const Checkbox = (theme) => {
  return {
    MuiCheckbox: {
      defaultProps: {
        icon: <CheckboxIcon />,
        checkedIcon: <CheckboxCheckedIcon />,
        indeterminateIcon: <CheckboxIndeterminateIcon />,
      },

      styleOverrides: {
        root: {
          padding: theme.spacing(1),
          "&.Mui-checked.Mui-disabled, &.Mui-disabled": {
            color: theme.palette.action.disabled,
          },
          "& .MuiSvgIcon-fontSizeMedium": {
            width: 24,
            height: 24,
          },
          "& .MuiSvgIcon-fontSizeSmall": {
            width: 20,
            height: 20,
          },
          svg: {
            fontSize: 24,
            "&[font-size=small]": {
              fontSize: 20,
            },
          },
        },
      },
    },
  };
};

const Chip = (theme) => {
  return {
    MuiChip: {
      defaultProps: {
        deleteIcon: <CloseIcon />,
      },

      styleOverrides: {
        colorDefault: {
          "& .MuiChip-avatarMedium, .MuiChip-avatarSmall": {
            color: theme.palette.text.secondary,
          },
        },
        outlined: {
          borderColor: theme.palette.grey[500_32],
          "&.MuiChip-colorPrimary": {
            borderColor: theme.palette.primary.main,
          },
          "&.MuiChip-colorSecondary": {
            borderColor: theme.palette.secondary.main,
          },
        },
        //
        avatarColorInfo: {
          color: theme.palette.info.contrastText,
          backgroundColor: theme.palette.info.dark,
        },
        avatarColorSuccess: {
          color: theme.palette.success.contrastText,
          backgroundColor: theme.palette.success.dark,
        },
        avatarColorWarning: {
          color: theme.palette.warning.contrastText,
          backgroundColor: theme.palette.warning.dark,
        },
        avatarColorError: {
          color: theme.palette.error.contrastText,
          backgroundColor: theme.palette.error.dark,
        },
      },
    },
  };
};

const ControlLabel = (theme) => {
  return {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          ...theme.typography.body2,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: theme.spacing(1),
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.text.disabled,
        },
      },
    },
  };
};

const CssBaseline = () => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          width: "100%",
          height: "100%",
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        img: {
          display: "block",
          maxWidth: "100%",
        },
      },
    },
  };
};

const DataGrid = (theme) => {
  return {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: `1px solid transparent`,
          "& .MuiTablePagination-root": {
            borderTop: 0,
          },
        },
        cell: {
          borderBottom: `1px solid ${theme.palette.divider}`,
        },
        columnSeparator: {
          color: theme.palette.divider,
        },
        toolbarContainer: {
          padding: theme.spacing(2),
          backgroundColor: theme.palette.background.neutral,
          "& .MuiButton-root": {
            marginRight: theme.spacing(1.5),
            color: theme.palette.text.primary,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
        paper: {
          boxShadow: theme.customShadows.dropdown,
        },
        menu: {
          "& .MuiPaper-root": {
            boxShadow: theme.customShadows.dropdown,
          },
          "& .MuiMenuItem-root": {
            ...theme.typography.body2,
            "& .MuiListItemIcon-root": {
              minWidth: "auto",
            },
          },
        },
        panelFooter: {
          padding: theme.spacing(2),
          justifyContent: "flex-end",
          borderTop: `1px solid ${theme.palette.divider}`,
          "& .MuiButton-root": {
            "&:first-of-type": {
              marginRight: theme.spacing(1.5),
              color: theme.palette.text.primary,
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            },
            "&:last-of-type": {
              color: theme.palette.common.white,
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            },
          },
        },
        filterForm: {
          padding: theme.spacing(1.5, 0),
          "& .MuiFormControl-root": {
            margin: theme.spacing(0, 0.5),
          },
          "& .MuiInput-root": {
            marginTop: theme.spacing(3),
            "&::before, &::after": {
              display: "none",
            },
            "& .MuiNativeSelect-select, .MuiInput-input": {
              ...theme.typography.body2,
              padding: theme.spacing(0.75, 1),
              borderRadius: theme.shape.borderRadius,
              backgroundColor: theme.palette.background.neutral,
            },
            "& .MuiSvgIcon-root": {
              right: 4,
            },
          },
        },
      },
    },
  };
};

const Dialog = (theme) => {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.dialog,
          "&.MuiPaper-rounded": {
            borderRadius: Number(theme.shape.borderRadius) * 2,
          },
          "&.MuiDialog-paperFullScreen": {
            borderRadius: 0,
          },
          "&.MuiDialog-paper .MuiDialogActions-root": {
            padding: theme.spacing(3),
          },
          "@media (max-width: 600px)": {
            margin: theme.spacing(2),
          },
          "@media (max-width: 663.95px)": {
            "&.MuiDialog-paperWidthSm.MuiDialog-paperScrollBody": {
              maxWidth: "100%",
            },
          },
        },
        paperFullWidth: {
          width: "100%",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          borderTop: 0,
          borderBottom: 0,
          padding: theme.spacing(3),
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          "& > :not(:first-of-type)": {
            marginLeft: theme.spacing(1.5),
          },
        },
      },
    },
  };
};

const Drawer = (theme) => {
  const isLight = theme.palette.mode === LIGHT;

  return {
    MuiDrawer: {
      styleOverrides: {
        modal: {
          '&[role="presentation"]': {
            "& .MuiDrawer-paperAnchorLeft": {
              boxShadow: `8px 24px 24px 12px ${alpha(
                theme.palette.grey[900],
                isLight ? 0.16 : 0.48
              )}`,
            },
            "& .MuiDrawer-paperAnchorRight": {
              boxShadow: `-8px 24px 24px 12px ${alpha(
                theme.palette.grey[900],
                isLight ? 0.16 : 0.48
              )}`,
            },
          },
        },
      },
    },
  };
};

const Fab = (theme) => {
  return {
    MuiFab: {
      defaultProps: {
        color: "primary",
      },

      styleOverrides: {
        root: {
          boxShadow: theme.customShadows.z8,
          "&:hover": {
            boxShadow: "none",
            backgroundColor: theme.palette.grey[400],
          },
        },
        primary: {
          boxShadow: theme.customShadows.primary,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        },
        secondary: {
          boxShadow: theme.customShadows.secondary,
          "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
          },
        },
        extended: {
          "& svg": {
            marginRight: theme.spacing(1),
          },
        },
      },
    },
  };
};

const Input = (theme) => {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            "& svg": { color: theme.palette.text.disabled },
          },
        },
        input: {
          "&::placeholder": {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: theme.palette.grey[500_56],
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey[500_12],
          "&:hover": {
            backgroundColor: theme.palette.grey[500_16],
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus,
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        underline: {
          "&:before": {
            borderBottomColor: theme.palette.grey[500_56],
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.grey[500_32],
          },
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.action.disabledBackground,
            },
          },
        },
      },
    },
  };
};

const Link = () => {
  return {
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
  };
};

const List = (theme) => {
  return {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "inherit",
          minWidth: "auto",
          marginRight: theme.spacing(2),
        },
      },
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          marginRight: theme.spacing(2),
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 0,
        },
        multiline: {
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
  };
};

const LoadingButton = () => {
  return {
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-text": {
            "& .MuiLoadingButton-startIconPendingStart": {
              marginLeft: 0,
            },
            "& .MuiLoadingButton-endIconPendingEnd": {
              marginRight: 0,
            },
          },
        },
      },
    },
  };
};

const Menu = (theme) => {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          "&.Mui-selected": {
            backgroundColor: theme.palette.action.selected,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
      },
    },
  };
};

const Pagination = (theme) => {
  return {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            fontWeight: theme.typography.fontWeightBold,
          },
        },
        textPrimary: {
          "&.Mui-selected": {
            color: theme.palette.primary.main,
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
            "&:hover, &.Mui-focusVisible": {
              backgroundColor: `${alpha(
                theme.palette.primary.main,
                0.24
              )} !important`,
            },
          },
        },
        outlined: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
        },
        outlinedPrimary: {
          "&.Mui-selected": {
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.24)}`,
          },
        },
      },
    },
  };
};

const Paper = (theme) => {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },

      variants: [
        {
          props: { variant: "outlined" },
          style: { borderColor: theme.palette.grey[500_12] },
        },
      ],

      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  };
};

const Popover = (theme) => {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.dropdown,
          borderRadius: Number(theme.shape.borderRadius) * 1.5,
        },
      },
    },
  };
};

const Progress = (theme) => {
  const isLight = theme.palette.mode === LIGHT;

  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          overflow: "hidden",
        },
        bar: {
          borderRadius: 4,
        },
        colorPrimary: {
          backgroundColor:
            theme.palette.primary[isLight ? "lighter" : "darker"],
        },
        buffer: {
          backgroundColor: "transparent",
        },
      },
    },
  };
};

const Radio = (theme) => {
  return {
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1),
          svg: {
            fontSize: 24,
            "&[font-size=small]": {
              fontSize: 20,
            },
          },
        },
      },
    },
  };
};

const ICON_SMALL = { width: 20, height: 20 };
const ICON_LARGE = { width: 28, height: 28 };

const Rating = (theme) => {
  return {
    MuiRating: {
      defaultProps: {
        emptyIcon: <StarIcon />,
        icon: <StarIcon />,
      },

      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            opacity: 0.48,
          },
        },
        iconEmpty: { color: theme.palette.grey[500_48] },
        sizeSmall: { "& svg": { ...ICON_SMALL } },
        sizeLarge: { "& svg": { ...ICON_LARGE } },
      },
    },
  };
};

const Select = () => {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: InputSelectIcon,
      },
    },
  };
};

const Skeleton = (theme) => {
  return {
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },

      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.neutral,
        },
      },
    },
  };
};

const Slider = (theme) => {
  const isLight = theme.palette.mode === LIGHT;

  return {
    MuiSlider: {
      defaultProps: {
        size: "small",
      },

      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: theme.palette.action.disabled,
          },
        },
        markLabel: {
          fontSize: 13,
          color: theme.palette.text.disabled,
        },
        valueLabel: {
          borderRadius: 8,
          backgroundColor: theme.palette.grey[isLight ? 800 : 700],
        },
      },
    },
  };
};

const Stepper = (theme) => {
  return {
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: theme.palette.divider,
        },
      },
    },
  };
};

const SvgIcon = () => {
  return {
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          width: 20,
          height: 20,
          fontSize: "inherit",
        },
        fontSizeLarge: {
          width: 32,
          height: 32,
          fontSize: "inherit",
        },
      },
    },
  };
};

const Switch = (theme) => {
  const isLight = theme.palette.mode === "light";

  return {
    MuiSwitch: {
      styleOverrides: {
        thumb: {
          boxShadow: theme.customShadows.z1,
        },
        track: {
          opacity: 1,
          backgroundColor: theme.palette.grey[500],
        },
        switchBase: {
          left: 0,
          right: "auto",
          "&:not(:.Mui-checked)": {
            color: theme.palette.grey[isLight ? 100 : 300],
          },
          "&.Mui-checked.Mui-disabled, &.Mui-disabled": {
            color: theme.palette.grey[isLight ? 400 : 600],
          },
          "&.Mui-disabled+.MuiSwitch-track": {
            opacity: 1,
            backgroundColor: `${theme.palette.action.disabledBackground} !important`,
          },
        },
      },
    },
  };
};

const Table = (theme) => {
  return {
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: theme.palette.action.selected,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "none",
        },
        head: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.neutral,
          "&:first-of-type": {
            paddingLeft: theme.spacing(3),
            borderTopLeftRadius: theme.shape.borderRadius,
            borderBottomLeftRadius: theme.shape.borderRadius,
            boxShadow: `inset 8px 0 0 ${theme.palette.background.paper}`,
          },
          "&:last-of-type": {
            paddingRight: theme.spacing(3),
            borderTopRightRadius: theme.shape.borderRadius,
            borderBottomRightRadius: theme.shape.borderRadius,
            boxShadow: `inset -8px 0 0 ${theme.palette.background.paper}`,
          },
        },
        stickyHeader: {
          backgroundColor: theme.palette.background.paper,
          backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.neutral} 0%, ${theme.palette.background.neutral} 100%)`,
        },
        body: {
          "&:first-of-type": {
            paddingLeft: theme.spacing(3),
          },
          "&:last-of-type": {
            paddingRight: theme.spacing(3),
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          borderTop: `solid 1px ${theme.palette.divider}`,
        },
        toolbar: {
          height: 64,
        },
        select: {
          "&:focus": {
            borderRadius: theme.shape.borderRadius,
          },
        },
        selectIcon: {
          width: 20,
          height: 20,
          marginTop: -4,
        },
      },
    },
  };
};

const Tabs = (theme) => {
  return {
    MuiTabs: {
      styleOverrides: {
        scrollButtons: {
          width: 48,
          borderRadius: "50%",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: 0,
          fontWeight: theme.typography.fontWeightMedium,
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius,
          "&.Mui-selected": {
            color: theme.palette.text.primary,
          },
          "&:not(:last-of-type)": {
            marginRight: theme.spacing(5),
          },
          "@media (min-width: 600px)": {
            minWidth: 48,
          },
        },
        labelIcon: {
          minHeight: 48,
          flexDirection: "row",
          "& > *:first-of-type": {
            marginBottom: 0,
            marginRight: theme.spacing(1),
          },
        },
        wrapped: {
          flexDirection: "row",
          whiteSpace: "nowrap",
        },
        textColorInherit: {
          opacity: 1,
          color: theme.palette.text.secondary,
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  };
};

const Timeline = (theme) => {
  return {
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },

    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.divider,
        },
      },
    },
  };
};

const ToggleButton = (theme) => {
  const style = (color) => ({
    props: { color },
    style: {
      "&:hover": {
        borderColor: alpha(theme.palette[color].main, 0.48),
        backgroundColor: alpha(
          theme.palette[color].main,
          theme.palette.action.hoverOpacity
        ),
      },
      "&.Mui-selected": {
        borderColor: alpha(theme.palette[color].main, 0.48),
      },
    },
  });

  return {
    MuiToggleButton: {
      variants: [
        {
          props: { color: "standard" },
          style: {
            "&.Mui-selected": {
              backgroundColor: theme.palette.action.selected,
            },
          },
        },
        style("primary"),
        style("secondary"),
        style("info"),
        style("success"),
        style("warning"),
        style("error"),
      ],
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
          border: `solid 1px ${theme.palette.grey[500_12]}`,
          "& .MuiToggleButton-root": {
            margin: 4,
            borderColor: "transparent !important",
            borderRadius: `${theme.shape.borderRadius}px !important`,
          },
        },
      },
    },
  };
};

const Tooltip = (theme) => {
  const isLight = theme.palette.mode === LIGHT;

  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[isLight ? 800 : 700],
        },
        arrow: {
          color: theme.palette.grey[isLight ? 800 : 700],
        },
      },
    },
  };
};

const TreeView = (theme) => {
  return {
    MuiTreeView: {
      defaultProps: {
        defaultCollapseIcon: (
          <TreeViewCollapseIcon sx={{ width: 20, height: 20 }} />
        ),
        defaultExpandIcon: (
          <TreeViewExpandIcon sx={{ width: 20, height: 20 }} />
        ),
        defaultEndIcon: (
          <TreeViewEndIcon
            sx={{ color: "text.secondary", width: 20, height: 20 }}
          />
        ),
      },
    },
    MuiTreeItem: {
      styleOverrides: {
        label: { ...theme.typography.body2 },
        iconContainer: { width: "auto" },
      },
    },
  };
};

const Typography = (theme) => {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
        article: {
          fontWeight: 700,
        },
      },
    },
  };
};

export {
  Accordion,
  Alert,
  Autocomplete,
  Avatar,
  Backdrop,
  Badge,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  Chip,
  ControlLabel,
  CssBaseline,
  DataGrid,
  Dialog,
  Drawer,
  Fab,
  Input,
  Link,
  List,
  LoadingButton,
  Table,
  Menu,
  Pagination,
  Paper,
  Popover,
  Progress,
  Radio,
  Rating,
  Select,
  Skeleton,
  Slider,
  Stepper,
  SvgIcon,
  Switch,
  Tabs,
  Timeline,
  ToggleButton,
  Tooltip,
  TreeView,
  Typography,
};
