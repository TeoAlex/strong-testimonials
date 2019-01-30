<?php
// Indicate if template not found; for example, after switching themes or deactivating add-ons.
/* translators: On the Views admin screen. */
?>
<?php if ( ! $template_found ) : ?>
	<ul class="radio-list template-list">
		<li>
			<div>
				<input class="error" type="radio" id="<?php esc_attr( $view['template'] ); ?>" name="view[data][<?php esc_attr( $current_mode ); ?>]" value="<?php esc_attr( $view['template'] ); ?>" checked>
				<label for="<?php esc_attr( $view['template'] ); ?>">
					<?php echo esc_html( $view['template'] ); ?>
				</label>
			</div>
			<div class="template-description">
				<p>
					<span class="dashicons dashicons-warning error"></span>&nbsp;
					<span class="error"><?php esc_html_e( 'not found', 'strong-testimonials' ); ?></span>
				</p>
				<?php // TODO Explain: Add template key and explain this could be due to switching themes or deactivating a template plugin. It's OK to leave this setting as is if testing or troubleshooting. ?>
			</div>
		</li>
	</ul>
	<?php
endif;
