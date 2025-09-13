import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFirmnessOrderByWithAggregationInput } from "../../../inputs/BerryFirmnessOrderByWithAggregationInput";
import { BerryFirmnessScalarWhereWithAggregatesInput } from "../../../inputs/BerryFirmnessScalarWhereWithAggregatesInput";
import { BerryFirmnessWhereInput } from "../../../inputs/BerryFirmnessWhereInput";
import { BerryFirmnessScalarFieldEnum } from "../../../../enums/BerryFirmnessScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBerryFirmnessArgs {
  @TypeGraphQL.Field(_type => BerryFirmnessWhereInput, {
    nullable: true
  })
  where?: BerryFirmnessWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BerryFirmnessOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BerryFirmnessOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFirmnessScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => BerryFirmnessScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BerryFirmnessScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
