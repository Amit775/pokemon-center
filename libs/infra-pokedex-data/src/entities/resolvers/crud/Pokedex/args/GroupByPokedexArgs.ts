import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexOrderByWithAggregationInput } from "../../../inputs/PokedexOrderByWithAggregationInput";
import { PokedexScalarWhereWithAggregatesInput } from "../../../inputs/PokedexScalarWhereWithAggregatesInput";
import { PokedexWhereInput } from "../../../inputs/PokedexWhereInput";
import { PokedexScalarFieldEnum } from "../../../../enums/PokedexScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokedexArgs {
  @TypeGraphQL.Field(_type => PokedexWhereInput, {
    nullable: true
  })
  where?: PokedexWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokedexOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokedexOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "region_id" | "identifier" | "is_main_series">;

  @TypeGraphQL.Field(_type => PokedexScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokedexScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
