import 'package:flutter/material.dart';
import 'package:monkeyfeed/screens/auth/login.dart';
import 'package:monkeyfeed/screens/auth/register.dart';
import 'package:monkeyfeed/screens/home.dart';
import 'package:monkeyfeed/theme/light_theme.dart';

void main() {
  runApp(const MainApp());
}

final navigatorKey = GlobalKey<NavigatorState>();

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: LightTheme().theme,
      navigatorKey: navigatorKey,
      initialRoute: '/login',
      routes: {
        '/login': (context) => const LoginScreen(),
        '/register': (context) => const RegisterScreen(),
        '/home': (context) => const HomeScreen(),
      },
    );
  }
}
