CREATE TABLE "users" (
	-- Unique identifier for each user
	"user_id" SERIAL NOT NULL UNIQUE,
	"username" VARCHAR(50) NOT NULL,
	-- Hashed password for secure authentication
	"password" VARCHAR(255) NOT NULL,
	-- User's email address (unique)
	"email" VARCHAR(100) NOT NULL UNIQUE,
	-- Timestamp when the user account was created
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	-- Timestamp when the user account was last updated
	"updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("user_id")
);
COMMENT ON COLUMN users.user_id IS 'Unique identifier for each user';
COMMENT ON COLUMN users.password IS 'Hashed password for secure authentication';
COMMENT ON COLUMN users.email IS 'User's email address (unique)';
COMMENT ON COLUMN users.created_at IS 'Timestamp when the user account was created';
COMMENT ON COLUMN users.updated_at IS 'Timestamp when the user account was last updated';


CREATE TABLE "salons" (
	-- Unique identifier for each salon
	"salon_id" SERIAL NOT NULL UNIQUE,
	-- Reference to the user who owns the salon
	"user_id" INTEGER NOT NULL,
	-- Name of the salon
	"name" VARCHAR(255) NOT NULL,
	-- Description of the salon
	"description" TEXT(65535) NOT NULL,
	-- Physical address of the salon
	"address" VARCHAR(255) NOT NULL,
	-- Contact number for the salon
	"phone_number" VARCHAR(15) NOT NULL UNIQUE,
	-- Email address of the salon
	"email" VARCHAR(255) NOT NULL UNIQUE,
	-- Indicates if the salon has a subscription plan
	"subscription_plan	" BOOLEAN NOT NULL,
	-- Timestamp when the salon account was created
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	-- Timestamp when the salon profile was last updated
	"updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("salon_id")
);
COMMENT ON COLUMN salons.salon_id IS 'Unique identifier for each salon';
COMMENT ON COLUMN salons.user_id IS 'Reference to the user who owns the salon';
COMMENT ON COLUMN salons.name IS 'Name of the salon';
COMMENT ON COLUMN salons.description IS 'Description of the salon';
COMMENT ON COLUMN salons.address IS 'Physical address of the salon';
COMMENT ON COLUMN salons.phone_number IS 'Contact number for the salon';
COMMENT ON COLUMN salons.email IS 'Email address of the salon';
COMMENT ON COLUMN salons.subscription_plan	 IS 'Indicates if the salon has a subscription plan';
COMMENT ON COLUMN salons.created_at IS 'Timestamp when the salon account was created';
COMMENT ON COLUMN salons.updated_at IS 'Timestamp when the salon profile was last updated';


CREATE TABLE "clients" (
	-- Unique identifier for each client
	"client_id" SERIAL NOT NULL UNIQUE,
	-- Reference to the user who client
	"user_id" INTEGER NOT NULL,
	-- Client's full name
	"first_name" VARCHAR(255) NOT NULL,
	"last_name" VARCHAR(255) NOT NULL,
	-- Client's contact number
	"phone_number" VARCHAR(15) NOT NULL,
	-- Physical address of the client
	"address" VARCHAR(255) NOT NULL,
	-- Timestamp when the client account was created
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	-- Timestamp when the client profile was last updated
	"updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("client_id")
);
COMMENT ON COLUMN clients.client_id IS 'Unique identifier for each client';
COMMENT ON COLUMN clients.user_id IS 'Reference to the user who client';
COMMENT ON COLUMN clients.first_name IS 'Client's full name';
COMMENT ON COLUMN clients.phone_number IS 'Client's contact number';
COMMENT ON COLUMN clients.address IS 'Physical address of the client';
COMMENT ON COLUMN clients.created_at IS 'Timestamp when the client account was created';
COMMENT ON COLUMN clients.updated_at IS 'Timestamp when the client profile was last updated';


