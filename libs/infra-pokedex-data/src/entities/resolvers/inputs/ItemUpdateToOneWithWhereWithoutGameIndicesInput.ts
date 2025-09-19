import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemUpdateWithoutGameIndicesInput } from "../inputs/ItemUpdateWithoutGameIndicesInput";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemUpdateToOneWithWhereWithoutGameIndicesInput", {})
export class ItemUpdateToOneWithWhereWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateWithoutGameIndicesInput, {
    nullable: false
  })
  data!: ItemUpdateWithoutGameIndicesInput;
}
