import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveMethodWhereUniqueInput } from "../../../inputs/PokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonMoveMethodOrThrowArgs {
  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveMethodWhereUniqueInput;
}
