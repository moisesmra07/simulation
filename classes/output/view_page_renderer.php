<?php
// This file is part of Moodle - http://moodle.org/
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
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Version metadata for the mod_simulation plugin.
 *
 * @package   mod_simulation
 * @copyright 2024, Moises Rodriguez <mrdguezalvz@gmail.com>
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace mod_simulation\output;

use plugin_renderer_base;

defined('MOODLE_INTERNAL') || die();

class view_page_renderer extends plugin_renderer_base {

    public function render_home_page($intro, $deadlock, $deadlock_url, $explore1, $memory, $memory_url, $explore2) {
        global $OUTPUT;

        $data = array(
            'intro' => $intro,
            'gest_interbloqueo' => $deadlock,
            'deadlock_url' => $deadlock_url,
            'explore' => $explore1,
            'gest_memoria' => $memory,
            'memory_url' => $memory_url,
            'explore' => $explore2
        );
        $content = $OUTPUT->render_from_template('simulation/home', $data);

        return $content;
    }
}