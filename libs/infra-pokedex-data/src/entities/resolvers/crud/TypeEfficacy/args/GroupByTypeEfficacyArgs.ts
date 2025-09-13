import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeEfficacyOrderByWithAggregationInput } from "../../../inputs/TypeEfficacyOrderByWithAggregationInput";
import { TypeEfficacyScalarWhereWithAggregatesInput } from "../../../inputs/TypeEfficacyScalarWhereWithAggregatesInput";
import { TypeEfficacyWhereInput } from "../../../inputs/TypeEfficacyWhereInput";
import { TypeEfficacyScalarFieldEnum } from "../../../../enums/TypeEfficacyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTypeEfficacyArgs {
  @TypeGraphQL.Field(_type => TypeEfficacyWhereInput, {
    nullable: true
  })
  where?: TypeEfficacyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TypeEfficacyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"damage_type_id" | "target_type_id" | "damage_factor">;

  @TypeGraphQL.Field(_type => TypeEfficacyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TypeEfficacyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
