import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonSpeciesWhereInput } from "../../inputs/PokemonSpeciesWhereInput";

@TypeGraphQL.ArgsType()
export class PokemonHabitatsCountSpeciesArgs {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  where?: PokemonSpeciesWhereInput | undefined;
}
