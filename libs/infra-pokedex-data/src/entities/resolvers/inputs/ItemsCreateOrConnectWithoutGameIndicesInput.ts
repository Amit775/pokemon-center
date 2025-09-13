import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateWithoutGameIndicesInput } from "../inputs/ItemsCreateWithoutGameIndicesInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsCreateOrConnectWithoutGameIndicesInput", {})
export class ItemsCreateOrConnectWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemsCreateWithoutGameIndicesInput, {
    nullable: false
  })
  create!: ItemsCreateWithoutGameIndicesInput;
}
