import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateOrConnectWithoutGameIndicesInput } from "../inputs/ItemCreateOrConnectWithoutGameIndicesInput";
import { ItemCreateWithoutGameIndicesInput } from "../inputs/ItemCreateWithoutGameIndicesInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateNestedOneWithoutGameIndicesInput", {})
export class ItemCreateNestedOneWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => ItemCreateWithoutGameIndicesInput, {
    nullable: true
  })
  create?: ItemCreateWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => ItemCreateOrConnectWithoutGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: ItemCreateOrConnectWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemWhereUniqueInput | undefined;
}
