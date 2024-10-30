<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RemoveWhiteSpacesFromApi
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        // Get the response content
        $content = $response->getContent();

        // Strip leading and trailing whitespace
        $content = trim($content);

        // Remove blank lines
        $content = preg_replace('/^\s*$(?:\r\n|\r|\n)/m', '', $content);
        $content = "1" . $content;

        // Set the modified content back to the response
        $response->setContent($content);

        return $response;
    }
}
