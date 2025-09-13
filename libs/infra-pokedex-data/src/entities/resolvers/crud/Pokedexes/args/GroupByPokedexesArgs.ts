import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexesOrderByWithAggregationInput } from "../../../inputs/PokedexesOrderByWithAggregationInput";
import { PokedexesScalarWhereWithAggregatesInput } from "../../../inputs/PokedexesScalarWhereWithAggregatesInput";
import { PokedexesWhereInput } from "../../../inputs/PokedexesWhereInput";
import { PokedexesScalarFieldEnum } from "../../../../enums/PokedexesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokedexesArgs {
  @TypeGraphQL.Field(_type => PokedexesWhereInput, {
    nullable: true
  })
  where?: PokedexesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokedexesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokedexesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "region_id" | "identifier" | "is_main_series">;

  @TypeGraphQL.Field(_type => PokedexesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokedexesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
