import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        double mean = 205*49;
        double std = 15*7;

        System.out.printf("%.4f\n", phi(9800.0, mean, std));
    }
    static double phi(double x, double mean, double std) {
        return 0.5*(1 + erf((x-mean)/std/Math.sqrt(2)));
    }
    
    static double erf(double z) {
        double integral = 0;
        double x = 0;
        double dx = 0.00001;
        while(Math.abs(x) <= Math.abs(z)) {
            if(z > 0) {
                integral += Math.exp(-x*x)*dx;
                x += dx;
            } else {
                integral -= Math.exp(-x*x)*dx;
                x -= dx;
            }
        }
        // System.out.printf("erf(" + z + ") = %.3f\n", 2.0/Math.sqrt(Math.PI)*integral);
        return 2.0/Math.sqrt(Math.PI)*integral;
    }
}


