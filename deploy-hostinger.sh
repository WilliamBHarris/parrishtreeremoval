#!/bin/bash
set -e

PROJECT_ROOT="/Users/will/Desktop/parrish-tree-service"
TEMP_BUILD="/tmp/parrish-live-build"
DEPLOY_BRANCH="hostinger-live"
SOURCE_BRANCH="main"

cd "$PROJECT_ROOT"

echo "Switching to $SOURCE_BRANCH..."
git checkout "$SOURCE_BRANCH"

echo "Building site..."
npm run build

echo "Preparing temporary build copy..."
rm -rf "$TEMP_BUILD"
mkdir -p "$TEMP_BUILD"
cp -R dist/. "$TEMP_BUILD/"

echo "Switching to $DEPLOY_BRANCH..."
git checkout "$DEPLOY_BRANCH"

echo "Replacing deploy branch contents..."
git rm -rf . || true
cp -R "$TEMP_BUILD/." .

echo "Committing deploy build..."
git add .
git commit -m "Deploy latest build" || echo "No changes to commit"

echo "Pushing deploy branch..."
git push

echo "Switching back to $SOURCE_BRANCH..."
git checkout "$SOURCE_BRANCH"

echo "Done. Hostinger live branch has been updated."