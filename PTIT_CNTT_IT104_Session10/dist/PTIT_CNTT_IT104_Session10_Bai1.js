"use strict";
var _a, _b;
//1.Lớp Passenger
class Passenger {
    constructor(name, passportNumber) {
        this.passengerId = Passenger.idCounter++;
        this.name = name;
        this.passportNumber = passportNumber;
    }
    getDetails() {
        return `Passenger[ID=${this.passengerId}, Name=${this.name}, Passport=${this.passportNumber}]`;
    }
}
Passenger.idCounter = 1;
// 2.Lớp Flight (Abstract class - chuyến bay)
class Flight {
    constructor(flightNumber, origin, destination, departureTime, capacity) {
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.departureTime = departureTime;
        this.capacity = capacity;
        this.bookedSeats = 0;
    }
    bookSeat() {
        if (!this.isFull()) {
            this.bookedSeats++;
            return true;
        }
        return false;
    }
    isFull() {
        return this.bookedSeats >= this.capacity;
    }
}
// 3. Các lớp con kế thừa của Flight
class DomesticFlight extends Flight {
    calculateBaggageFee(weight) {
        return weight * 50000; // VND
    }
}
class InternationalFlight extends Flight {
    calculateBaggageFee(weight) {
        return weight * 10; // USD
    }
}
// 4.Lớp Booking 
class Booking {
    constructor(passenger, flight, numberOfTickets) {
        this.bookingId = Booking.idCounter++;
        this.passenger = passenger;
        this.flight = flight;
        this.numberOfTickets = numberOfTickets;
        this.totalCost = numberOfTickets * 100;
    }
    getBookingDetails() {
        return `Booking[ID=${this.bookingId}, Passenger=${this.passenger.name}, Flight=${this.flight.flightNumber}, Tickets=${this.numberOfTickets}, TotalCost=${this.totalCost}]`;
    }
}
Booking.idCounter = 1;
//5. Lớp GenericRepository<T>(Kho chứa dữ liệu chung)
class GenericRepository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
    find(predicate) {
        return this.items.find(predicate);
    }
    findIndex(predicate) {
        return this.items.findIndex(predicate);
    }
    remove(predicate) {
        this.items = this.items.filter(item => !predicate(item));
    }
}
//6 Lớp AirlineManager
class AirlineManager {
    constructor() {
        this.flightRepo = new GenericRepository();
        this.passengerRepo = new GenericRepository();
        this.bookingRepo = new GenericRepository();
    }
    addFlight(flight) {
        this.flightRepo.add(flight);
    }
    addPassenger(name, passportNumber) {
        const passenger = new Passenger(name, passportNumber);
        this.passengerRepo.add(passenger);
        return passenger;
    }
    createBooking(passengerId, flightNumber, numberOfTickets) {
        const passenger = this.passengerRepo.find(p => p.passengerId === passengerId);
        const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
        if (passenger && flight && flight.bookedSeats + numberOfTickets <= flight.capacity) {
            for (let i = 0; i < numberOfTickets; i++)
                flight.bookSeat();
            const booking = new Booking(passenger, flight, numberOfTickets);
            this.bookingRepo.add(booking);
            return booking;
        }
        return null;
    }
    cancelBooking(bookingId) {
        this.bookingRepo.remove(b => b.bookingId === bookingId);
    }
    listAvailableFlights(origin, destination) {
        return this.flightRepo.getAll().filter(f => f.origin === origin && f.destination === destination && !f.isFull());
    }
    listBookingsByPassenger(passengerId) {
        return this.bookingRepo.getAll().filter(b => b.passenger.passengerId === passengerId);
    }
    calculateTotalRevenue() {
        return this.bookingRepo.getAll().reduce((sum, b) => sum + b.totalCost, 0);
    }
    countFlightsByType() {
        return this.flightRepo.getAll().reduce((acc, flight) => {
            if (flight instanceof DomesticFlight)
                acc.domestic++;
            else if (flight instanceof InternationalFlight)
                acc.international++;
            return acc;
        }, { domestic: 0, international: 0 });
    }
    updateFlightTime(flightNumber, newDepartureTime) {
        const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
        if (flight) {
            flight.departureTime = newDepartureTime;
        }
    }
    getFlightPassengerList(flightNumber) {
        return this.bookingRepo
            .getAll()
            .filter(b => b.flight.flightNumber === flightNumber)
            .map(b => b.passenger.name);
    }
}
const airline = new AirlineManager();
// Thêm chuyến bay
airline.addFlight(new DomesticFlight("VN001", "Hà Nội", "Đà Nẵng", new Date("2025-09-01T08:00:00"), 2));
airline.addFlight(new InternationalFlight("VN100", "Hà Nội", "Tokyo", new Date("2025-09-05T10:00:00"), 3));
// Thêm hành khách
const p1 = airline.addPassenger("Nguyễn Văn A", "P12345");
const p2 = airline.addPassenger("Trần Thị B", "P67890");
// Đặt vé
console.log((_a = airline.createBooking(p1.passengerId, "VN001", 1)) === null || _a === void 0 ? void 0 : _a.getBookingDetails());
console.log((_b = airline.createBooking(p2.passengerId, "VN001", 1)) === null || _b === void 0 ? void 0 : _b.getBookingDetails());
// Liệt kê chuyến bay còn chỗ
console.log("Available flights:", airline.listAvailableFlights("Hà Nội", "Đà Nẵng"));
// Liệt kê booking của 1 hành khách
console.log("Bookings of A:", airline.listBookingsByPassenger(p1.passengerId).map(b => b.getBookingDetails()));
// Tính tổng doanh thu
console.log("Total revenue:", airline.calculateTotalRevenue());
// Đếm số chuyến bay theo loại
console.log("Flights by type:", airline.countFlightsByType());
// Danh sách hành khách theo chuyến bay
console.log("Passengers of VN001:", airline.getFlightPassengerList("VN001"));
