<?php
/**
 * Plugin activation and upgrade.
 *
 * @package Strong_Testimonials
 */

function wpmtst_default_settings() {

	$old_plugin_version     = get_option( 'wpmtst_plugin_version' );
	$plugin_data            = get_plugin_data( dirname( dirname( dirname( __FILE__ ) ) ) . '/strong-testimonials.php', false );
	$plugin_version         = $plugin_data['Version'];

	if ( $old_plugin_version == $plugin_version )
		return;

	delete_option( 'wpmtst_cycle' );

	// -1- DEFAULTS
	include_once WPMTST_INC . 'defaults.php';
	$default_options       = wpmtst_get_default_options();
	$default_fields        = wpmtst_get_default_fields();
	$default_forms         = wpmtst_get_default_forms();
	$default_form_options  = wpmtst_get_default_form_options();
	$default_view_options  = wpmtst_get_default_view_options();
	$default_view          = wpmtst_get_default_view();
	$default_l10n_contexts = wpmtst_get_default_l10n_contexts();

	// -2- GET OPTIONS
	$options = get_option( 'wpmtst_options' );
	if ( ! $options ) {
		// -2A- NEW ACTIVATION
		update_option( 'wpmtst_options', $default_options );
	}
	else {
		// -2B- UPDATE

		// Remove version 1 options
		if ( isset( $options['captcha'] ) )
			unset( $options['captcha'] );

		if ( isset( $options['plugin_version'] ) )
			unset( $options['plugin_version'] );

		if ( isset( $options['per_page'] ) )
			unset( $options['per_page'] );

		if ( isset( $options['load_page_style'] ) )
			unset( $options['load_page_style'] );

		if ( isset( $options['load_widget_style'] ) )
			unset( $options['load_widget_style'] );

		if ( isset( $options['load_form_style'] ) )
			unset( $options['load_form_style'] );

		if ( isset( $options['load_rtl_style'] ) )
			unset( $options['load_rtl_style'] );

		if ( isset( $options['shortcode'] ) )
			unset( $options['shortcode'] );

		if ( isset( $options['default_template'] ) )
			unset( $options['default_template'] );

		if ( isset( $options['client_section'] ) )
			unset( $options['client_section'] );

		// Merge in new options
		$options = array_merge( $default_options, $options );
		update_option( 'wpmtst_options', $options );
	}

	// -3- GET FIELDS
	$fields = get_option( 'wpmtst_fields', array() );
	if ( ! $fields ) {
		// -3A- NEW ACTIVATION
		update_option( 'wpmtst_fields', $default_fields );
		// WPML
		//wpmtst_form_fields_wpml( $default_fields['field_groups']['custom']['fields'] );
	}
	else {
		// -3B- UPDATE

		// ----------
		// field base
		// ----------
		$new_field_base = array_merge( $default_fields['field_base'], $fields['field_base'] );

		// -----------
		// field types
		// -----------
		$new_field_types = $fields['field_types'];
		// convert url and email to HTML5 types
		// @since 1.24.0
		foreach ( $new_field_types['custom'] as $field_name => $field_atts ) {
			if ( 'email' == $field_name ) {
				$new_field_types['custom'][$field_name]['input_type']   = 'email';
				$new_field_types['custom'][$field_name]['option_label'] = 'email';
			} elseif ( 'url' == $field_name ) {
				$new_field_types['custom'][$field_name]['input_type']   = 'url';
				$new_field_types['custom'][$field_name]['option_label'] = 'url';
			}
		}

		// first check for new default types like "optional"
		foreach ( $default_fields['field_types'] as $type_name => $type_array ) {
			if ( ! isset( $new_field_types[ $type_name ] ) ) {
				$new_field_types[ $type_name ] = $type_array;
			}
		}
		// now update existing types like "post" and "custom"
		foreach ( $new_field_types as $type_name => $type_array ) {
			foreach ( $type_array as $field_name => $field_atts ) {
				$new_field_types[ $type_name ][ $field_name ] = array_merge( $default_fields['field_types'][ $type_name ][ $field_name ], $field_atts );
			}
		}

		// ------------
		// field_groups
		// ------------
		if ( isset( $fields['field_groups'] ) ) {
			// move to new option and update next
			update_option( 'wpmtst_forms', $fields['field_groups'] );
			unset( $fields['field_groups'] );
		}

		// Re-assemble fields and save.
		$fields['field_base']   = $new_field_base;
		$fields['field_types']  = $new_field_types;
		update_option( 'wpmtst_fields', $fields );
	}

	// -4- GET FORMS
	$forms = get_option( 'wpmtst_forms' );
	if ( !$forms ) {
		update_option( 'wpmtst_forms', $default_forms );
	}
	else {
		//TODO Change group_name to form_name
		foreach ( $forms as $group_name => $group_array ) {
			// custom fields are in display order (not associative)
			// so we must find them by name
			foreach ( $group_array['fields'] as $key => $new_field ) {
				$updated_default = null;
				foreach ( $default_forms['default']['fields'] as $a_field ) {
					if ( $a_field['name'] == $new_field['name'] ) {
						$updated_default = $a_field;
						break;
					}
				}
				if ( $updated_default ) {
					$new_forms[ $group_name ]['fields'][ $key ] = array_merge( $updated_default, $new_field );
				}
			}
		}
		update_option( 'wpmtst_forms', $forms );
		// WPML
		wpmtst_form_fields_wpml( $forms['custom']['fields'] );
	}


	/**
	 * -5- GET FORM OPTIONS
	 *
	 * @since 1.13
	 */
	$form_options = get_option( 'wpmtst_form_options', array() );
	if ( ! $form_options ) {
		// -5A- NEW ACTIVATION
		$form_options = $default_form_options;

		// -5B- MOVE EXISTING OPTIONS
		if ( isset( $options['admin_notify'] ) ) {
			$form_options['admin_notify']    = $options['admin_notify'];
			$form_options['admin_email']     = $options['admin_email'];
			$form_options['captcha']         = $options['captcha'];
			$form_options['honeypot_before'] = $options['honeypot_before'];
			$form_options['honeypot_after']  = $options['honeypot_after'];

			unset( $options['admin_notify'] );
			unset( $options['admin_email'] );
			unset( $options['captcha'] );
			unset( $options['honeypot_before'] );
			unset( $options['honeypot_after'] );
			update_option( 'wpmtst_options', $options );
		}

		update_option( 'wpmtst_form_options', $form_options );
		// WPML
		wpmtst_form_messages_wpml( $form_options['messages'] );
		wpmtst_form_options_wpml( $form_options );
	}
	else {
		// -5C- UPDATE
		/**
		 * Update single email recipient to multiple.
		 *
		 * @since 1.18
		 */
		$recipients = array(
			array(
				'admin_name'       => isset( $form_options['admin_name'] ) ? $form_options['admin_name'] : '',
				'admin_site_email' => isset( $form_options['admin_site_email'] ) ? $form_options['admin_site_email'] : 1,
				'admin_email'      => isset( $form_options['admin_email'] ) ? $form_options['admin_email'] : '',
				'primary'          => 1,  // cannot be deleted
			),
		);
		$form_options['recipients'] = $recipients;

		unset( $form_options['admin_name'] );
		unset( $form_options['admin_site_email'] );
		unset( $form_options['admin_email'] );

		// Merge in new options
		$form_options = array_merge( $default_form_options, $form_options );
		update_option( 'wpmtst_form_options', $form_options );
		// WPML
		wpmtst_form_messages_wpml( $form_options['messages'] );
		wpmtst_form_options_wpml( $form_options );
	}

	/**
	 * -6- GET VIEW OPTIONS
	 */
	$view_options = get_option( 'wpmtst_view_options' );
	if ( ! $view_options ) {
		// -6A- NEW ACTIVATION
		update_option( 'wpmtst_view_options', $default_view_options );
	}
	else {
		// -6B- UPDATE
		// Merge in new options
		$view_options = array_merge( $default_view_options, $view_options );
		update_option( 'wpmtst_view_options', $view_options );
	}

	/**
	 * -7- VIEWS
	 */
	$current_default_view = get_option( 'wpmtst_view_default' );

	if ( !$current_default_view ) {

		// -7A- NEW ACTIVATION
		update_option( 'wpmtst_view_default', $default_view );

	}
	else {

		// -7B- UPDATE

		// Remove any options that have new default settings
		unset( $current_default_view['template'], $current_default_view['background'] );

		$new_default_view = array_merge( $current_default_view, $default_view );
		ksort($new_default_view);
		update_option( 'wpmtst_view_default', $new_default_view );

		/**
		 * Update each View
		 */
		$views = wpmtst_get_views();
		foreach ( $views as $view ) {
			$view_data = unserialize( $view['value'] );
			if ( !is_array( $view_data ) )
				continue;

			// Change default template from empty to 'default:{type}'
			if ( !$view_data['template'] ) {
				if ( 'form' == $view_data['mode'] )
					$type = 'form';
				else
					$type = 'content'; // list or slideshow

				$view_data['template'] = "default:$type";
			}
			else {
				// Convert name; e.g. 'simple/testimonials.php'
				if ( 'widget/testimonials.php' == $view_data['template'] ) {
					$view_data['template'] = 'default:widget';
				}
				else {
					$view_data['template'] = str_replace( '/', ':', $view_data['template'] );
					$view_data['template'] = str_replace( 'testimonials.php', 'content', $view_data['template'] );
					$view_data['template'] = str_replace( 'testimonial-form.php', 'form', $view_data['template'] );
				}
			}

			// Convert count value of -1 to 'all'
			if ( -1 == $view_data['count'] ) {
				$view_data['count'] = 1;
				$view_data['all']   = 1;
			}

			// Convert background color
			if ( !is_array( $view_data['background'] ) ) {
				$view_data['background'] = array(
					'color' => $view_data['background'],
					'type'  => 'single',
				);
			}

			// Merge in new default values
			$view['data'] = array_merge( $new_default_view, $view_data );

			// Merge nested arrays individually. Don't use array_merge_recursive.
			$view['data']['background'] = array_merge( $new_default_view['background'], $view_data['background'] );

			wpmtst_save_view( $view );

		} // foreach $view

	}

	/**
	 * -8- GET L10N CONTEXTS
	 */
	$contexts = get_option( 'wpmtst_l10n_contexts' );
	if ( ! $contexts ) {
		// -8A- NEW ACTIVATION
		update_option( 'wpmtst_l10n_contexts', $default_l10n_contexts );
	} else {
		// -8B- UPDATE
		// Merge in new options
		$contexts = array_merge( $default_l10n_contexts, $contexts );
		update_option( 'wpmtst_l10n_contexts', $contexts );
	}

	/**
	 * Update the plugin version.
	 */
	update_option( 'wpmtst_plugin_version', $plugin_version );

	/**
	 * Remove older attempts at admin notices.
	 */
	delete_option( 'wpmtst_admin_notices' );
	delete_option( 'wpmtst_news_flag' );

	/**
	 * Our welcome page
	 */
	$old_parts       = explode( '.', $old_plugin_version );
	$new_parts       = explode( '.', $plugin_version );
	$old_major_minor = implode( '.', array( $old_parts[0], $old_parts[1] ) );
	$new_major_minor = implode( '.', array( $new_parts[0], $new_parts[1] ) );

	if ( version_compare( $new_major_minor, $old_major_minor ) ) {
		//wpmtst_activate_about_page();
	}

}


/**
 * Redirect automatically to the About Page
 */
function wpmtst_redirect_about_page() {
	if ( !current_user_can( 'manage_options' ) )
		return;

	if ( !get_transient( 'wpmtst_about_page_activated' ) )
		return;

	delete_transient( 'wpmtst_about_page_activated' );
	wp_safe_redirect( admin_url( 'edit.php?post_type=wpm-testimonial&page=guide&tab=welcome') );
	exit;
}
