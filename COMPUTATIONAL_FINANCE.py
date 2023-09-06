import numpy as np
from scipy.linalg import solve
import matplotlib.pyplot as plt


def P(x):
    return -7

def Q(x):
    return 12

def f(x):
    return 4 * np.exp(2*x)



def exact_solution(x):
    c1 = 1  
    c2 = 2  
    A = 3  
    return c1 * np.exp(4*x) + c2 * np.exp(3*x) + A * x * np.exp(2*x)

def solve_ODE(n):
    a, b = 0, 1
    alpha, beta = 3, 5 * np.exp(2)
    

    delta_x = (b - a) / n
    x_values = np.linspace(a, b, n+1)
    
    A_matrix = np.zeros((n+1, n+1))
    b_vector = np.zeros(n+1)

    for i in range(1, n):
        A_matrix[i, i-1] = 1 - delta_x * P(x_values[i]) / 2
        A_matrix[i, i] = -2 + delta_x**2 * Q(x_values[i])
        A_matrix[i, i+1] = 1 + delta_x * P(x_values[i]) / 2
        b_vector[i] = delta_x**2 * f(x_values[i])

    A_matrix[0, 0] = 1
    A_matrix[n, n] = 1
    b_vector[0] = alpha
    b_vector[n] = beta

    y_values = solve(A_matrix, b_vector)
    
    return x_values, y_values

n_values = [10, 50, 100]
results = {}
for n in n_values:
    results[n] = solve_ODE(n)

for n, (x, y) in results.items():
    y_exact = exact_solution(x)
    error = np.abs(y - y_exact)
    
    plt.figure(figsize=(12, 5))
    plt.subplot(1, 2, 1)
    plt.plot(x, y, 'o-', label='Numerical')
    plt.plot(x, y_exact, '--', label='Exact')
    plt.title(f"Solution for n={n}")
    plt.legend()
    
    plt.subplot(1, 2, 2)
    plt.plot(x, error, 'r.-', label='Error')
    plt.title(f"Error for n={n}")
    plt.legend()
    
    plt.tight_layout()
    plt.show()

