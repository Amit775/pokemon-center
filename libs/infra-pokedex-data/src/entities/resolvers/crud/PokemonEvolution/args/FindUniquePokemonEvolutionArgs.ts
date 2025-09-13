import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEvolutionWhereUniqueInput } from "../../../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonEvolutionArgs {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;
}
