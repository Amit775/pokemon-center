import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonItemWhereUniqueInput } from "../../../inputs/PokemonItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonItemArgs {
  @TypeGraphQL.Field(_type => PokemonItemWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemWhereUniqueInput;
}
