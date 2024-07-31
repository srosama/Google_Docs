NODE_MODULES := ./node_modules
SRC_DIR := ./src
DIST_DIR := ./dist


build: $(NODE_MODULES)
	npm run build

# Start the production server
start: $(NODE_MODULES)
	npm start

# Run in development mode
dev: build
	npm run dev

clean:
	rm -rf $(DIST_DIR)
