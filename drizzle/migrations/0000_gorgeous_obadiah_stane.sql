CREATE TABLE `clearance_requests` (
	`id` text PRIMARY KEY NOT NULL,
		`student_id` text NOT NULL,
		`department_id` text NOT NULL,
		`status` text DEFAULT 'pending' NOT NULL,
		`remarks` text,
		`updated_at` text NOT NULL
	);
	--> statement-breakpoint
	CREATE TABLE `departments` (
		`id` text PRIMARY KEY NOT NULL,
		`name` text NOT NULL,
		`officer_id` text
	);
	--> statement-breakpoint
	CREATE TABLE `logs` (
		`id` text PRIMARY KEY NOT NULL,
		`action` text NOT NULL,
		`user_id` text NOT NULL,
		`target_id` text,
		`timestamp` text NOT NULL
	);
	--> statement-breakpoint
	CREATE TABLE `students` (
		`user_id` text PRIMARY KEY NOT NULL,
		`registration_number` text NOT NULL,
		`program` text NOT NULL,
		`graduation_year` integer NOT NULL
	);
	--> statement-breakpoint
	CREATE TABLE `users` (
		`id` text PRIMARY KEY NOT NULL,
		`name` text NOT NULL,
		`email` text NOT NULL,
		`role` text NOT NULL,
		`password_hash` text NOT NULL
	);
	INSERT INTO `clearance_requests` (`id`, `student_id`, `department_id`, `status`, `remarks`, `updated_at`) VALUES
	('1', 'student1', 'dept1', 'pending', 'Initial request', '2023-01-01T10:00:00Z'),
	('2', 'student2', 'dept2', 'approved', 'Approved by officer', '2023-01-02T11:00:00Z'),
	('3', 'student3', 'dept3', 'rejected', 'Missing documents', '2023-01-03T12:00:00Z'),
	('4', 'student4', 'dept1', 'pending', 'Awaiting review', '2023-01-04T13:00:00Z'),
	('5', 'student5', 'dept2', 'approved', 'All clear', '2023-01-05T14:00:00Z'),
	('6', 'student6', 'dept3', 'pending', 'Initial submission', '2023-01-06T15:00:00Z'),
	('7', 'student7', 'dept1', 'rejected', 'Incomplete form', '2023-01-07T16:00:00Z'),
	('8', 'student8', 'dept2', 'approved', 'Verified', '2023-01-08T17:00:00Z'),
	('9', 'student9', 'dept3', 'pending', 'Under review', '2023-01-09T18:00:00Z'),
	('10', 'student10', 'dept1', 'approved', 'Finalized', '2023-01-10T19:00:00Z');

	INSERT INTO `departments` (`id`, `name`, `officer_id`) VALUES
	('dept1', 'Computer Science', 'officer1'),
	('dept2', 'Mathematics', 'officer2'),
	('dept3', 'Physics', 'officer3'),
	('dept4', 'Chemistry', 'officer4'),
	('dept5', 'Biology', 'officer5'),
	('dept6', 'Engineering', 'officer6'),
	('dept7', 'Economics', 'officer7'),
	('dept8', 'History', 'officer8'),
	('dept9', 'Philosophy', 'officer9'),
	('dept10', 'Art', 'officer10');

	INSERT INTO `logs` (`id`, `action`, `user_id`, `target_id`, `timestamp`) VALUES
	('log1', 'created', 'user1', '1', '2023-01-01T10:05:00Z'),
	('log2', 'approved', 'user2', '2', '2023-01-02T11:05:00Z'),
	('log3', 'rejected', 'user3', '3', '2023-01-03T12:05:00Z'),
	('log4', 'created', 'user4', '4', '2023-01-04T13:05:00Z'),
	('log5', 'approved', 'user5', '5', '2023-01-05T14:05:00Z'),
	('log6', 'created', 'user6', '6', '2023-01-06T15:05:00Z'),
	('log7', 'rejected', 'user7', '7', '2023-01-07T16:05:00Z'),
	('log8', 'approved', 'user8', '8', '2023-01-08T17:05:00Z'),
	('log9', 'created', 'user9', '9', '2023-01-09T18:05:00Z'),
	('log10', 'approved', 'user10', '10', '2023-01-10T19:05:00Z');

	INSERT INTO `students` (`user_id`, `registration_number`, `program`, `graduation_year`) VALUES
	('student1', 'REG123', 'BSc Computer Science', 2023),
	('student2', 'REG456', 'BSc Mathematics', 2024),
	('student3', 'REG789', 'BSc Physics', 2025),
	('student4', 'REG012', 'BSc Chemistry', 2026),
	('student5', 'REG345', 'BSc Biology', 2023),
	('student6', 'REG678', 'BSc Engineering', 2024),
	('student7', 'REG901', 'BSc Economics', 2025),
	('student8', 'REG234', 'BSc History', 2026),
	('student9', 'REG567', 'BSc Philosophy', 2023),
	('student10', 'REG890', 'BSc Art', 2024);

	INSERT INTO `users` (`id`, `name`, `email`, `role`, `password_hash`) VALUES
	('user1', 'John Doe', 'john.doe@example.com', 'student', 'hashed_password_1'),
	('user2', 'Jane Smith', 'jane.smith@example.com', 'officer', 'hashed_password_2'),
	('officer1', 'Alice Brown', 'alice.brown@example.com', 'officer', 'hashed_password_3'),
	('officer2', 'Bob White', 'bob.white@example.com', 'officer', 'hashed_password_4'),
	('officer3', 'Charlie Green', 'charlie.green@example.com', 'officer', 'hashed_password_5'),
	('officer4', 'Diana Black', 'diana.black@example.com', 'officer', 'hashed_password_6'),
	('officer5', 'Eve Gray', 'eve.gray@example.com', 'officer', 'hashed_password_7'),
	('officer6', 'Frank Blue', 'frank.blue@example.com', 'officer', 'hashed_password_8'),
	('officer7', 'Grace Yellow', 'grace.yellow@example.com', 'officer', 'hashed_password_9'),
	('officer8', 'Hank Red', 'hank.red@example.com', 'officer', 'hashed_password_10');