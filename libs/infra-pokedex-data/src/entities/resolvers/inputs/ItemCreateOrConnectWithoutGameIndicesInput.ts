import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateWithoutGameIndicesInput } from "../inputs/ItemCreateWithoutGameIndicesInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateOrConnectWithoutGameIndicesInput", {})
export class ItemCreateOrConnectWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: false
  })
  where!: ItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemCreateWithoutGameIndicesInput, {
    nullable: false
  })
  create!: ItemCreateWithoutGameIndicesInput;
}
