import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemCategoriesScalarWhereInput", {})
export class ItemCategoriesScalarWhereInput {
  @TypeGraphQL.Field(_type => [ItemCategoriesScalarWhereInput], {
    nullable: true
  })
  AND?: ItemCategoriesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoriesScalarWhereInput], {
    nullable: true
  })
  OR?: ItemCategoriesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoriesScalarWhereInput], {
    nullable: true
  })
  NOT?: ItemCategoriesScalarWhereInput[] | undefined;

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
