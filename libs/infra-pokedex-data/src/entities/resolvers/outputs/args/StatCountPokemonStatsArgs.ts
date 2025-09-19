import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonStatWhereInput } from "../../inputs/PokemonStatWhereInput";

@TypeGraphQL.ArgsType()
export class StatCountPokemonStatsArgs {
  @TypeGraphQL.Field(_type => PokemonStatWhereInput, {
    nullable: true
  })
  where?: PokemonStatWhereInput | undefined;
}
