import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonColorWhereUniqueInput } from "../../../inputs/PokemonColorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonColorArgs {
  @TypeGraphQL.Field(_type => PokemonColorWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonColorWhereUniqueInput;
}