CREATE TABLE "reviews" (
	-- Unique identifier for each review
	"review_id" SERIAL NOT NULL UNIQUE,
	-- Reference to the client who wrote the review
	"client_id" INTEGER NOT NULL,
	-- Reference to the salon being reviewed
	"salon_id" INTEGER NOT NULL,
	-- Rating given by the client (1 to 5)
	"rating" INTEGER NOT NULL CHECK(rating BETWEEN 1 AND 5),
	-- Review comment
	"comment" TEXT(65535) NOT NULL,
	-- Timestamp when the review was created
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("review_id")
);
COMMENT ON COLUMN reviews.review_id IS 'Unique identifier for each review';
COMMENT ON COLUMN reviews.client_id IS 'Reference to the client who wrote the review';
COMMENT ON COLUMN reviews.salon_id IS 'Reference to the salon being reviewed';
COMMENT ON COLUMN reviews.rating IS 'Rating given by the client (1 to 5)';
COMMENT ON COLUMN reviews.comment IS 'Review comment';
COMMENT ON COLUMN reviews.created_at IS 'Timestamp when the review was created';


CREATE TABLE "appointments" (
	-- Unique identifier for each appointment
	"appointment_id" SERIAL NOT NULL UNIQUE,
	-- Reference to the client making the appointment
	"client_id" INTEGER NOT NULL,
	-- Reference to the salon where the appointment is made
	"salon_id" INTEGER NOT NULL,
	"stylist_id" INTEGER NOT NULL,
	"service_id" INTEGER NOT NULL,
	"type_id" INTEGER NOT NULL,
	-- Date and time of the appointment
	"appointment_dat" TIMESTAMP NOT NULL,
	-- Status of the appointment('booked', 'completed', 'canceled')
	"status" VARCHAR(10) NOT NULL CHECK(role IN ('booked', 'completed', 'canceled', 'no_show')),
	-- Timestamp when the appointment was created
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	-- Timestamp when the appointment was last updated
	"updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("appointment_id")
);
COMMENT ON COLUMN appointments.appointment_id IS 'Unique identifier for each appointment';
COMMENT ON COLUMN appointments.client_id IS 'Reference to the client making the appointment';
COMMENT ON COLUMN appointments.salon_id IS 'Reference to the salon where the appointment is made';
COMMENT ON COLUMN appointments.appointment_dat IS 'Date and time of the appointment';
COMMENT ON COLUMN appointments.status IS 'Status of the appointment('booked', 'completed', 'canceled')';
COMMENT ON COLUMN appointments.created_at IS 'Timestamp when the appointment was created';
COMMENT ON COLUMN appointments.updated_at IS 'Timestamp when the appointment was last updated';


CREATE TABLE "subscriptions" (
	-- Unique identifier for each subscription plan
	"subscription_id" SERIAL NOT NULL UNIQUE,
	-- Reference to the salon subscribing
	"salon_id" INTEGER NOT NULL,
	-- Name of the subscription plan
	"plan_name" VARCHAR(255) NOT NULL,
	-- Price of the subscription plan
	"price" DECIMAL(10,2) NOT NULL,
	"subscription_start_date" TIMESTAMP NOT NULL,
	"subscription_end_date" TIMESTAMP NOT NULL,
	-- Timestamp when the subscription plan was created
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	-- Timestamp when the subscription plan was last updated
	"updated_at " TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("subscription_id")
);
COMMENT ON COLUMN subscriptions.subscription_id IS 'Unique identifier for each subscription plan';
COMMENT ON COLUMN subscriptions.salon_id IS 'Reference to the salon subscribing';
COMMENT ON COLUMN subscriptions.plan_name IS 'Name of the subscription plan';
COMMENT ON COLUMN subscriptions.price IS 'Price of the subscription plan';
COMMENT ON COLUMN subscriptions.created_at IS 'Timestamp when the subscription plan was created';
COMMENT ON COLUMN subscriptions.updated_at  IS 'Timestamp when the subscription plan was last updated';


