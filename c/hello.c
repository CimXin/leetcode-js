#include <stdio.h>
#include <string.h>

typedef unsigned char *byte_point;
void show_types(byte_point start, size_t len)
{
    size_t i;
    for (i = 0; i < len; i++)
    {
        printf("%.2x", start[i]);
    }
    printf("\n");
}

void inplace_swap(int *a, int *b)
{
    *a = *a ^ *b;
    *b = *a ^ *b;
    *a = *a ^ *b;
}
void reverse_array(int a[], int cnt)
{
    int first, last;
    for (first = 0, last = cnt - 1; first < last; first++, last--)
    {
        inplace_swap(&a[first], &a[last]);
    }
}

int main()
{
    // int val = 0x87654321;
    // byte_point valp = (byte_point)&val;
    // show_types(valp, 1);
    // show_types(valp, 2);
    // show_types(valp, 3);
    // const char *s = "abcdef";
    // show_types((byte_point)s, strlen(s));
    int a[] = {1, 2, 3, 4, 5, 6, 7};
    reverse_array(a, 7);
    for (int i = 0; i < 7; i++)
    {
        printf("%.x", a[i]);
    }
    return 0;
}