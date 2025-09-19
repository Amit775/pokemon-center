import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryOrderByWithAggregationInput } from "../../../inputs/BerryOrderByWithAggregationInput";
import { BerryScalarWhereWithAggregatesInput } from "../../../inputs/BerryScalarWhereWithAggregatesInput";
import { BerryWhereInput } from "../../../inputs/BerryWhereInput";
import { BerryScalarFieldEnum } from "../../../../enums/BerryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBerryArgs {
  @TypeGraphQL.Field(_type => BerryWhereInput, {
    nullable: true
  })
  where?: BerryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BerryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BerryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "item_id" | "firmness_id" | "natural_gift_power" | "natural_gift_type_id" | "size" | "max_harvest" | "growth_time" | "soil_dryness" | "smoothness">;

  @TypeGraphQL.Field(_type => BerryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BerryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
