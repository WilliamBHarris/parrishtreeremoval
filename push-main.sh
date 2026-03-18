#!/bin/bash
set -e

PROJECT_ROOT="/Users/will/Desktop/parrish-tree-service"
SOURCE_BRANCH="main"

cd "$PROJECT_ROOT"

echo "Switching to $SOURCE_BRANCH..."
git checkout "$SOURCE_BRANCH"

git add .

if git diff --cached --quiet; then
  echo "No staged changes to commit."
else
  read -p "Commit message: " COMMIT_MESSAGE
  git commit -m "$COMMIT_MESSAGE"
fi

echo "Pushing $SOURCE_BRANCH..."
git push

echo "Done. Source branch updated."