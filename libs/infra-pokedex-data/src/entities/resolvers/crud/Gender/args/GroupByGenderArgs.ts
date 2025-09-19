import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenderOrderByWithAggregationInput } from "../../../inputs/GenderOrderByWithAggregationInput";
import { GenderScalarWhereWithAggregatesInput } from "../../../inputs/GenderScalarWhereWithAggregatesInput";
import { GenderWhereInput } from "../../../inputs/GenderWhereInput";
import { GenderScalarFieldEnum } from "../../../../enums/GenderScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGenderArgs {
  @TypeGraphQL.Field(_type => GenderWhereInput, {
    nullable: true
  })
  where?: GenderWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GenderOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GenderOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenderScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => GenderScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GenderScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
