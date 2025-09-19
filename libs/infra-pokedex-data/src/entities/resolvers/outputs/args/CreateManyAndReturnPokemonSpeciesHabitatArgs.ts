import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonHabitatWhereInput } from "../../inputs/PokemonHabitatWhereInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokemonSpeciesHabitatArgs {
  @TypeGraphQL.Field(_type => PokemonHabitatWhereInput, {
    nullable: true
  })
  where?: PokemonHabitatWhereInput | undefined;
}
