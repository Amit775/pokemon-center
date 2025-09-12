import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ItemFlagMapScalarWhereInput", {})
export class ItemFlagMapScalarWhereInput {
  @TypeGraphQL.Field(_type => [ItemFlagMapScalarWhereInput], {
    nullable: true
  })
  AND?: ItemFlagMapScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapScalarWhereInput], {
    nullable: true
  })
  OR?: ItemFlagMapScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapScalarWhereInput], {
    nullable: true
  })
  NOT?: ItemFlagMapScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  item_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  item_flag_id?: IntFilter | undefined;
}
