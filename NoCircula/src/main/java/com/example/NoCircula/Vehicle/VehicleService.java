package com.example.NoCircula.Vehicle;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class VehicleService {
    private final VehicleRepository vehicleRepository;

    @Autowired
	public VehicleService(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }
    public Vehicle getVehicle(String plateNumber, String validationDate){
        Vehicle vehicle = vehicleRepository.findVehiclePlate(plateNumber);
        vehicle.setCanDrive(noCircula(plateNumber, validationDate));
        
        return vehicle;
    }
  
    public void addNewVehicle(Vehicle vehicle) {
        Optional<Vehicle> vehicleOptional = vehicleRepository.findVehicleByPlate(vehicle.getPlateNumber());
        if(vehicleOptional.isPresent()){
            throw new IllegalStateException("Vehicle already registered");
        }
        vehicleRepository.save(vehicle);
    } 

    public boolean noCircula(String plateNumber, String validationDate){

        char lastNumber = plateNumber.charAt(plateNumber.length()-1);
        LocalDate myDate =LocalDate.parse(validationDate);
        DayOfWeek day = myDate.getDayOfWeek();
        int dayOfWeek = day.getValue();
        boolean canDrive = true;
        if (dayOfWeek==1 &&( lastNumber == '0' || lastNumber == '1' || lastNumber == '2' || lastNumber == '3')){
            canDrive = false;
        }
        else if(dayOfWeek==2 &&( lastNumber == '2' || lastNumber == '3' || lastNumber == '4' || lastNumber == '5')){
            canDrive = false;
        }
        else if(dayOfWeek==3 &&( lastNumber == '4' || lastNumber == '5' || lastNumber == '6' || lastNumber == '7')){
            canDrive = false;
        }
        else if(dayOfWeek==4 &&( lastNumber == '6' || lastNumber == '7' || lastNumber == '8' || lastNumber == '9')){
            canDrive = false;
        }
        else if(dayOfWeek==5 &&( lastNumber == '0' || lastNumber == '1' || lastNumber == '8' || lastNumber == '9')){
            canDrive = false;
        }
        else {
            canDrive = true;
        }
        return canDrive;
    }
    


}
