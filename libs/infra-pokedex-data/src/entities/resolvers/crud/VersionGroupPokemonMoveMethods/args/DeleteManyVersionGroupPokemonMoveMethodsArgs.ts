import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupPokemonMoveMethodsWhereInput } from "../../../inputs/VersionGroupPokemonMoveMethodsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVersionGroupPokemonMoveMethodsArgs {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsWhereInput, {
    nullable: true
  })
  where?: VersionGroupPokemonMoveMethodsWhereInput | undefined;
}
