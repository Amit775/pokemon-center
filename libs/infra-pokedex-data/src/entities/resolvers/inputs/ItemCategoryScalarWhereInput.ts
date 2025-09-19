import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemCategoryScalarWhereInput", {})
export class ItemCategoryScalarWhereInput {
  @TypeGraphQL.Field(_type => [ItemCategoryScalarWhereInput], {
    nullable: true
  })
  AND?: ItemCategoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryScalarWhereInput], {
    nullable: true
  })
  OR?: ItemCategoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryScalarWhereInput], {
    nullable: true
  })
  NOT?: ItemCategoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pocket_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;
}
