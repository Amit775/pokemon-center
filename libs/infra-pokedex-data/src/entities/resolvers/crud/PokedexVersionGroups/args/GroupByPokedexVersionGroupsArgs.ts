import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexVersionGroupsOrderByWithAggregationInput } from "../../../inputs/PokedexVersionGroupsOrderByWithAggregationInput";
import { PokedexVersionGroupsScalarWhereWithAggregatesInput } from "../../../inputs/PokedexVersionGroupsScalarWhereWithAggregatesInput";
import { PokedexVersionGroupsWhereInput } from "../../../inputs/PokedexVersionGroupsWhereInput";
import { PokedexVersionGroupsScalarFieldEnum } from "../../../../enums/PokedexVersionGroupsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokedexVersionGroupsArgs {
  @TypeGraphQL.Field(_type => PokedexVersionGroupsWhereInput, {
    nullable: true
  })
  where?: PokedexVersionGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokedexVersionGroupsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"pokedex_id" | "version_group_id">;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokedexVersionGroupsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
