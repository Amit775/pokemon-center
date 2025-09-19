import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ItemGameIndexScalarWhereInput", {})
export class ItemGameIndexScalarWhereInput {
  @TypeGraphQL.Field(_type => [ItemGameIndexScalarWhereInput], {
    nullable: true
  })
  AND?: ItemGameIndexScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexScalarWhereInput], {
    nullable: true
  })
  OR?: ItemGameIndexScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexScalarWhereInput], {
    nullable: true
  })
  NOT?: ItemGameIndexScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  item_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  generation_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  game_index?: IntFilter | undefined;
}
