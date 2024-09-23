import 'package:flutter/material.dart';

class FeedAppBar extends StatelessWidget implements PreferredSizeWidget {
  const FeedAppBar({
    super.key,
    required this.title,
  });

  final Widget title;

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      title: title,
      actions: [
        IconButton(
          onPressed: () {},
          icon: Icon(
            Icons.search,
            size: 32,
            color: Theme.of(context).colorScheme.onSurface,
          ),
        ),
      ],
    );
  }
}
