import 'package:flutter/material.dart';

class LightTheme {
  final ThemeData _theme = ThemeData(
    brightness: Brightness.light,
    fontFamily: 'Poppins',
    scaffoldBackgroundColor: const Color(0xFFE5E5E5),
    appBarTheme: const AppBarTheme(
      backgroundColor: Color(0xFFFFFFFF),
      centerTitle: true,
      titleTextStyle: TextStyle(
          fontSize: 32,
          fontFamily: 'Poppins',
          color: Color(0xFF000000),
          fontWeight: FontWeight.w700),
    ),
    drawerTheme: const DrawerThemeData(
      backgroundColor: Color(0xFFFFFFFF),
    ),
    bottomSheetTheme: const BottomSheetThemeData(
      backgroundColor: Color(0xFFFFFFFF),
      modalBackgroundColor: Color(0xFFFFFFFF),
      shadowColor: Color(0xFF000000),
      modalBarrierColor: Color(0xFF000000),
    ),
    colorScheme: const ColorScheme.light(
      primary: Color(0xFF000000),
      secondary: Color(0xFF14213D),
      tertiary: Color(0xFFFCA311),
      surface: Color(0xFFE5E5E5),
      onSurface: Color(0xFFFFFFFF),
      onSecondaryFixed: Color(0xFF14213D),
      onSecondaryFixedVariant: Color(0xFF000000),
    ),
    textTheme: const TextTheme(
      titleMedium: TextStyle(
        fontSize: 24,
        fontWeight: FontWeight.w700,
        color: Color(0xFF000000),
      ),
    ),
  );

  ThemeData get theme => _theme;
}
