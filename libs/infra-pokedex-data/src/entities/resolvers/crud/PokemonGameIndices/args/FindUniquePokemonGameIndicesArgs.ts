import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonGameIndicesWhereUniqueInput } from "../../../inputs/PokemonGameIndicesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonGameIndicesArgs {
  @TypeGraphQL.Field(_type => PokemonGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonGameIndicesWhereUniqueInput;
}
