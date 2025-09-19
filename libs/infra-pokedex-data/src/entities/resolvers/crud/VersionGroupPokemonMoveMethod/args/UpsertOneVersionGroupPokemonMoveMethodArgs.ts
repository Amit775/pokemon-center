import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupPokemonMoveMethodCreateInput } from "../../../inputs/VersionGroupPokemonMoveMethodCreateInput";
import { VersionGroupPokemonMoveMethodUpdateInput } from "../../../inputs/VersionGroupPokemonMoveMethodUpdateInput";
import { VersionGroupPokemonMoveMethodWhereUniqueInput } from "../../../inputs/VersionGroupPokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneVersionGroupPokemonMoveMethodArgs {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodCreateInput, {
    nullable: false
  })
  create!: VersionGroupPokemonMoveMethodCreateInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodUpdateInput, {
    nullable: false
  })
  update!: VersionGroupPokemonMoveMethodUpdateInput;
}
