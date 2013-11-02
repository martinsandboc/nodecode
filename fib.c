#include <stdio.h>
#include <stdlib.h>

int
fib (int n)
{
    return n <= 1 ? 1 : fib(n-1) + fib(n-2);
}

int
main(int argc, char **argv)
{
    if (argc != 2)
    {
        return -1;
    }

    char *n_str = argv[1];
    int n = atoi(n_str);

    printf("%d\n", fib(45));
}
