//1.Lớp Passenger
class Passenger {
    private static idCounter = 1;
    public passengerId: number;
    public name: string;
    public passportNumber: string;
  
    constructor(name: string, passportNumber: string) {
      this.passengerId = Passenger.idCounter++;
      this.name = name;
      this.passportNumber = passportNumber;
    }
  
    getDetails(): string {
      return `Passenger[ID=${this.passengerId}, Name=${this.name}, Passport=${this.passportNumber}]`;
    }
  }
  
// 2.Lớp Flight (Abstract class - chuyến bay)
  abstract class Flight {
    public flightNumber: string;
    public origin: string;
    public destination: string;
    public departureTime: Date;
    public capacity: number;
    public bookedSeats: number;
  
    constructor(
      flightNumber: string,
      origin: string,
      destination: string,
      departureTime: Date,
      capacity: number
    ) {
      this.flightNumber = flightNumber;
      this.origin = origin;
      this.destination = destination;
      this.departureTime = departureTime;
      this.capacity = capacity;
      this.bookedSeats = 0;
    }
  
    bookSeat(): boolean {
      if (!this.isFull()) {
        this.bookedSeats++;
        return true;
      }
      return false;
    }
  
    isFull(): boolean {
      return this.bookedSeats >= this.capacity;
    }
  
    abstract calculateBaggageFee(weight: number): number;
  }
  
// 3. Các lớp con kế thừa của Flight
  class DomesticFlight extends Flight {
    calculateBaggageFee(weight: number): number {
      return weight * 50000; // VND
    }
  }
  
  class InternationalFlight extends Flight {
    calculateBaggageFee(weight: number): number {
      return weight * 10; // USD
    }
  }

// 4.Lớp Booking 
  class Booking {
    private static idCounter = 1;
    public bookingId: number;
    public passenger: Passenger;
    public flight: Flight;
    public numberOfTickets: number;
    public totalCost: number;
  
    constructor(passenger: Passenger, flight: Flight, numberOfTickets: number) {
      this.bookingId = Booking.idCounter++;
      this.passenger = passenger;
      this.flight = flight;
      this.numberOfTickets = numberOfTickets;
      this.totalCost = numberOfTickets * 100; 
    }
  
    getBookingDetails(): string {
      return `Booking[ID=${this.bookingId}, Passenger=${this.passenger.name}, Flight=${this.flight.flightNumber}, Tickets=${this.numberOfTickets}, TotalCost=${this.totalCost}]`;
    }
  }
  
//5. Lớp GenericRepository<T>(Kho chứa dữ liệu chung)
  class GenericRepository<T> {
    private items: T[] = [];
  
    add(item: T): void {
      this.items.push(item);
    }
  
    getAll(): T[] {
      return this.items;
    }
  
    find(predicate: (item: T) => boolean): T | undefined {
      return this.items.find(predicate);
    }
  
    findIndex(predicate: (item: T) => boolean): number {
      return this.items.findIndex(predicate);
    }
  
    remove(predicate: (item: T) => boolean): void {
      this.items = this.items.filter(item => !predicate(item));
    }
  }
//6 Lớp AirlineManager
  class AirlineManager {
    private flightRepo = new GenericRepository<Flight>();
    private passengerRepo = new GenericRepository<Passenger>();
    private bookingRepo = new GenericRepository<Booking>();
  
    addFlight(flight: Flight): void {
      this.flightRepo.add(flight);
    }
  
    addPassenger(name: string, passportNumber: string): Passenger {
      const passenger = new Passenger(name, passportNumber);
      this.passengerRepo.add(passenger);
      return passenger;
    }
  
    createBooking(passengerId: number, flightNumber: string, numberOfTickets: number): Booking | null {
      const passenger = this.passengerRepo.find(p => p.passengerId === passengerId);
      const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
  
      if (passenger && flight && flight.bookedSeats + numberOfTickets <= flight.capacity) {
        for (let i = 0; i < numberOfTickets; i++) flight.bookSeat();
        const booking = new Booking(passenger, flight, numberOfTickets);
        this.bookingRepo.add(booking);
        return booking;
      }
      return null;
    }
  
    cancelBooking(bookingId: number): void {
      this.bookingRepo.remove(b => b.bookingId === bookingId);
    }
  
    listAvailableFlights(origin: string, destination: string): Flight[] {
      return this.flightRepo.getAll().filter(f =>
        f.origin === origin && f.destination === destination && !f.isFull()
      );
    }
  
    listBookingsByPassenger(passengerId: number): Booking[] {
      return this.bookingRepo.getAll().filter(b => b.passenger.passengerId === passengerId);
    }
  
    calculateTotalRevenue(): number {
      return this.bookingRepo.getAll().reduce((sum, b) => sum + b.totalCost, 0);
    }
  
    countFlightsByType(): { domestic: number; international: number } {
      return this.flightRepo.getAll().reduce(
        (acc, flight) => {
          if (flight instanceof DomesticFlight) acc.domestic++;
          else if (flight instanceof InternationalFlight) acc.international++;
          return acc;
        },
        { domestic: 0, international: 0 }
      );
    }
  
    updateFlightTime(flightNumber: string, newDepartureTime: Date): void {
      const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
      if (flight) {
        flight.departureTime = newDepartureTime;
      }
    }
  
    getFlightPassengerList(flightNumber: string): string[] {
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
  console.log(airline.createBooking(p1.passengerId, "VN001", 1)?.getBookingDetails());
  console.log(airline.createBooking(p2.passengerId, "VN001", 1)?.getBookingDetails());
  
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

  