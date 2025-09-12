import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateOrConnectWithoutHeldItemsInput } from "../inputs/ItemsCreateOrConnectWithoutHeldItemsInput";
import { ItemsCreateWithoutHeldItemsInput } from "../inputs/ItemsCreateWithoutHeldItemsInput";
import { ItemsUpdateToOneWithWhereWithoutHeldItemsInput } from "../inputs/ItemsUpdateToOneWithWhereWithoutHeldItemsInput";
import { ItemsUpsertWithoutHeldItemsInput } from "../inputs/ItemsUpsertWithoutHeldItemsInput";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsUpdateOneWithoutHeldItemsNestedInput", {})
export class ItemsUpdateOneWithoutHeldItemsNestedInput {
  @TypeGraphQL.Field(_type => ItemsCreateWithoutHeldItemsInput, {
    nullable: true
  })
  create?: ItemsCreateWithoutHeldItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemsCreateOrConnectWithoutHeldItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemsCreateOrConnectWithoutHeldItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpsertWithoutHeldItemsInput, {
    nullable: true
  })
  upsert?: ItemsUpsertWithoutHeldItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  disconnect?: ItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  delete?: ItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateToOneWithWhereWithoutHeldItemsInput, {
    nullable: true
  })
  update?: ItemsUpdateToOneWithWhereWithoutHeldItemsInput | undefined;
}
