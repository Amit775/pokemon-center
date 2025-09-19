import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCategoryOrderByWithRelationInput } from "../../../inputs/ItemCategoryOrderByWithRelationInput";
import { ItemCategoryWhereInput } from "../../../inputs/ItemCategoryWhereInput";
import { ItemCategoryWhereUniqueInput } from "../../../inputs/ItemCategoryWhereUniqueInput";
import { ItemCategoryScalarFieldEnum } from "../../../../enums/ItemCategoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstItemCategoryOrThrowArgs {
  @TypeGraphQL.Field(_type => ItemCategoryWhereInput, {
    nullable: true
  })
  where?: ItemCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ItemCategoryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: ItemCategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "pocket_id" | "identifier"> | undefined;
}
