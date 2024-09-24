import 'package:flutter/material.dart';
import 'package:monkeyfeed/provider/navigation_provider.dart';
import 'package:monkeyfeed/screens/feed.dart';
import 'package:monkeyfeed/screens/profile.dart';
import 'package:monkeyfeed/screens/subscription.dart';
import 'package:provider/provider.dart';

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

  int? _currentScreen;

  @override
  Widget build(BuildContext context) {
    _currentScreen = Provider.of<NavigationProvider>(context).currentScreen;
    return Scaffold(
      body: _screens[_currentScreen!],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentScreen!,
        onTap: (index) {
          setState(() {
            Provider.of<NavigationProvider>(context, listen: false).currentScreen = index;
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
