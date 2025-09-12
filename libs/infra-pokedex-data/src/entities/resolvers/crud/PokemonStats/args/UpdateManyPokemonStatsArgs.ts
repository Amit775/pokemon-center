import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonStatsUpdateManyMutationInput } from "../../../inputs/PokemonStatsUpdateManyMutationInput";
import { PokemonStatsWhereInput } from "../../../inputs/PokemonStatsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonStatsArgs {
  @TypeGraphQL.Field(_type => PokemonStatsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonStatsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonStatsWhereInput, {
    nullable: true
  })
  where?: PokemonStatsWhereInput | undefined;
}
