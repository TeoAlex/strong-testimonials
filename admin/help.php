<?php
/**
 * Contextual help.
 */

function wpmtst_help_fields_editor() {

	$content = '<p>' . __( 'These fields let you customize your testimonials to gather the information you need.', 'strong-testimonials' ) . '</p>';

	$content .= '<p>' . __( 'This editor serves two purposes: (1) to modify the form as it appears on your site, and (2) to modify the custom fields added to each testimonial.', 'strong-testimonials' ) . '</p>';

	$content .= '<p>' . __( 'The default fields are designed to fit most situations. You can quickly add or remove fields and change several display properties.', 'strong-testimonials' ) . '</p>';

	$content .= '<p>';
	$content .= __( 'Fields will appear in this order on the form.', 'strong-testimonials' ) . '&nbsp;';
	$content .= sprintf( __( 'Reorder by grabbing the %s icon.', 'strong-testimonials' ), '<span class="dashicons dashicons-menu"></span>' );
	$content .= '</p>';

	$content .= '<p>' . __( 'To display this form, create a view and select Form mode.', 'strong-testimonials' ) . '</p>';

	// Links

	$links = array(
		'<a href="https://support.strongplugins.com/article/complete-example-customizing-form/" target="_blank">' . __( 'Tutorial', 'strong-testimonials' ) . '</a>',
		'<a href="' . admin_url( 'edit.php?post_type=wpm-testimonial&page=testimonial-settings&tab=form' ) . '">' . __( 'Form settings', 'strong-testimonials' ) . '</a>'
	);

	$content .= '<p>' . implode( ' | ', $links ) . '</p>';

	get_current_screen()->add_help_tab( array(
		'id'      => 'wpmtst-help',
		'title'   => __( 'Form Fields', 'strong-testimonials' ),
		'content' => $content,
	) );
}
add_action( 'load-wpm-testimonial_page_testimonial-fields', 'wpmtst_help_fields_editor' );


function wpmtst_help_view_editor_pagination() {
    if ( ! isset( $_GET['action'] ) ) {
        return;
    }

	ob_start();
	?>
	<p><?php _e( 'Some of the features and drawbacks for each method.', 'strong-testimonials' ); ?></p>

	<table class="wpmtst-help-tab" cellpadding="0" cellspacing="0">
		<thead>
		<tr>
			<th></th>
			<th><?php _e( 'Simple', 'strong-testimonials' ); ?></th>
			<th><?php _e( 'Standard', 'strong-testimonials' ); ?></th>
		</tr>
		</thead>
		<tbody>
		<tr>
			<td><?php _e( 'best use', 'strong-testimonials' ); ?></td>
			<td><?php _e( 'ten pages or less', 'strong-testimonials' ); ?></td>
			<td><?php _e( 'more than ten pages', 'strong-testimonials' ); ?></td>
		</tr>
		<tr>
			<td><?php _e( 'URLs', 'strong-testimonials' ); ?></td>
			<td><?php _e( 'does not change the URL', 'strong-testimonials' ); ?></td>
			<td><?php _e( 'uses paged URLs just like standard WordPress posts', 'strong-testimonials' ); ?></td>
		</tr>
		<tr>
			<td><?php _e( 'the Back button', 'strong-testimonials' ); ?></td>
			<td><?php _e( 'It does not remember which page of testimonials you are on. If you click away &ndash; for example, on a "Read more" link &ndash; then click back, you will return to page one.', 'strong-testimonials' ); ?></td>
			<td><?php _e( 'You will return the last page you were on so this works well with "Read more" links.', 'strong-testimonials' ); ?></td>
		</tr>
		<tr>
			<td><?php _e( 'works with random order option', 'strong-testimonials' ); ?></td>
			<td><?php _e( 'yes' ); ?></td>
			<td><?php _e( 'no' ); ?></td>
		</tr>
		<tr>
			<td><?php _e( 'works in a widget', 'strong-testimonials' ); ?></td>
			<td><?php _e( 'yes' ); ?></td>
			<td><?php _e( 'no' ); ?></td>
		</tr>
		</tbody>
	</table>
	<?php
	$content = ob_get_clean();

	get_current_screen()->add_help_tab( array(
		'id'      => 'wpmtst-help-pagination',
		'title'   => __( 'Pagination', 'strong-testimonials' ),
		'content' => $content,
	) );
}
add_action( 'load-wpm-testimonial_page_testimonial-views', 'wpmtst_help_view_editor_pagination' );


function wpmtst_help_view_editor_stretch() {
	if ( ! isset( $_GET['action'] ) ) {
		return;
	}

	ob_start();
	?>
	<p><?php _e( 'This setting will set the height of the <b>slideshow container</b> to match the tallest slide in order to keep elements below it from bouncing up and down during slide transitions. With testimonials of uneven length, the result is whitespace underneath the shorter testimonials.', 'strong-testimonials' ); ?></p>
    <p><?php _e( 'Select the <b>Stretch</b> option to stretch the borders and background vertically to compensate.', 'strong-testimonials' ); ?></p>
    <p><?php _e( 'Use the excerpt or abbreviated content if you want to minimize the whitespace.', 'strong-testimonials' ); ?></p>
	<?php
	$content = ob_get_clean();

	get_current_screen()->add_help_tab( array(
		'id'      => 'wpmtst-help-stretch',
		'title'   => __( 'Stretch', 'strong-testimonials' ),
		'content' => $content,
	) );
}
add_action( 'load-wpm-testimonial_page_testimonial-views', 'wpmtst_help_view_editor_stretch' );

function wpmtst_help_view_editor_intro() {
    ob_start();
	?>
    <div class="">
        <p><?php _e( 'A view is simply a group of settings with an easy-to-use editor.', 'strong-testimonials' ); ?>
        <p><?php _e( 'You can create an <strong>unlimited</strong> number of views.', 'strong-testimonials' ); ?></p>
        <p><?php _e( 'For example:', 'strong-testimonials' ); ?></p>
        <ul class="standard">
            <li><?php _e( 'Create a view to display your testimonials in a list, grid, or slideshow.', 'strong-testimonials' ); ?></li>
            <li><?php _e( 'Create a view to show a testimonial submission form', 'strong-testimonials.' ); ?></li>
            <li><?php _e( 'Create a view to append your custom fields to the individual testimonial using your theme single post template.', 'strong-testimonials' ); ?></li>
			<?php do_action( 'wpmtst_views_intro_list' ); ?>
        </ul>
        <p><?php _e( 'Add a view to a page with its unique shortcode or add it to a sidebar with the Strong Testimonials widget.', 'strong-testimonials' ); ?></p>
    </div>
	<?php
	$content = ob_get_clean();

	get_current_screen()->add_help_tab( array(
		'id'      => 'wpmtst-help-views',
		'title'   => __( 'About Views', 'strong-testimonials' ),
		'content' => $content,
	) );
}
add_action( 'load-wpm-testimonial_page_testimonial-views', 'wpmtst_help_view_editor_intro' );
