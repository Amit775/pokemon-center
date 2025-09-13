import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateOrConnectWithoutBerriesInput } from "../inputs/ItemsCreateOrConnectWithoutBerriesInput";
import { ItemsCreateWithoutBerriesInput } from "../inputs/ItemsCreateWithoutBerriesInput";
import { ItemsUpdateToOneWithWhereWithoutBerriesInput } from "../inputs/ItemsUpdateToOneWithWhereWithoutBerriesInput";
import { ItemsUpsertWithoutBerriesInput } from "../inputs/ItemsUpsertWithoutBerriesInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsUpdateOneRequiredWithoutBerriesNestedInput", {})
export class ItemsUpdateOneRequiredWithoutBerriesNestedInput {
  @TypeGraphQL.Field(_type => ItemsCreateWithoutBerriesInput, {
    nullable: true
  })
  create?: ItemsCreateWithoutBerriesInput | undefined;

  @TypeGraphQL.Field(_type => ItemsCreateOrConnectWithoutBerriesInput, {
    nullable: true
  })
  connectOrCreate?: ItemsCreateOrConnectWithoutBerriesInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpsertWithoutBerriesInput, {
    nullable: true
  })
  upsert?: ItemsUpsertWithoutBerriesInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateToOneWithWhereWithoutBerriesInput, {
    nullable: true
  })
  update?: ItemsUpdateToOneWithWhereWithoutBerriesInput | undefined;
}
