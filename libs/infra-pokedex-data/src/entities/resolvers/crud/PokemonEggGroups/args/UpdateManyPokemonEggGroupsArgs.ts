import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEggGroupsUpdateManyMutationInput } from "../../../inputs/PokemonEggGroupsUpdateManyMutationInput";
import { PokemonEggGroupsWhereInput } from "../../../inputs/PokemonEggGroupsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonEggGroupsArgs {
  @TypeGraphQL.Field(_type => PokemonEggGroupsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonEggGroupsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupsWhereInput, {
    nullable: true
  })
  where?: PokemonEggGroupsWhereInput | undefined;
}
