import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupPokemonMoveMethodsOrderByWithAggregationInput } from "../../../inputs/VersionGroupPokemonMoveMethodsOrderByWithAggregationInput";
import { VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput } from "../../../inputs/VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput";
import { VersionGroupPokemonMoveMethodsWhereInput } from "../../../inputs/VersionGroupPokemonMoveMethodsWhereInput";
import { VersionGroupPokemonMoveMethodsScalarFieldEnum } from "../../../../enums/VersionGroupPokemonMoveMethodsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVersionGroupPokemonMoveMethodsArgs {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsWhereInput, {
    nullable: true
  })
  where?: VersionGroupPokemonMoveMethodsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VersionGroupPokemonMoveMethodsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"version_group_id" | "pokemon_move_method_id">;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