CREATE TABLE "services" (
	-- Unique identifier for each service
	"service_id" SERIAL NOT NULL UNIQUE,
	-- Reference to the salon offering the service
	"salon_id" INTEGER NOT NULL,
	"category_id" INTEGER NOT NULL,
	-- Name of the service (e.g., Swedish Massage)
	"service_name" VARCHAR(255) NOT NULL,
	-- Detailed description of the service
	"description" TEXT(65535) NOT NULL,
	-- Duration of the service in minutes
	"duration" INTEGER NOT NULL,
	-- Price of the service
	"price" DECIMAL(10,2) NOT NULL,
	-- Timestamp when the service was added
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	-- Timestamp when the service was last updated
	"updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("service_id")
);
COMMENT ON COLUMN services.service_id IS 'Unique identifier for each service';
COMMENT ON COLUMN services.salon_id IS 'Reference to the salon offering the service';
COMMENT ON COLUMN services.service_name IS 'Name of the service (e.g., Swedish Massage)';
COMMENT ON COLUMN services.description IS 'Detailed description of the service';
COMMENT ON COLUMN services.duration IS 'Duration of the service in minutes';
COMMENT ON COLUMN services.price IS 'Price of the service';
COMMENT ON COLUMN services.created_at IS 'Timestamp when the service was added';
COMMENT ON COLUMN services.updated_at IS 'Timestamp when the service was last updated';


CREATE TABLE "payments" (
	"payment_id" SERIAL NOT NULL UNIQUE,
	"appointment_id" INTEGER NOT NULL,
	"amount" DECIMAL(10,2) NOT NULL,
	"payment_method" VARCHAR(255) NOT NULL CHECK(payment_method IN ('cash', 'credit_card')),
	"payment_status" VARCHAR(255) NOT NULL CHECK(payment_status IN ('pending', 'completed', 'failed')),
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("payment_id")
);


CREATE TABLE "payment_history" (
	"history_id" SERIAL NOT NULL UNIQUE,
	"client_id" INTEGER,
	"appointment_id" INTEGER,
	"amount" DECIMAL(10,2),
	"payment_method" VARCHAR(20),
	"payment_date" TIMESTAMP,
	PRIMARY KEY("history_id")
);


CREATE TABLE "availability" (
	"availability_id" SERIAL NOT NULL UNIQUE,
	" stylist_id " INTEGER,
	"date" DATE,
	"start_time" TIME,
	"end_time " TIME,
	"created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	"updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("availability_id")
);


CREATE TABLE "notifications" (
	"notification_id" SERIAL NOT NULL UNIQUE,
	"client_id" INTEGER NOT NULL,
	"message" TEXT(65535) NOT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"read_status" BOOLEAN NOT NULL,
	PRIMARY KEY("notification_id")
);


CREATE TABLE "stylist" (
	"stylist_id" SERIAL NOT NULL UNIQUE,
	"salon_id" INTEGER NOT NULL,
	"name" VARCHAR(100) NOT NULL,
	"specialty" VARCHAR(100) NOT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("stylist_id")
);


CREATE TABLE "canceled_bookings" (
	"canceled_id" SERIAL NOT NULL UNIQUE,
	"appointment_id" INTEGER NOT NULL,
	"cancellation_reason" TEXT(65535) NOT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("canceled_id")
);


CREATE TABLE "service_categories" (
	"category_id" SERIAL NOT NULL UNIQUE,
	"salon_id" INTEGER NOT NULL,
	"category_name" VARCHAR(100) NOT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("category_id")
);


CREATE TABLE "promotions" (
	"promotion_id" SERIAL NOT NULL UNIQUE,
	"salon_id" INTEGER NOT NULL,
	"promotion_code" VARCHAR(50) NOT NULL UNIQUE,
	-- CHECK (discount_percentage BETWEEN 0 AND 100)
	"discount_percentage" DECIMAL(5,2) NOT NULL CHECK(discount_percentage BETWEEN 0 AND 100),
	"start_date" TIMESTAMP NOT NULL,
	"end_date" TIMESTAMP NOT NULL,
	"created_at" TIMESTAMP NOT NULL,
	PRIMARY KEY("promotion_id")
);
COMMENT ON COLUMN promotions.discount_percentage IS 'CHECK (discount_percentage BETWEEN 0 AND 100)';


