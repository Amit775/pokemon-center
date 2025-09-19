import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonWhereInput } from "../../inputs/PokemonWhereInput";

@TypeGraphQL.ArgsType()
export class PokemonSpeciesCountPokemonArgs {
  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  where?: PokemonWhereInput | undefined;
}
