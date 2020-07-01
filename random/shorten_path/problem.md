Write a functin that takes in a non-empty string representing a valid Unix-shell path and returns a shortened version of that path. 

A path is a notion that represents the location of a file or directory in a file system. 

A path can be an absolute path, meaning that it starts at the root directory in a file system, or a relative path, meaning that it starts at the current directory in a file system. 

A path can be an absolute path, meaning that it starta at the root directory in a file system, or a relative path, meaning that it starts at the current directory in a file system. 

IN a Unix-like operating system, a path is bound by the following rules: 

    - The root directory is represented by a `/`. This means that if a path _starts_ with a `/`, it's an absolute path; if it doesen't, it's a relative path. 

    - The symbol `/` otherwise represents the directory separator. This means that for the path `/foo/bar` is the locatino of the directory `bar` inside the directory `foo`, which is itself located inside the root directory. 

    - The symbol `..` represents the parent directory. This means that accessing files or directories in `/foo/bar/..` is equivalent accessing files or dorectories in `/foo`.

    - The symbol `.` represents the current directory. This means that accessing files or directories in `/foo/bar/.` is equivalent to accessing files in directories `/foo/bar`.

    - The symbols `/` and `.` cna be repeated sequentially without consequence; the symbol `..` cannotm however, because repeating it sequentially means going durther up in parent directories. For example, `/foo/bar/bax/././.` and `/foo/bar/baz` are equivalent paths, but `/foo/bar/baz/../../../` and `/foo/bar/baz` definatly arn't. The only exception is when the root directory: `/../../..` and `/` are equivalent, because the root directory has no parent directory, which means that repeatedly accessing parent directories does nothing. 

Note that the shortened version of the path must be equivalent to the orrigional path. In other words, it must point to the same file or directory as the orrigional path. 