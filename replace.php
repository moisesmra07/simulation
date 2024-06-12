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
$PAGE->set_heading(get_string('simular_reemplazo', 'mod_simulation'));


$renderer = $PAGE->get_renderer('mod_simulation', 'replace_page');

// Carga de datos necesarios para renderizar el template Mustache

$data = array(
    'select' => get_string('select_algoritmo', 'mod_simulation'),
    'elegir' => get_string('elegir', 'mod_simulation'),
    'simular' => get_string('simular_reemplazo', 'mod_simulation')
);

echo $OUTPUT->header();
echo $OUTPUT->render_from_template('simulation/replace', $data);
echo $OUTPUT->footer();
