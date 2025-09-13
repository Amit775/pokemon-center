import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateOrConnectWithoutGameIndicesInput } from "../inputs/ItemsCreateOrConnectWithoutGameIndicesInput";
import { ItemsCreateWithoutGameIndicesInput } from "../inputs/ItemsCreateWithoutGameIndicesInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsCreateNestedOneWithoutGameIndicesInput", {})
export class ItemsCreateNestedOneWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => ItemsCreateWithoutGameIndicesInput, {
    nullable: true
  })
  create?: ItemsCreateWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => ItemsCreateOrConnectWithoutGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: ItemsCreateOrConnectWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemsWhereUniqueInput | undefined;
}
