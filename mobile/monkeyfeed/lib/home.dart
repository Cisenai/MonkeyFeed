import 'package:flutter/material.dart';
import 'package:monkeyfeed/screens/feed.dart';
import 'package:monkeyfeed/screens/profile.dart';
import 'package:monkeyfeed/screens/subscription.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  final List<Widget> _screens = const [
    SubscriptionScreen(),
    FeedScreen(),
    ProfileScreen(),
  ];

  int _currentScreen = 1;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _screens[_currentScreen],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentScreen,
        onTap: (index) {
          setState(() {
            _currentScreen = index;
          });
        },
        items: const [
          BottomNavigationBarItem(
            icon: Icon(
              Icons.subscriptions,
              size: 36,
            ),
            label: '',
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.home,
              size: 36,
            ),
            label: '',
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.person,
              size: 36,
            ),
            label: '',
          ),
        ],
        showSelectedLabels: false,
        showUnselectedLabels: false,
      ),
    );
  }
}
