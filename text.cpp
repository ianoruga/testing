#include <iostream>
#include <string>
using namespace std;

class Car{
    public:
        std:: string car_brand;
        std:: string car_model;
        int car_year;

        void startCar(){
            std:: cout << "The car is starting.....\n";
        }
        void accelerate(){
            std:: cout << "The car is accelerating.....\n";
        }
        void brake(){
            std:: cout << "The car is braking....\n";
        }
        
};

    int main()
    {
        string brand , model;
        cout << "Enter  car brand: ";
        cin >> brand;
        cout << "Enter car model: ";
        cin >> model;
        int year;
        cout << "Enter car year: ";
        cin >> year;

        Car Car1;

        Car1.car_brand = brand;
        Car1.car_model = model;
        Car1.car_year = year;

        std::cout <<"\n" << "Car Details:" << '\n';
        std::cout << "Brand:" << Car1.car_brand <<'\n';
        std::cout << "Model:" << Car1.car_model <<'\n';
        std::cout << "Year:" << Car1.car_year <<'\n';

        Car1.startCar();
        Car1.accelerate();
        Car1.brake();

        return 0;


    }