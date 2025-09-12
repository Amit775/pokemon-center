import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupPokemonMoveMethodsCreateInput } from "../../../inputs/VersionGroupPokemonMoveMethodsCreateInput";
import { VersionGroupPokemonMoveMethodsUpdateInput } from "../../../inputs/VersionGroupPokemonMoveMethodsUpdateInput";
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from "../../../inputs/VersionGroupPokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneVersionGroupPokemonMoveMethodsArgs {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsCreateInput, {
    nullable: false
  })
  create!: VersionGroupPokemonMoveMethodsCreateInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsUpdateInput, {
    nullable: false
  })
  update!: VersionGroupPokemonMoveMethodsUpdateInput;
}
