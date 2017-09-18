var search_data = {"index":{"searchIndex":["admin","attend","attendee","controller","databasecontroller","driver","event","object","add_attendee()","add_timeslot()","attend_event()","choice_getter()","choice_getter_ext()","clean_attendee()","clear_timeslot()","convert_to_military_time()","create_date()","create_date_time()","create_time_array()","create_user()","desc_printer()","display_events()","event_controller()","get_alpha()","get_attendees()","get_date()","get_description()","get_event_by_id()","get_event_counter()","get_events()","get_events()","get_id()","get_military_time()","get_name()","get_name()","get_timeslots()","get_timeslots()","get_timeslots_12hrs()","get_timeslots_12hrs()","get_validation()","hr()","init_database()","menu_builder()","menu_builder_ext()","new()","new()","new()","new()","new()","new()","new()","persist_attendee()","persist_event()","post_updates()","reminder()","run()","run()","run()","run()","set_admin_info()","set_event_counter()","setup()","single_event_printer()","single_event_printer()","sub_title_print()","time_check()","title_print()","title_print_ext()","update_event()","validate_input()","makefile","readme"],"longSearchIndex":["admin","attend","attendee","controller","databasecontroller","driver","event","object","event#add_attendee()","attendee#add_timeslot()","attend#attend_event()","driver#choice_getter()","driver#choice_getter_ext()","attend#clean_attendee()","attendee#clear_timeslot()","admin#convert_to_military_time()","admin#create_date()","admin#create_date_time()","admin#create_time_array()","attend#create_user()","driver#desc_printer()","admin#display_events()","attend#event_controller()","driver#get_alpha()","event#get_attendees()","event#get_date()","event#get_description()","attend#get_event_by_id()","admin#get_event_counter()","attend#get_events()","databasecontroller#get_events()","event#get_id()","attend#get_military_time()","attendee#get_name()","event#get_name()","attendee#get_timeslots()","event#get_timeslots()","attendee#get_timeslots_12hrs()","event#get_timeslots_12hrs()","admin#get_validation()","driver#hr()","databasecontroller#init_database()","driver#menu_builder()","driver#menu_builder_ext()","admin::new()","attend::new()","attendee::new()","controller::new()","databasecontroller::new()","driver::new()","event::new()","databasecontroller#persist_attendee()","databasecontroller#persist_event()","attend#post_updates()","attend#reminder()","admin#run()","attend#run()","controller#run()","object#run()","admin#set_admin_info()","admin#set_event_counter()","attend#setup()","admin#single_event_printer()","attend#single_event_printer()","driver#sub_title_print()","admin#time_check()","driver#title_print()","driver#title_print_ext()","databasecontroller#update_event()","driver#validate_input()","",""],"info":[["Admin","","Admin.html","",""],["Attend","","Attend.html","",""],["Attendee","","Attendee.html","","\n<pre>File: attendee.rb\nAuthor: Alex Shadley\nDate Created: 9/11/17\nDescription: stores information about an ...</pre>\n"],["Controller","","Controller.html","",""],["DatabaseController","","DatabaseController.html","","<p>Controller class used to encapsulate all database logic.  Also used to\ngenerate the database if no database …\n"],["Driver","","Driver.html","","<p>File: driver.rb Author: Abraham Dick Date Created: 9/8/17 Description: In\ncharge of printing things to …\n"],["Event","","Event.html","","\n<pre>File: event.rb\nAuthor: Alex Shadley\nDate Created: 9/10/17\nDescription: models an event</pre>\n<p>Class designed …\n"],["Object","","Object.html","",""],["add_attendee","Event","Event.html#method-i-add_attendee","(attendee)",""],["add_timeslot","Attendee","Attendee.html#method-i-add_timeslot","(new_slot)",""],["attend_event","Attend","Attend.html#method-i-attend_event","(event)","<p>@pre: an event must be passed @post: the user is guided through adding\nthemselves to an event @return: …\n"],["choice_getter","Driver","Driver.html#method-i-choice_getter","(low,high)","<p>@pre: takes an an upper and lower bounds @post:gets user input @return: an\ninteger option\n"],["choice_getter_ext","Driver","Driver.html#method-i-choice_getter_ext","(low,high)","<p>same as choice_getter(low,high) except for use with the correct spacing for\nthe sub titled options\n"],["clean_attendee","Attend","Attend.html#method-i-clean_attendee","(attendee)","<p>@desc: Resets with the same username to go to multiple events @pre: takes\nan attendee object @post: removes …\n"],["clear_timeslot","Attendee","Attendee.html#method-i-clear_timeslot","()",""],["convert_to_military_time","Admin","Admin.html#method-i-convert_to_military_time","(standard_time)","<p>Pre: A time was given by the user and was then split by a character. Post:\nTakes the 12 hr time array …\n"],["create_date","Admin","Admin.html#method-i-create_date","()","<p>Pre: An admin was created. Post: A Date object was created with the date of\nthe event. Return: None. …\n"],["create_date_time","Admin","Admin.html#method-i-create_date_time","()","<p>Pre: An admin was created and a Date object was created. Post: Gets the\ntimes that the event will take …\n"],["create_time_array","Admin","Admin.html#method-i-create_time_array","(hr)","<p>Pre: The user enters a vaild time representation of time. Post: An array is\ncreated with either military …\n"],["create_user","Attend","Attend.html#method-i-create_user","(origin_time_slot)","<p>@pre: takes the time slot of the event the user wishes to attend @post:\ngets a first and last name and …\n"],["desc_printer","Driver","Driver.html#method-i-desc_printer","(string)","<p>breaks up a long string over multiple lines\n"],["display_events","Admin","Admin.html#method-i-display_events","()",""],["event_controller","Attend","Attend.html#method-i-event_controller","()","<p>@pre: None  @post: outputs each event and returns if the user wants to\nattend @return: None\n"],["get_alpha","Driver","Driver.html#method-i-get_alpha","(message)","<p>Takes a string (message) and validates user input to only allow responses\nthat only contain upper and …\n"],["get_attendees","Event","Event.html#method-i-get_attendees","()",""],["get_date","Event","Event.html#method-i-get_date","()",""],["get_description","Event","Event.html#method-i-get_description","()",""],["get_event_by_id","Attend","Attend.html#method-i-get_event_by_id","(id_number)","<p>pre: takes an int ID number return: finds and returns the event in the\nevent array in which the passed …\n"],["get_event_counter","Admin","Admin.html#method-i-get_event_counter","()","<p>Accessor methods\n"],["get_events","Attend","Attend.html#method-i-get_events","()","<p>@pre: none @post:If there are events stored in the database, they are\nretrieved\n\n<pre>and printed to terminal ...</pre>\n"],["get_events","DatabaseController","DatabaseController.html#method-i-get_events","()","<p>returns sorted array of events\n<p>example usage: events = dbController.get_events events.getName etc.\n"],["get_id","Event","Event.html#method-i-get_id","()",""],["get_military_time","Attend","Attend.html#method-i-get_military_time","()",""],["get_name","Attendee","Attendee.html#method-i-get_name","()",""],["get_name","Event","Event.html#method-i-get_name","()",""],["get_timeslots","Attendee","Attendee.html#method-i-get_timeslots","()",""],["get_timeslots","Event","Event.html#method-i-get_timeslots","()",""],["get_timeslots_12hrs","Attendee","Attendee.html#method-i-get_timeslots_12hrs","()","<p>Gets timeslots of the event, converted into 12hr format.\n"],["get_timeslots_12hrs","Event","Event.html#method-i-get_timeslots_12hrs","()","<p>Gets timeslots of the event, converted into 12hr format.\n"],["get_validation","Admin","Admin.html#method-i-get_validation","()","<p>Pre: An event was created and persisted to the data base with correct info.\nPost: If yes, the admin gets …\n"],["hr","Driver","Driver.html#method-i-hr","()","<p>@pre: none @post: prints a horizontal rule to terminal @return: none\n"],["init_database","DatabaseController","DatabaseController.html#method-i-init_database","()","<p>checks to see if database tables exist and creates them if not\n"],["menu_builder","Driver","Driver.html#method-i-menu_builder","(option_array)","<p>@pre: takes an array @post:prints and calls choic_getter @return: an\ninteger option\n"],["menu_builder_ext","Driver","Driver.html#method-i-menu_builder_ext","(option_array)","<p>same as menu_builder(option_array) except for use with the correct spacing\nfor the sub titled options …\n"],["new","Admin","Admin.html#method-c-new","()",""],["new","Attend","Attend.html#method-c-new","()","<p>sets up the member variables for Attend class\n"],["new","Attendee","Attendee.html#method-c-new","(name, timeslots)","<p>Params:\n<p>name &mdash; String containing the name of the attendee\n<p>timeslots &mdash; Array of DateTime objects representing …\n"],["new","Controller","Controller.html#method-c-new","()",""],["new","DatabaseController","DatabaseController.html#method-c-new","()",""],["new","Driver","Driver.html#method-c-new","()",""],["new","Event","Event.html#method-c-new","(name, description, timeslots, attendees, id = nil)","<p>NOTE: &#39;date&#39; member variable generated by taking the earliest\ntimeslot passed Params:\n<p>name &mdash; string …\n"],["persist_attendee","DatabaseController","DatabaseController.html#method-i-persist_attendee","(attendee, parentid)","<p>persists a single attendee to the database, for use within the class only\nParams:\n<p>attendee &mdash; Attendee object …\n"],["persist_event","DatabaseController","DatabaseController.html#method-i-persist_event","(event)","<p>takes an event object as a parameter, then persists the event and its\nattendees to the database\n<p>NOTE: …\n"],["post_updates","Attend","Attend.html#method-i-post_updates","()","<p>@pre: none @post: Updates the database @return: none\n"],["reminder","Attend","Attend.html#method-i-reminder","()","<p>@pre: none @post: Prints a reminder of the events that the attendee object\nis attending @return: none …\n"],["run","Admin","Admin.html#method-i-run","()",""],["run","Attend","Attend.html#method-i-run","()","<p>@desc: In charge of control of the attend class. Runs the setup to get\ndatabase data, runs the program, …\n"],["run","Controller","Controller.html#method-i-run","()",""],["run","Object","Object.html#method-i-run","()",""],["set_admin_info","Admin","Admin.html#method-i-set_admin_info","()","<p>Pre: User chooses admin from homepage. Post: An admin was created with\nfirstName and lastName. Return: …\n"],["set_event_counter","Admin","Admin.html#method-i-set_event_counter","(increase_number)","<p>Setter methods\n"],["setup","Attend","Attend.html#method-i-setup","()","<p>@pre: none @post: creates a database controller object retrieves the\nevents, also sets some bool flags …\n"],["single_event_printer","Admin","Admin.html#method-i-single_event_printer","(event)","<p>@desc: Template for printing a single event @pre: takes an event and a bool\nflag to indicate if more …\n"],["single_event_printer","Attend","Attend.html#method-i-single_event_printer","(event,single)","<p>@desc: Template for printing a single event @pre: takes an event and a bool\nflag to indicate if more …\n"],["sub_title_print","Driver","Driver.html#method-i-sub_title_print","(title)","<p>@pre: Takes a string @post:prints a title heading bracket @return: none\n"],["time_check","Admin","Admin.html#method-i-time_check","(time, array)","<p>Pre: A time was input by the user and an array with a time representation\nwas created. Post: The user&#39;s …\n"],["title_print","Driver","Driver.html#method-i-title_print","(title)","<p>@pre: Takes a string @post:prints a title heading bracket @return: none\n"],["title_print_ext","Driver","Driver.html#method-i-title_print_ext","(title)","<p>@pre: Takes a string @post:prints a title heading bracket @return: none\n"],["update_event","DatabaseController","DatabaseController.html#method-i-update_event","(event)","<p>finds the event in the database that matches the event passed in; matching\nperformed by the &#39;id&#39; …\n"],["validate_input","Driver","Driver.html#method-i-validate_input","(acceptable_input)","<p>takes an array of acceptable answers and only allows the user to choose\nfrom that list\n"],["Makefile","","Makefile.html","","<p>make run:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">ruby</span> <span class=\"ruby-identifier\">main</span>.<span class=\"ruby-identifier\">rb</span>\n</pre>\n"],["README","","README_md.html","","<p>Quablex\n<p>A simple, lightweight tool for planning and scheduling events.\n<p>Getting Started\n"]]}}