CREATE TABLE "client_preferences" (
	"preference_id" SERIAL NOT NULL UNIQUE,
	"client_id" INTEGER NOT NULL,
	"preferred_stylist_id" INTEGER NOT NULL,
	"preferred_service_id" INTEGER NOT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("preference_id")
);


CREATE TABLE "waitlist" (
	"waitlist_id" SERIAL NOT NULL UNIQUE,
	"client_id" INTEGER NOT NULL,
	"salon_id" INTEGER NOT NULL,
	"service_id" INTEGER NOT NULL,
	"added_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("waitlist_id")
);


CREATE TABLE "specialties" (
	"specialty_id" SERIAL NOT NULL UNIQUE,
	"name" VARCHAR(255) NOT NULL,
	PRIMARY KEY("specialty_id")
);


CREATE TABLE "stylist_specialties" (
	"stylist_id" INTEGER NOT NULL UNIQUE GENERATED BY DEFAULT AS IDENTITY,
	"specialty_id" INTEGER NOT NULL,
	PRIMARY KEY("stylist_id", "specialty_id")
);


CREATE TABLE "user_history" (
	"history_id" SERIAL NOT NULL UNIQUE,
	"user_id" INTEGER,
	"changed_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	"action" VARCHAR(255),
	PRIMARY KEY("history_id")
);


CREATE TABLE "appointment_types" (
	"type_id" SERIAL NOT NULL UNIQUE,
	"name" VARCHAR(255) NOT NULL,
	"duration_minutes" INTEGER NOT NULL,
	PRIMARY KEY("type_id")
);


CREATE TABLE "roles" (
	"role_id" SERIAL NOT NULL UNIQUE,
	"role_name" VARCHAR(255) UNIQUE,
	PRIMARY KEY("role_id")
);


CREATE TABLE "user_roles" (
	"user_id" INTEGER NOT NULL UNIQUE GENERATED BY DEFAULT AS IDENTITY,
	"role_id" INTEGER NOT NULL,
	PRIMARY KEY("user_id", "role_id")
);


CREATE TABLE "salon_management" (
	"management_id" SERIAL NOT NULL UNIQUE,
	"salon_id" INTEGER,
	"staff_count" INTEGER,
	"inventory_value" DECIMAL,
	"operational_hours" VARCHAR(255),
	"created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	"updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("management_id")
);


CREATE TABLE "salon_benefits" (
	"benefit_id" SERIAL NOT NULL UNIQUE,
	"salon_id" INTEGER NOT NULL,
	"benefit_description" TEXT(65535) NOT NULL,
	"start_date" TIMESTAMP NOT NULL,
	"end_date" TIMESTAMP NOT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("benefit_id")
);


CREATE TABLE "salon_statistics" (
	"statistic_id" SERIAL NOT NULL UNIQUE,
	"salon_id" INTEGER NOT NULL,
	"month_year" DATE NOT NULL,
	"total_revenue" DECIMAL NOT NULL,
	"total_appointments" INTEGER NOT NULL,
	"average_rating" DECIMAL NOT NULL,
	"created_at" TIMESTAMP NOT NULL,
	PRIMARY KEY("statistic_id")
);


CREATE TABLE "appointment_statistics" (
	"appointment_statistic_id" SERIAL NOT NULL UNIQUE,
	"appointment_id" INTEGER NOT NULL,
	"client_feedback_score" INTEGER NOT NULL CHECK(CHECK(client_feedback_score BETWEEN 1 AND 5)),
	"created_at" TIMESTAMP NOT NULL,
	PRIMARY KEY("appointment_statistic_id")
);


