import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateOrConnectWithoutBerriesInput } from "../inputs/ItemCreateOrConnectWithoutBerriesInput";
import { ItemCreateWithoutBerriesInput } from "../inputs/ItemCreateWithoutBerriesInput";
import { ItemUpdateToOneWithWhereWithoutBerriesInput } from "../inputs/ItemUpdateToOneWithWhereWithoutBerriesInput";
import { ItemUpsertWithoutBerriesInput } from "../inputs/ItemUpsertWithoutBerriesInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemUpdateOneRequiredWithoutBerriesNestedInput", {})
export class ItemUpdateOneRequiredWithoutBerriesNestedInput {
  @TypeGraphQL.Field(_type => ItemCreateWithoutBerriesInput, {
    nullable: true
  })
  create?: ItemCreateWithoutBerriesInput | undefined;

  @TypeGraphQL.Field(_type => ItemCreateOrConnectWithoutBerriesInput, {
    nullable: true
  })
  connectOrCreate?: ItemCreateOrConnectWithoutBerriesInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpsertWithoutBerriesInput, {
    nullable: true
  })
  upsert?: ItemUpsertWithoutBerriesInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateToOneWithWhereWithoutBerriesInput, {
    nullable: true
  })
  update?: ItemUpdateToOneWithWhereWithoutBerriesInput | undefined;
}
