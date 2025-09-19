import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexVersionGroupOrderByWithAggregationInput } from "../../../inputs/PokedexVersionGroupOrderByWithAggregationInput";
import { PokedexVersionGroupScalarWhereWithAggregatesInput } from "../../../inputs/PokedexVersionGroupScalarWhereWithAggregatesInput";
import { PokedexVersionGroupWhereInput } from "../../../inputs/PokedexVersionGroupWhereInput";
import { PokedexVersionGroupScalarFieldEnum } from "../../../../enums/PokedexVersionGroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokedexVersionGroupArgs {
  @TypeGraphQL.Field(_type => PokedexVersionGroupWhereInput, {
    nullable: true
  })
  where?: PokedexVersionGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokedexVersionGroupOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"pokedex_id" | "version_group_id">;

  @TypeGraphQL.Field(_type => PokedexVersionGroupScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokedexVersionGroupScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
