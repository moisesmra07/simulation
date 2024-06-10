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
 * Prints an instance of mod_simulation.
 *
 * @package     mod_simulation
 * @copyright   2024 Moises Rodriguez <mrdguezalvz@gmail.com>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

require(__DIR__.'/../../config.php');
require_once(__DIR__.'/lib.php');

// Course module id.
$id = optional_param('id', 0, PARAM_INT);

// Activity instance id.
$s = optional_param('s', 0, PARAM_INT);

if ($id) {
    $cm = get_coursemodule_from_id('simulation', $id, 0, false, MUST_EXIST);
    $course = $DB->get_record('course', array('id' => $cm->course), '*', MUST_EXIST);
    $moduleinstance = $DB->get_record('simulation', array('id' => $cm->instance), '*', MUST_EXIST);
} else {
    $moduleinstance = $DB->get_record('simulation', array('id' => $s), '*', MUST_EXIST);
    $course = $DB->get_record('course', array('id' => $moduleinstance->course), '*', MUST_EXIST);
    $cm = get_coursemodule_from_instance('simulation', $moduleinstance->id, $course->id, false, MUST_EXIST);
}

require_login($course, true, $cm);

$modulecontext = context_module::instance($cm->id);

$event = \mod_simulation\event\course_module_viewed::create(array(
    'objectid' => $moduleinstance->id,
    'context' => $modulecontext
));
$event->add_record_snapshot('course', $course);
$event->add_record_snapshot('simulation', $moduleinstance);
$event->trigger();

$PAGE->set_url('/mod/simulation/view.php', array('id' => $cm->id));
$PAGE->set_title(format_string($moduleinstance->name));
$PAGE->set_heading(format_string($course->fullname));
$PAGE->set_context($modulecontext);

$renderer = $PAGE->get_renderer('mod_simulation', 'view_page');

// Definir los valores de URL necesarios para el template

$intro = get_string('intro', 'mod_simulation');
$deadlock = get_string('gest_interbloqueo', 'mod_simulation');
$deadlock_url = new moodle_url('/mod/simulation/deadlock.php',array('id' => $cm->id));
$explore1 = get_string('explore', 'mod_simulation');
$memory = get_string('gest_memoria', 'mod_simulation');
$memory_url = new moodle_url('/mod/simulation/memory.php',array('id' => $cm->id));
$explore2 = get_string('explore', 'mod_simulation');


echo $OUTPUT->header();

if (isloggedin()) {
    echo '<h3>' . get_string('hello', 'mod_simulation') . ' ' . fullname($USER) . '</h3>';
    echo $renderer->render_home_page($intro, $deadlock, $deadlock_url, $explore1, $memory, $memory_url, $explore2);

} else {
    echo '<h3>'. get_string('invitado', 'mod_simulation')  .'</h3>';
}

echo $OUTPUT->footer();

//$PAGE->requires->css('/mod/simulation/style.css');
//$PAGE->requires->js('/mod/simulation/script.js');

/*
    $user = $USER; // or any other user object
    $course = $DB->get_record('simulation', ['id' => $simulationid]);
    $context = context_course::instance($course->id); // or any other context
    $roles = get_user_roles($context, $user);

    foreach ($roles as $role) {
        if ($role->shortname == 'student') {
            echo $htmlgen;
        } elseif ($role->shortname == 'editingteacher') {
            echo $htmlgen;
        } elseif ($role->shortname == 'admin') {
            echo $htmlgen;
        }
    }
*/
