import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryOrderByWithRelationInput } from "../../../inputs/BerryOrderByWithRelationInput";
import { BerryWhereInput } from "../../../inputs/BerryWhereInput";
import { BerryWhereUniqueInput } from "../../../inputs/BerryWhereUniqueInput";
import { BerryScalarFieldEnum } from "../../../../enums/BerryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class BerryFirmnessBerriesArgs {
  @TypeGraphQL.Field(_type => BerryWhereInput, {
    nullable: true
  })
  where?: BerryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BerryOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BerryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryWhereUniqueInput, {
    nullable: true
  })
  cursor?: BerryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BerryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "item_id" | "firmness_id" | "natural_gift_power" | "natural_gift_type_id" | "size" | "max_harvest" | "growth_time" | "soil_dryness" | "smoothness"> | undefined;
}
