import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveMethodsWhereUniqueInput } from "../../../inputs/PokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonMoveMethodsOrThrowArgs {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveMethodsWhereUniqueInput;
}
