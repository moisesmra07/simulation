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
 * Display information about all the mod_simulation modules in the requested course.
 *
 * @package     mod_simulation
 * @copyright   2024 Moises Rodriguez <mrdguezalvz@gmail.com>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

require(__DIR__.'/../../config.php');

require_once(__DIR__.'/lib.php');

$context = context_system::instance();
$PAGE->set_context($context);
$PAGE->set_url(new moodle_url('/mod/simulation/memory.php'));
$PAGE->set_pagelayout('standard');
$PAGE->set_title(get_string('pluginname', 'mod_simulation'));
$PAGE->set_heading(get_string('gest_memoria', 'mod_simulation'));


$renderer = $PAGE->get_renderer('mod_simulation', 'memory_page');

// Carga de datos necesarios para renderizar el template Mustache

$data = array(
    'cartelMV' => get_string('cartelMV', 'mod_simulation'),
    'MV' => get_string('MV', 'mod_simulation'),
    'CP' => get_string('CP', 'mod_simulation'),
    'TP' => get_string('TP', 'mod_simulation'),
    'DL' => get_string('DL', 'mod_simulation'),
    'numpag' => get_string('numpag', 'mod_simulation'),
    'desplV' => get_string('desplV', 'mod_simulation'),
    'calcular' => get_string('calcular', 'mod_simulation'),
    'cartelMF' => get_string('cartelMF', 'mod_simulation'),
    'MF' => get_string('MF', 'mod_simulation'),
    'CM' => get_string('CM', 'mod_simulation'),
    'TM' => get_string('TM', 'mod_simulation'),
    'DF' => get_string('DF', 'mod_simulation'),
    'nummarco' => get_string('nummarco', 'mod_simulation'),
    'desplF' => get_string('desplF', 'mod_simulation'),
    'calcular' => get_string('calcular', 'mod_simulation'),
    'replace' => new moodle_url('/mod/simulation/replace.php', array('id' => $cm->id)),
    'simular_reemplazo' => get_string('simular_reemplazo', 'mod_simulation')
);

echo $OUTPUT->header();
echo $OUTPUT->render_from_template('simulation/memory', $data);
echo $OUTPUT->footer();
