import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsUpdateWithoutGameIndicesInput } from "../inputs/ItemsUpdateWithoutGameIndicesInput";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";

@TypeGraphQL.InputType("ItemsUpdateToOneWithWhereWithoutGameIndicesInput", {})
export class ItemsUpdateToOneWithWhereWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateWithoutGameIndicesInput, {
    nullable: false
  })
  data!: ItemsUpdateWithoutGameIndicesInput;
}
