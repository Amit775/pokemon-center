import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupPokemonMoveMethodWhereUniqueInput } from "../../../inputs/VersionGroupPokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueVersionGroupPokemonMoveMethodArgs {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodWhereUniqueInput;
}
