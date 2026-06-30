<?php

test('returns a successful response', function () {
    $this->get(route('home'))->assertOk();
});

test('welcome page contains luxury landing sections', function () {
    $source = file_get_contents(resource_path('js/pages/welcome.tsx'));

    expect($source)
        ->toContain('Live the Extraordinary')
        ->toContain('Our Homes')
        ->toContain('Let\'s Craft Your Next Holiday');
});
