import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerriesOrderByWithAggregationInput } from "../../../inputs/BerriesOrderByWithAggregationInput";
import { BerriesScalarWhereWithAggregatesInput } from "../../../inputs/BerriesScalarWhereWithAggregatesInput";
import { BerriesWhereInput } from "../../../inputs/BerriesWhereInput";
import { BerriesScalarFieldEnum } from "../../../../enums/BerriesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBerriesArgs {
  @TypeGraphQL.Field(_type => BerriesWhereInput, {
    nullable: true
  })
  where?: BerriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BerriesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BerriesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "item_id" | "firmness_id" | "natural_gift_power" | "natural_gift_type_id" | "size" | "max_harvest" | "growth_time" | "soil_dryness" | "smoothness">;

  @TypeGraphQL.Field(_type => BerriesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BerriesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
