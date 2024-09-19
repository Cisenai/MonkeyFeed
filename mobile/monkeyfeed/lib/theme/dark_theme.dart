import 'package:flutter/material.dart';

class DarkTheme {
  final ThemeData _theme = ThemeData(
    brightness: Brightness.dark,
    fontFamily: 'Poppins',
    scaffoldBackgroundColor: const Color.fromARGB(255, 25, 25, 25),
    appBarTheme: const AppBarTheme(
      backgroundColor: Color(0xFF000000),
      centerTitle: true,
      titleTextStyle: TextStyle(
        fontSize: 32,
        fontFamily: 'Poppins',
        color: Color(0xFFFFFFFF),
        fontWeight: FontWeight.w700,
      ),
    ),
    drawerTheme: const DrawerThemeData(
      backgroundColor: Color(0xFF000000),
    ),
    colorScheme: const ColorScheme.dark(
      primary: Color(0xFFFFFFFF),
      secondary: Color(0xFFE5E5E5),
      tertiary: Color(0xFFFCA311),
      surface: Color.fromARGB(255, 25, 25, 25),
      onSurface: Color(0xFF000000),
      onSecondaryFixed: Color(0xFF14213D),
    ),
  );

  ThemeData get theme => _theme;
}
