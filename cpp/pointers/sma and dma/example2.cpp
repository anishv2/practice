
// delete operator 

// delete is an operator that is used to destroy array and non-array(pointer) objects which are dynamically created by the new operator.

// delete can be used by either using the delete operator or delete [ ] operator.
// The new operator is used for dynamic memory allocation which stores variables on heap memory.
// This means the delete operator deallocates memory from the heap.
// The pointer to the object is not destroyed, the value or memory block pointed by the pointer is destroyed.
// The delete operator has void return type which means it does not return any value.



// syntax

// delete []"pointer_name"
// delete "pointer_name"


#include <bits/stdc++.h>
using namespace std;
 
int example1()
{
    int* array = new int[10];
 
    // Deallocate Heap memory
    delete[] array;
 
    return 0;
}



// Deleting a NULL pointer does not cause any change and gives no error.

int example2()
{
	// ptr is NULL pointer
	int* ptr = NULL;

	delete ptr;

	return 0;
}
