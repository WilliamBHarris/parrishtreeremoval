#!/bin/bash
set -euo pipefail

PROJECT_ROOT="/Users/will/Desktop/parrish-tree-service"
DEPLOY_BRANCH="hostinger-live"
SOURCE_BRANCH="main"
REMOTE_NAME="origin"
REMOTE_URL="https://github.com/WilliamBHarris/parrishtreeremoval.git"
TEMP_REPO="$(mktemp -d /tmp/parrish-live-build.XXXXXX)"

cleanup() {
  rm -rf "$TEMP_REPO"
}
trap cleanup EXIT

cd "$PROJECT_ROOT"

echo "Switching to $SOURCE_BRANCH..."
git checkout "$SOURCE_BRANCH"

echo "Building site..."
npm run build

echo "Preparing clean deploy repository..."
cp -R dist/. "$TEMP_REPO/"

cd "$TEMP_REPO"
git init -b "$DEPLOY_BRANCH" >/dev/null
git config user.name "Codex Deploy"
git config user.email "deploy@local.invalid"
git add .
git commit -m "Deploy latest build" >/dev/null
git remote add "$REMOTE_NAME" "$REMOTE_URL"
git fetch "$REMOTE_NAME" "$DEPLOY_BRANCH" >/dev/null 2>&1 || true

echo "Force-pushing built output to $DEPLOY_BRANCH..."
git push --force-with-lease "$REMOTE_NAME" "$DEPLOY_BRANCH"

cd "$PROJECT_ROOT"
echo "Done. Hostinger live branch has been updated."
