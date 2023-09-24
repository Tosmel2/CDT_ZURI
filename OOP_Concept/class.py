class ObstructionDetector:
    """
    A class to detect obstructions in the route between two locations.
    """

    def __init__(self, speed, distance, expected_time):
        """
        Initializes the ObstructionDetector with given parameters.

        :param speed: The speed of the machine used for digging in miles per hour.
        :param distance: The distance between location A and location B in miles.
        :param expected_time: The expected time it will take to travel from A to B based on speed and distance.
        """
        self.speed = speed
        self.distance = distance
        self.expected_time = expected_time

    def detect_obstruction(self):
        """
        Detects if there is an obstruction between location A and location B.

        :return: False if no obstruction is detected. "impenetrable" if an obstruction is detected and it's impenetrable. True if an obstruction is detected but not impenetrable.
        """
        # Simulate time taken from another module
        time_duration_module_result = self.simulate_time_duration_module(self.speed, self.distance)

        # Calculate difference between expected time and actual time
        time_difference = abs(self.expected_time - time_duration_module_result)

        if time_difference > 60:
            return "impenetrable"
        elif time_duration_module_result > self.expected_time:
            return True
        else:
            return False

    def simulate_time_duration_module(self, speed, distance):
        """
        Simulates the result from the time duration module.

        :param speed: Speed of the machine in miles per hour.
        :param distance: Distance between location A and location B in miles.
        :return: Simulated time duration in minutes.
        """
        # Simulate the calculation, here we assume some formula to calculate time duration
        # based on speed and distance
        time_duration = (distance / speed) * 60
        return time_duration

# Example values for demonstration purposes
corrected_speed = 0.16  # miles per hour (approximately)
corrected_distance = 0.21  # miles (approximately)
expected_time = 15.2  # minutes

# Create an instance of ObstructionDetector with corrected values
obstruction_detector = ObstructionDetector(corrected_speed, corrected_distance, expected_time)

# Detect obstruction
obstruction_result = obstruction_detector.detect_obstruction()

if obstruction_result:
    print("There is an obstruction.")
    if obstruction_result == "impenetrable":
        print("The obstruction is impenetrable.")
else:
    print("No obstructions.")
