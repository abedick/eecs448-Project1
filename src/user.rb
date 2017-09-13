=begin

    File: user.rb
    Author:
    Date Created: 9/8/17
    Description: 

=end

=begin


### TODOS ###

1) Username needs to be global for each session (must include first name and last name plus validation)
2) Clean up attend_event ... :/
3) Fix scoping issues (public v private)
4) Connect database model


=end


require 'date'

require_relative 'event'
require_relative 'databaseController'

class User
    def initialize
        @user_name = String.new
        @drive = Driver.new
        @events = false
        @military_time = true
        @number_of_events = 0
        @spacer = "        "
        @attending_events = Array.new
    end

    def run
        @db = DatabaseController.new

        #eventually this will be pulling events from the database based on the time list
        @e1_times = ["15:00","23:30","17:30"]
        @e1 = Event.new("Awesome PArty","This is the desc of the first of the events in a series of 3 events that will be here to demonstrate how this works and how it will continue to work for as long as there are characters in the string that still need printing",Date.new(2018,3,18),@e1_times,["Abe"])            
        @e2 = Event.new("Git wrecked","new e2",Date.parse('01-03-2017'),["12:30","02:00"],["Dick"])
        @e3 = Event.new("heelo","new e3",Date.parse('06-03-2018'),["12:30"],["Alex","ARD","LAMO"]) 
        
        # @db.persist_event(@e1)
        # @db.persist_event(@e2)
        # @db.persist_event(@e3)

        # @event_array = @db.get_events

        @event_array = [@e1,@e2,@e3]
        @number_of_events = @event_array.length
        @events = true

        puts "Browsing is #{@browsing.to_s}"

        @browsing = true

        while @browsing
            get_events()
            @browsing = event_controller()
        end

        reminder()
    end

    # updates the member variable @user_name with a name given by the user
    def get_user_name
        system "clear"
        @drive.title_print_ext("User Mode")
        @drive.sub_title_print("Get User Name")

        print "\tPlease enter a username: "
        @user_name = STDIN.gets.chomp

        return @user_name
    end

    # If there are events stored in the database, they are grabbed 
    # and printed to terminal window (via single_event_printer). 
    # If there are no events, a message is printed as such   
    def get_events
        if @events  == true
            system "clear"
            @drive.title_print_ext("Events")
            @drive.sub_title_print("Upcoming Events")
            print "\t(use t to toggle 12 or 24 hour time formats)\n"

            # Grab each event
            for i in 0...@event_array.length
                @drive.hr
                single_event_printer(@event_array[i],i+1,false)
            end
        else
            print "There are not currently any events in the database\n"
        end
    end

    # Template for printing a single event
    # takes an event object, and id number, and a true/false if this is for printing in a list
    # or printing a single event
    def single_event_printer(event,id,single)

        if !single
            puts "\n\n#{@spacer}Event ID:\t" + id.to_s
        end

        puts "\n#{@spacer}Event Name:\t" + event.getName
        puts "#{@spacer}Date:\t\t" + event.getDate.strftime("%m/%d/%Y")
        print "#{@spacer}Time(s)"

        if !@military_time
            print " (12hr): "

            # make sure the event was created correctly
            if event.getTimeslots12hrs.kind_of?(Array)
                for j in 0...event.getTimeslots12hrs.length
                    print event.getTimeslots12hrs[j]
                    if j != event.getTimeslots12hrs.length-1
                        print ", "
                    end
                end
            else
                print "Should be an array!\n"
            end
        else
            print " (24hr): "

            # make sure the event was created correctly
            if event.getTimeslots.kind_of?(Array)
                for j in 0...event.getTimeslots.length
                    print event.getTimeslots[j]
                    if j != event.getTimeslots.length-1
                        print ", "
                    end
                end
            else
                print "Should be an array!\n"
            end
        end



        print "\n#{@spacer}Attendees:\t"

        if event.getAttendees.empty?
            print "None yet, be the first to attend!\n"
        end

        if event.getAttendees.kind_of?(Array)

            for i in 0...event.getAttendees.length
                print event.getAttendees[i]
                if i != event.getAttendees.length-1
                    print ", "
                end

            end
            print "\n"
        else
            print "Should be an array!\n"
        end

        print "\n#{@spacer}Description:\t"
        @drive.desc_printer event.getDescription

    end

    # outputs each event and returns if the user wants to attend
    def event_controller()

        @drive.hr

        puts "\n\n#{@spacer}If you wish to attend an event, enter the Event's ID number otherwise enter t to toggle time"
        puts "#{@spacer}format or \"Quit\" to end the application\n"

        # set up the user input and create the array of acceptable responces
        @user_input = ""
        @acceptable_input = Array.new
        @acceptable_input.push(*['t',
                                 'q',
                                 "quit",
                                 "Quit"])

        for i in 1...@number_of_events+1
            @acceptable_input.push(i.to_s)
        end

        # get user input
        while !@acceptable_input.include? @user_input
            print "\n#{@spacer}Choice: "
            @user_input = STDIN.gets.chomp
        end

        # if user wants to attend an event, convert it to an integer for easier handling
        if @user_input.match(/\d/)
            @user_input = @user_input.to_i
        end

        # handle input
        case @user_input
            when 1...@number_of_events+1
                @username = get_user_name()
                @browsing = attend_event(@event_array[@user_input-1],@user_input,@username)
                return @browsing
            when 'q',"quit","Quit"
                @browsing = false
                return @browsing
            when 't'
                #repring the event with military time flipped
                if !@military_time
                    @military_time = true
                else
                    @military_time = false
                end

                get_events()
                event_controller()
        end
    end
    
    # takes an event given by the event_controller method
    def attend_event(event,id,username)
        system "clear"
        @drive.title_print_ext("Events")
        @drive.sub_title_print("Attend an Event")

        # reprint the details of only the specific event the user is interested in
        single_event_printer(event,id,true)

        # check to see how many timeslots are availiable and proceed 
        if event.getTimeslots.length > 1

            print "\n\n#{@spacer}To cancel enter \"Cancel\"\n"
            print "#{@spacer}To toggle time enter 't'\n"
            print "\n#{@spacer}To attend the entire event enter \"All\"\n"
            print "\n#{@spacer}Otherwise select times, one at a time, that you would like to attend\n"
            print "#{@spacer}by entering the time exactly as show above\n"

            # Create the list of acceptable input
            @acceptable_input = Array.new

            if @military_time
                for i in 0...event.getTimeslots.length
                    @acceptable_input.push(event.getTimeslots[i])
                end
            else
                for i in 0...event.getTimeslots12hrs.length
                    @acceptable_input.push(event.getTimeslots12hrs[i])
                end
            end

            @available_time_slots = @acceptable_input.clone

            @acceptable_input.push(*["all",
                                    "All", 
                                    'a',
                                    't',
                                    "return",
                                    "nevermind",
                                    'c',
                                    "cancel",
                                    "Cancel"])

            # get user input
            @user_input = ""

            while !@acceptable_input.include? @user_input
                print "\n#{@spacer}Choice: "
                @user_input = STDIN.gets.chomp
            end

            # process user input
            case @user_input

                # when a time slot is chosen
                when *@available_time_slots

                    @continue_picking = true
                    @slots_chosen = Array.new
                    @slots_chosen.push(@user_input)

                    while @continue_picking
                        
                        # Loop to get more input

                        @sub_input = ""

                        @sub_default_input = ["end",
                                                "End"]
                        @remaining_slots = @available_time_slots - @slots_chosen
                        @sub_acceptable_input = @sub_default_input + @remaining_slots

                        # If the user chooses all availaible time slots
                        if @remaining_slots.length == 0
                            print "\n\n#{@spacer}All slots chosen, added to the list!"
                            event.addAttendees(username)
                            @attending_events.push(event)
                            @continue_picking = false
                            sleep 2
                            break
                        end

                        while !@sub_acceptable_input.include? @sub_input 
                            print "\n#{@spacer}Choose another timeslot or enter \"end\": "
                            @sub_input = STDIN.gets.chomp
                        end

                        case @sub_input
                            # When a time slot is chosen
                            when *@remaining_slots
                                @slots_chosen.push(@sub_input)
                            # When the user choses end
                            when *@sub_default_input
                                #post to event the times that were added

                                @username_time_string = username + "("
                                for i in 0...@slots_chosen.length
                                    @username_time_string = @username_time_string + @slots_chosen[i]
                                    if i != @slots_chosen.length-1
                                        @username_time_string = @username_time_string + ", "
                                    end
                                end
                                @username_time_string = @username_time_string + ")"

                                event.addAttendees(@username_time_string)
                                @attending_events.push(event)

                                print "\n\n#{@spacer}Your were added to the list!"
                                sleep 2
                                @continue_picking = false

                        end

                    end

                # when all time slots are chosen
                when "all","All",'a'
                    @picking_out_times = false
                    event.addAttendees(username)
                    @attending_events.push(event)
                    print "\n\n#{@spacer}Your were added to the list!"
                    sleep 2
                
                # toggle the time format
                when 't'
                    #repring the event with military time flipped
                    if !@military_time
                        @military_time = true
                    else
                        @military_time = false
                    end
                        attend_event(event,id,username)
            end


        else
            event.addAttendees(username)
            @attending_events.push(event)
            print "\n\n#{@spacer}Your were added to the list!"
            sleep 2
        end

        return true

    end

    def reminder
        system "clear"

        if @attending_events.any?
            @drive.title_print_ext("Reminders")
            @drive.sub_title_print("List of Events for #{@user_name}")

            # Grab each event that the user is going to and print it
            for i in 0...@attending_events.length
                @drive.hr
                single_event_printer(@attending_events[i],i+1,false)
            end
        else
            @drive.title_print("Thanks for using, goodbye!")
        end

        print "\n\n"
    end
end



=begin GARBAGE                        
                        # DEBUG USE ONLY
                        for i in 0...@sub_acceptable_input.length
                            puts @sub_acceptable_input[i]
                        end
=end