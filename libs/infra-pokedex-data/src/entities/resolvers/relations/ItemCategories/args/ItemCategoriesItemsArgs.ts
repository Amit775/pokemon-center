import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemsOrderByWithRelationInput } from "../../../inputs/ItemsOrderByWithRelationInput";
import { ItemsWhereInput } from "../../../inputs/ItemsWhereInput";
import { ItemsWhereUniqueInput } from "../../../inputs/ItemsWhereUniqueInput";
import { ItemsScalarFieldEnum } from "../../../../enums/ItemsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ItemCategoriesItemsArgs {
  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ItemsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ItemsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ItemsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier" | "category_id" | "cost" | "fling_power" | "fling_effect_id"> | undefined;
}
