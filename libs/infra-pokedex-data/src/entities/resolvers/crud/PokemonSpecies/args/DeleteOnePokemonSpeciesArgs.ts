import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonSpeciesWhereUniqueInput } from "../../../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePokemonSpeciesArgs {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;
}
