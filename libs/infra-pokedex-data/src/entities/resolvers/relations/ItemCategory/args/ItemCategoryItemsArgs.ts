import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemOrderByWithRelationInput } from "../../../inputs/ItemOrderByWithRelationInput";
import { ItemWhereInput } from "../../../inputs/ItemWhereInput";
import { ItemWhereUniqueInput } from "../../../inputs/ItemWhereUniqueInput";
import { ItemScalarFieldEnum } from "../../../../enums/ItemScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ItemCategoryItemsArgs {
  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ItemOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: true
  })
  cursor?: ItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ItemScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier" | "category_id" | "cost" | "fling_power" | "fling_effect_id"> | undefined;
}
