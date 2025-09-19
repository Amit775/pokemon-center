import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupPokemonMoveMethodWhereInput } from "../../inputs/VersionGroupPokemonMoveMethodWhereInput";

@TypeGraphQL.ArgsType()
export class VersionGroupCountVersionGroupPokemonMoveMethodsArgs {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodWhereInput, {
    nullable: true
  })
  where?: VersionGroupPokemonMoveMethodWhereInput | undefined;
}
