# Intermediate Git Commands

These commands will help you manage branches, track changes, and work with remote repositories.

1. **Create a new branch**:
    ```bash
    git branch <branch-name>
    ```
    Creates a new branch.

2. **Switch to a branch**:
    ```bash
    git checkout <branch-name>
    ```
    Switches to the specified branch.

3. **Merge branches**:
    ```bash
    git merge <branch-name>
    ```
    Merges the specified branch into the current branch.

4. **Stash changes**:
    ```bash
    git stash
    ```
    Temporarily saves changes that are not ready to be committed.

5. **Apply stashed changes**:
    ```bash
    git stash apply
    ```
    Reapplies the stashed changes.

6. **Pull changes from a remote repository**:
    ```bash
    git pull origin <branch-name>
    ```
    Fetches and merges changes from the remote branch.

7. **Push changes to a remote repository**:
    ```bash
    git push origin <branch-name>
    ```
    Pushes your commits to the specified branch of the remote repository.
