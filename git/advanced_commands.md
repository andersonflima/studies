# Advanced Git Commands

These advanced Git commands are useful for rewriting history, troubleshooting, and collaboration.

1. **Rebase a branch**:
    ```bash
    git rebase <branch-name>
    ```
    Reapplies commits on top of another base branch.

2. **Interactive rebase**:
    ```bash
    git rebase -i HEAD~<number-of-commits>
    ```
    Allows you to interactively rewrite commit history, such as squashing or reordering commits.

3. **Cherry-pick a commit**:
    ```bash
    git cherry-pick <commit-hash>
    ```
    Applies changes from a specific commit into the current branch.

4. **Reset a commit**:
    ```bash
    git reset --soft <commit-hash>
    git reset --hard <commit-hash>
    ```
    Moves the branch pointer to a previous commit. `--soft` keeps changes in the staging area, while `--hard` discards all changes.

5. **Revert a commit**:
    ```bash
    git revert <commit-hash>
    ```
    Creates a new commit that undoes the changes made in the specified commit.

6. **Tagging a release**:
    ```bash
    git tag -a v1.0 -m "Version 1.0"
    git push origin --tags
    ```
    Tags a specific commit with a version number and pushes tags to the remote repository.

7. **Bisect to find a bug**:
    ```bash
    git bisect start
    git bisect bad
    git bisect good <commit-hash>
    ```
    Uses binary search to find the commit that introduced a bug.
