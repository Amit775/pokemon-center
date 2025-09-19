import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormGenerationWhereUniqueInput } from "../../../inputs/PokemonFormGenerationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonFormGenerationArgs {
  @TypeGraphQL.Field(_type => PokemonFormGenerationWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormGenerationWhereUniqueInput;
}
