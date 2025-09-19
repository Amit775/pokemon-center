import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateOrConnectWithoutHeldItemsInput } from "../inputs/ItemCreateOrConnectWithoutHeldItemsInput";
import { ItemCreateWithoutHeldItemsInput } from "../inputs/ItemCreateWithoutHeldItemsInput";
import { ItemUpdateToOneWithWhereWithoutHeldItemsInput } from "../inputs/ItemUpdateToOneWithWhereWithoutHeldItemsInput";
import { ItemUpsertWithoutHeldItemsInput } from "../inputs/ItemUpsertWithoutHeldItemsInput";
import { ItemWhereInput } from "../inputs/ItemWhereInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemUpdateOneWithoutHeldItemsNestedInput", {})
export class ItemUpdateOneWithoutHeldItemsNestedInput {
  @TypeGraphQL.Field(_type => ItemCreateWithoutHeldItemsInput, {
    nullable: true
  })
  create?: ItemCreateWithoutHeldItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemCreateOrConnectWithoutHeldItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemCreateOrConnectWithoutHeldItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpsertWithoutHeldItemsInput, {
    nullable: true
  })
  upsert?: ItemUpsertWithoutHeldItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  disconnect?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  delete?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateToOneWithWhereWithoutHeldItemsInput, {
    nullable: true
  })
  update?: ItemUpdateToOneWithWhereWithoutHeldItemsInput | undefined;
}
