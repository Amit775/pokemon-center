import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFlavorsOrderByWithAggregationInput } from "../../../inputs/BerryFlavorsOrderByWithAggregationInput";
import { BerryFlavorsScalarWhereWithAggregatesInput } from "../../../inputs/BerryFlavorsScalarWhereWithAggregatesInput";
import { BerryFlavorsWhereInput } from "../../../inputs/BerryFlavorsWhereInput";
import { BerryFlavorsScalarFieldEnum } from "../../../../enums/BerryFlavorsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBerryFlavorsArgs {
  @TypeGraphQL.Field(_type => BerryFlavorsWhereInput, {
    nullable: true
  })
  where?: BerryFlavorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BerryFlavorsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"berry_id" | "contest_type_id" | "flavor">;

  @TypeGraphQL.Field(_type => BerryFlavorsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BerryFlavorsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
