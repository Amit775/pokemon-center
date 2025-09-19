import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEggGroupUpdateManyMutationInput } from "../../../inputs/PokemonEggGroupUpdateManyMutationInput";
import { PokemonEggGroupWhereInput } from "../../../inputs/PokemonEggGroupWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonEggGroupArgs {
  @TypeGraphQL.Field(_type => PokemonEggGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonEggGroupUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupWhereInput, {
    nullable: true
  })
  where?: PokemonEggGroupWhereInput | undefined;
}
