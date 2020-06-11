Write a `SufficTrie` class for a Suffic_Trie_like data structure. The class should have a `root` property set to be the root node of the trie and should support:
    - Creating the trie from a strng; this will be done by calling the `populateSufficTrieForm` method upon class instantiation, which should populate the `root` of the class
    - Searching for strings in the trie

Note that every string added to the trie should end witrh the special `endSymbol` character: `"*"`.