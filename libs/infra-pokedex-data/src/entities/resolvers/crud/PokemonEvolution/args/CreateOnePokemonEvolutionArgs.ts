import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEvolutionCreateInput } from "../../../inputs/PokemonEvolutionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonEvolutionArgs {
  @TypeGraphQL.Field(_type => PokemonEvolutionCreateInput, {
    nullable: false
  })
  data!: PokemonEvolutionCreateInput;
}
