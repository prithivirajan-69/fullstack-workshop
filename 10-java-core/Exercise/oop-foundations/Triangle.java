package oop_foundations;

public class Triangle extends Shape {

    private double base, height, s1, s2, s3;

    public Triangle(double base, double height, double s1, double s2, double s3) {
        this.base = base;
        this.height = height;
        this.s1 = s1;
        this.s2 = s2;
        this.s3 = s3;
    }

    public double area() {
        return 0.5 * base * height;
    }

    public double perimeter() {
        return s1 + s2 + s3;
    }
}
