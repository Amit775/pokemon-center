import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonSpeciesUpdateInput } from "../../../inputs/PokemonSpeciesUpdateInput";
import { PokemonSpeciesWhereUniqueInput } from "../../../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonSpeciesArgs {
  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateInput, {
    nullable: false
  })
  data!: PokemonSpeciesUpdateInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;
}
