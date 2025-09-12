import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GrowthRatesOrderByWithRelationInput } from "../../../inputs/GrowthRatesOrderByWithRelationInput";
import { GrowthRatesWhereInput } from "../../../inputs/GrowthRatesWhereInput";
import { GrowthRatesWhereUniqueInput } from "../../../inputs/GrowthRatesWhereUniqueInput";
import { GrowthRatesScalarFieldEnum } from "../../../../enums/GrowthRatesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstGrowthRatesArgs {
  @TypeGraphQL.Field(_type => GrowthRatesWhereInput, {
    nullable: true
  })
  where?: GrowthRatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GrowthRatesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GrowthRatesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesWhereUniqueInput, {
    nullable: true
  })
  cursor?: GrowthRatesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [GrowthRatesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier" | "formula"> | undefined;
}
