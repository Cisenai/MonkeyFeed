import 'package:flutter/material.dart';
import 'package:monkeyfeed/provider/user_provider.dart';
import 'package:monkeyfeed/screens/auth/login.dart';
import 'package:monkeyfeed/screens/auth/register.dart';
import 'package:monkeyfeed/screens/feed.dart';
import 'package:monkeyfeed/screens/profile.dart';
import 'package:monkeyfeed/theme/light_theme.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(ChangeNotifierProvider(
    create: (context) => UserProvider(),
    child: const MainApp(),
  ));
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
        '/feed': (context) => const FeedScreen(),
        '/profile': (context) => const ProfileScreen(),
      },
    );
  }
}
