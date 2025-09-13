import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from "../../../inputs/VersionGroupPokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueVersionGroupPokemonMoveMethodsOrThrowArgs {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodsWhereUniqueInput;
}
