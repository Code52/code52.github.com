require "rack/jekyll"
require "rack/rewrite"

use Rack::Rewrite do
  #rewrite %r{/(.*)}, '/$1.html', :if => lambda { File.exists?('/$1.html')}
end

run Rack::Jekyll.new