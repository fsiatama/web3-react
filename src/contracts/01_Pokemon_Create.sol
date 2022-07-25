// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract PokemonFactory {
    event PokemonCreated(address sender, uint256 _id, string _name);

    struct Ability {
        string name;
        string description;
    }

    struct Pokemon {
        uint256 id;
        string name;
        address payable creator;
    }

    Pokemon[] private pokemons;

    mapping(uint256 => address) public pokemonToOwner;
    mapping(uint256 => Ability[]) public abilities;
    mapping(address => uint256) ownerPokemonCount;

    modifier isCreator(uint256 pokemonIndex) {
        require(
            pokemons[pokemonIndex].creator == msg.sender,
            "You need to be the pokemon creator"
        );
        _;
    }

    function createPokemon(string memory _name, uint256 _id) public {
        require(bytes(_name).length > 2, "Invalid pokemon name");
        require(_id > 0, "Invalid pokemon ID");

        pokemons.push(Pokemon(_id, _name, payable(msg.sender)));
        pokemonToOwner[_id] = msg.sender;
        ownerPokemonCount[msg.sender]++;

        emit PokemonCreated(msg.sender, _id, _name);
    }

    function createAbility(
        uint256 pokemonIndex,
        string memory abilityName,
        string memory abilityDescription
    ) public isCreator(pokemonIndex) {
        abilities[pokemonIndex].push(Ability(abilityName, abilityDescription));
    }

    function getAllPokemons() public view returns (Pokemon[] memory) {
        return pokemons;
    }

    function getAllPokemonAbilities(uint256 pokemonIndex)
        public
        view
        returns (Ability[] memory)
    {
        return abilities[pokemonIndex];
    }

    function getResult() public pure returns (uint256 product, uint256 sum) {
        uint256 a = 1;
        uint256 b = 2;
        product = a * b;
        sum = a + b;
    }
}
