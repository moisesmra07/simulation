<?php
// This file is part of Moodle - https://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <https://www.gnu.org/licenses/>.

/**
 * Plugin strings are defined here.
 *
 * @package     mod_simulation
 * @category    string
 * @copyright   2024 Moises Rodriguez <mrdguezalvz@gmail.com>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

//strings generales
$string['simulation:newmanagefiles'] = 'New Manage Files';
$string['simulationname'] ='Simulation Name';
$string['modulenameplural'] = 'Simulations';
$string['simulation_help'] = 'Help';
$string['mod_simulation'] = 'Mod Simulation';
$string['simulationsettings'] = 'Simulation Settings';
$string['simulationfieldset'] = 'Simulation Field Set';
$string['pluginadministration'] = 'Plugin Administration';

$string['pluginname'] = 'Simulation';
$string['modulename'] = 'Simulation';
$string['hello'] = 'Hello';
$string['invitado'] = 'Hello, please log in';
$string['intro'] = 'Select the topic you want to simulate:';
$string['gest_interbloqueo'] = 'Deadlock Management';
$string['gest_memoria'] = 'Memory Management';
$string['explore'] = 'Explore';

//strings para deadlock.html
$string['datos_interbloqueo'] = 'Enter the number of Processes and Resources:';
$string['procesos'] = 'Processes';
$string['recursos'] = 'Resources';
$string['select_algoritmo_interbloqueo'] = 'Select the type of algorithm to generate the matrices:';
$string['sli'] = 'Deadlock <br> Free Sequence';
$string['ms'] = 'Request <br> Matrix';
$string['dm'] = 'Minimum <br> Availability';
$string['ar'] = 'Resource <br> Appropriation';
$string['view'] = 'Display Matrices';
$string['read'] = 'Read Data';
$string['matrizA'] = 'Assignment Matrix:';
$string['matrizS'] = 'Request Matrix:';
$string['vectorD'] = 'Availability Vector:';
$string['vectorE'] = 'Existence Vector:';
$string['secuenciaP'] = 'Processes Sequence:';
$string['complete'] = 'Complete with the data necessary for the simulation:';
$string['simular_int'] = 'Simulate algorithm';
$string['mostrar_results'] = 'Show results';

//strings para memory.html
$string['cartelMV'] = 'Virtual Memory:';
$string['cartelMF'] = 'Physical Memory:';
$string['cartelRP'] = 'Page Replacement:';
$string['MV'] = 'Virtual Memory Size';
$string['MF'] = 'Physical Memory Size';
$string['CP'] = 'Number of pages';
$string['CM'] = 'Number of frames';
$string['TP'] = 'Page size';
$string['TM'] = 'Frame size';
$string['DL'] = 'Logical Addresses';
$string['DF'] = 'Physical Addresses';
$string['numpag'] = '# of pages';
$string['nummarco'] = '# of frames';
$string['desplV'] = 'Displacement';
$string['desplF'] = 'Displacement';
$string['cantP'] = 'Number of requests';
$string['tiempo'] = 'Initial instant of time';
$string['select_algoritmo'] = 'Select page replacement algorithm:';
$string['calcular'] = 'Calculate';
$string['simular_reemplazo'] = 'Simulate replacement';
$string['elegir'] = 'Choose...';
$string['peticiones'] = 'requests';
