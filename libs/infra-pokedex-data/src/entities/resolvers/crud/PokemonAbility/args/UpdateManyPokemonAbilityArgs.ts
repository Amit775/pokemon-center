import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonAbilityUpdateManyMutationInput } from "../../../inputs/PokemonAbilityUpdateManyMutationInput";
import { PokemonAbilityWhereInput } from "../../../inputs/PokemonAbilityWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonAbilityArgs {
  @TypeGraphQL.Field(_type => PokemonAbilityUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonAbilityUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonAbilityWhereInput, {
    nullable: true
  })
  where?: PokemonAbilityWhereInput | undefined;
}
