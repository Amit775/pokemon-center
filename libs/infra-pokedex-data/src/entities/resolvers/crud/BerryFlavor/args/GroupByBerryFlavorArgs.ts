import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFlavorOrderByWithAggregationInput } from "../../../inputs/BerryFlavorOrderByWithAggregationInput";
import { BerryFlavorScalarWhereWithAggregatesInput } from "../../../inputs/BerryFlavorScalarWhereWithAggregatesInput";
import { BerryFlavorWhereInput } from "../../../inputs/BerryFlavorWhereInput";
import { BerryFlavorScalarFieldEnum } from "../../../../enums/BerryFlavorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBerryFlavorArgs {
  @TypeGraphQL.Field(_type => BerryFlavorWhereInput, {
    nullable: true
  })
  where?: BerryFlavorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BerryFlavorOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"berry_id" | "contest_type_id" | "flavor">;

  @TypeGraphQL.Field(_type => BerryFlavorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BerryFlavorScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