ALTER TABLE "clients"
ADD FOREIGN KEY("user_id") REFERENCES "users"("user_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "salons"
ADD FOREIGN KEY("user_id") REFERENCES "users"("user_id")
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE "stylist"
ADD FOREIGN KEY("salon_id") REFERENCES "salons"("salon_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "services"
ADD FOREIGN KEY("salon_id") REFERENCES "salons"("salon_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "services"
ADD FOREIGN KEY("category_id") REFERENCES "service_categories"("category_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "appointments"
ADD FOREIGN KEY("client_id") REFERENCES "clients"("client_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "appointments"
ADD FOREIGN KEY("salon_id") REFERENCES "salons"("salon_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "appointments"
ADD FOREIGN KEY("stylist_id") REFERENCES "stylist"("stylist_id")
ON UPDATE NO ACTION ON DELETE SET NULL;
ALTER TABLE "appointments"
ADD FOREIGN KEY("service_id") REFERENCES "services"("service_id")
ON UPDATE NO ACTION ON DELETE SET NULL;
ALTER TABLE "reviews"
ADD FOREIGN KEY("client_id") REFERENCES "clients"("client_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "reviews"
ADD FOREIGN KEY("salon_id") REFERENCES "salons"("salon_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "promotions"
ADD FOREIGN KEY("salon_id") REFERENCES "salons"("salon_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "client_preferences"
ADD FOREIGN KEY("client_id") REFERENCES "clients"("client_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "client_preferences"
ADD FOREIGN KEY("preferred_service_id") REFERENCES "services"("service_id")
ON UPDATE NO ACTION ON DELETE SET NULL;
ALTER TABLE "client_preferences"
ADD FOREIGN KEY("preferred_stylist_id") REFERENCES "stylist"("stylist_id")
ON UPDATE NO ACTION ON DELETE SET NULL;
ALTER TABLE "payment_history"
ADD FOREIGN KEY("client_id") REFERENCES "clients"("client_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "payment_history"
ADD FOREIGN KEY("appointment_id") REFERENCES "appointments"("appointment_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "availability"
ADD FOREIGN KEY(" stylist_id ") REFERENCES "stylist"("stylist_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "notifications"
ADD FOREIGN KEY("client_id") REFERENCES "clients"("client_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "canceled_bookings"
ADD FOREIGN KEY("appointment_id") REFERENCES "appointments"("appointment_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "waitlist"
ADD FOREIGN KEY("client_id") REFERENCES "clients"("client_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "waitlist"
ADD FOREIGN KEY("service_id") REFERENCES "services"("service_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "waitlist"
ADD FOREIGN KEY("salon_id") REFERENCES "salons"("salon_id")
ON UPDATE NO ACTION ON DELETE SET NULL;
ALTER TABLE "stylist_specialties"
ADD FOREIGN KEY("specialty_id") REFERENCES "specialties"("specialty_id")
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE "stylist_specialties"
ADD FOREIGN KEY("stylist_id") REFERENCES "stylist"("stylist_id")
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE "service_categories"
ADD FOREIGN KEY("salon_id") REFERENCES "salons"("salon_id")
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE "user_history"
ADD FOREIGN KEY("user_id") REFERENCES "users"("user_id")
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE "appointments"
ADD FOREIGN KEY("type_id") REFERENCES "appointment_types"("type_id")
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE "user_roles"
ADD FOREIGN KEY("role_id") REFERENCES "roles"("role_id")
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE "user_roles"
ADD FOREIGN KEY("user_id") REFERENCES "users"("user_id")
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE "payments"
ADD FOREIGN KEY("appointment_id") REFERENCES "appointments"("appointment_id")
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE "subscriptions"
ADD FOREIGN KEY("salon_id") REFERENCES "salons"("salon_id")
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE "appointment_statistics"
ADD FOREIGN KEY("appointment_id") REFERENCES "appointments"("appointment_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "salon_benefits"
ADD FOREIGN KEY("salon_id") REFERENCES "salons"("salon_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "salon_statistics"
ADD FOREIGN KEY("salon_id") REFERENCES "salons"("salon_id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "salon_management"
ADD FOREIGN KEY("salon_id") REFERENCES "salons"("salon_id")
ON UPDATE NO ACTION ON DELETE CASCADE;