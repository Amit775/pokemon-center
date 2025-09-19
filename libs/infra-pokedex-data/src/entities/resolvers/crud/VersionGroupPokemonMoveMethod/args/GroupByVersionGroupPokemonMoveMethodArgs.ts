import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupPokemonMoveMethodOrderByWithAggregationInput } from "../../../inputs/VersionGroupPokemonMoveMethodOrderByWithAggregationInput";
import { VersionGroupPokemonMoveMethodScalarWhereWithAggregatesInput } from "../../../inputs/VersionGroupPokemonMoveMethodScalarWhereWithAggregatesInput";
import { VersionGroupPokemonMoveMethodWhereInput } from "../../../inputs/VersionGroupPokemonMoveMethodWhereInput";
import { VersionGroupPokemonMoveMethodScalarFieldEnum } from "../../../../enums/VersionGroupPokemonMoveMethodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVersionGroupPokemonMoveMethodArgs {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodWhereInput, {
    nullable: true
  })
  where?: VersionGroupPokemonMoveMethodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VersionGroupPokemonMoveMethodOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"version_group_id" | "pokemon_move_method_id">;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VersionGroupPokemonMoveMethodScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
