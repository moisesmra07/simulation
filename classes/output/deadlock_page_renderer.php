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

namespace mod_simulation\output;

use plugin_renderer_base;
 
defined('MOODLE_INTERNAL') || die();
 
class deadlock_page_renderer extends plugin_renderer_base {
 
    public function render_deadlock_page($select, $sli_url, $sli, $ms_url, $ms, $dm_url, $dm, $ar_url, $ar) {
        global $OUTPUT;
 
        $data = array(
            'select' => $select,
            'sli_url' => $sli_url,
            'sli' => $sli,
            'ms_url' => $ms_url,
            'ms' => $ms,
            'dm_url' => $dm_url,
            'dm' => $dm,
            'ar_url' => $ar_url,
            'ar' => $ar
        );
        $content = $OUTPUT->render_from_template('simulation/deadlock', $data);
 
        return $content;
    }
}