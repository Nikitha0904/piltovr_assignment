"use client"
import React from "react";
import { IoIosBrowsers } from "react-icons/io";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const AboutPage = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-5xl text-center font-semibold mb-6 font-serif mt-20">About SVECW</h1>

            <Card className="mb-8">
                <CardHeader>
                    <h2 className="text-2xl font-bold leading-relaxed ">Empowering women through knowledge and action.</h2>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-gray-700 leading-relaxed ">
                        Shri Vishnu Engineering College For Women is located in Bhimavaram - the central part of Coastal Andhra. The area generally known for its commercial activities has recently established itself as a Center for Academics.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                        The campus is located in Vishnupur which is 3 km from Bhimavaram on Tadepalligudem Road.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                        The campus spreads around 100 acres landscape known for its salubrious climate and presents congenial atmosphere to pursue higher studies.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                        Our infrastructure is vibrant in nature because of constant attempt to maintain pace with the development available. The infrastructure acts as a facilitator for the effective delivery of our curriculum.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                        Apart from the common central facilities the colleges has well-equipped laboratories, lecture halls, drawing and seminar halls etc.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                        The organization provides adequate infrastructural support for all sports activities which provide students physical fitness and personality development in turn cultivate in them sportsman spirit, team spirit, leadership and talent.
                    </p>
                </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-4 font-serif text-center mt-4">Vision, Mission & Values (VMV)</h2>

            <Card className="mb-8">
                <CardHeader>
                    <h3 className="text-xl font-bold mb-2 font-serif">Vision</h3>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Transform the society through excellence in Education, Community empowerment and sustained Environmental protection.
                    </p>
                </CardContent>
            </Card>

            <Card className="mb-8">
                <CardHeader>
                    <h3 className="text-xl font-bold mb-2 font-serif">Mission</h3>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc">
                        <li className="flex items-start mb-2">
                            <IoIosBrowsers className="text-yellow-500 flex-shrink-0 mr-2" />
                            <p className="text-lg text-gray-700 leading-relaxed">To achieve Academic excellence through innovative learning practices</p>
                        </li>
                        <li className="flex items-start mb-2">
                            <IoIosBrowsers className="text-yellow-500 flex-shrink-0 mr-2" />
                            <p className="text-lg text-gray-700 leading-relaxed">To instill self confidence among rural students by supplementing with co-curricular and extra-curricular activities</p>
                        </li>
                        <li className="flex items-start mb-2">
                            <IoIosBrowsers className="text-yellow-500 flex-shrink-0 mr-2" />
                            <p className="text-lg text-gray-700 leading-relaxed">To inculcate discipline and values among students</p>
                        </li>
                        <li className="flex items-start mb-2">
                            <IoIosBrowsers className="text-yellow-500 flex-shrink-0 mr-2" />
                            <p className="text-lg text-gray-700 leading-relaxed">To establish centers for Institute Industry partnership</p>
                        </li>
                        <li className="flex items-start mb-2">
                            <IoIosBrowsers className="text-yellow-500 flex-shrink-0 mr-2" />
                            <p className="text-lg text-gray-700 leading-relaxed">To extend financial assistance for the economically weaker sections</p>
                        </li>
                        <li className="flex items-start mb-2">
                            <IoIosBrowsers className="text-yellow-500 flex-shrink-0 mr-2" />
                            <p className="text-lg text-gray-700 leading-relaxed">To create self employment opportunities and skill up gradation</p>
                            </li>
                        <li className="flex items-start mb-2">
                            <IoIosBrowsers className="text-yellow-500 flex-shrink-0 mr-2" />
                            <p className="text-lg text-gray-700 leading-relaxed">To support environment friendly yellow Practices</p>
                        </li>
                        <li className="flex items-start mb-2">
                            <IoIosBrowsers className="text-yellow-500 flex-shrink-0 mr-2" />
                            <p className="text-lg text-gray-700 leading-relaxed">Creating innovation hubs</p>
                        </li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <h3 className="text-xl font-bold mb-2 font-serif">Values</h3>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc">
                        <li className="flex items-start mb-2">
                            <IoIosBrowsers className="text-yellow-500 flex-shrink-0 mr-2" />
                            <p className="text-lg text-gray-700 leading-relaxed">We strive for excellence in all that we do in order to model success for our students</p>
                        </li>
                        <li className="flex items-start mb-2">
                            <IoIosBrowsers className="text-yellow-500 flex-shrink-0 mr-2" />
                            <p className="text-lg text-gray-700 leading-relaxed">We focus on students success and satisfaction and meeting the needs of the community</p>
                        </li>
                        <li className="flex items-start mb-2">
                            <IoIosBrowsers className="text-yellow-500 flex-shrink-0 mr-2" />
                            <p className="text-lg text-gray-700 leading-relaxed">We take pride in the quality of our organization and work, and we value, originality, integrity, consistency, and attention to detail</p>
                        </li>
                        <li className="flex items-start mb-2">
                            <IoIosBrowsers className="text-yellow-500 flex-shrink-0 mr-2" />
                            <p className="text-lg text-gray-700 leading-relaxed">We stay abreast of ever-changing youth culture, emerging communication technologies and design trends</p>
                        </li>
                        <li className="flex items-start mb-2">
                            <IoIosBrowsers className="text-yellow-500 flex-shrink-0 mr-2" />
                            <p className="text-lg text-gray-700 leading-relaxed">We set benchmarks and model high quality standards for students, faculty, staff, and community partners</p>
                        </li>
                        <li className="flex items-start mb-2">
                            <IoIosBrowsers className="text-yellow-500 flex-shrink-0 mr-2" />
                            <p className="text-lg text-gray-700 leading-relaxed">We lay utmost importance on discipline, punctuality, personal values and healthy practices</p>
                        </li>
                        <li className="flex items-start mb-2">
                            <IoIosBrowsers className="text-yellow-500 flex-shrink-0 mr-2" />
                            <p className="text-lg text-gray-700 leading-relaxed">We create an innovative environment for students and staff to develop an integrated personality</p>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
};

export default AboutPage;
