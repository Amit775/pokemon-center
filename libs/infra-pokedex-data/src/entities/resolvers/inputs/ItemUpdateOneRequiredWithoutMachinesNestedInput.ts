import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateOrConnectWithoutMachinesInput } from "../inputs/ItemCreateOrConnectWithoutMachinesInput";
import { ItemCreateWithoutMachinesInput } from "../inputs/ItemCreateWithoutMachinesInput";
import { ItemUpdateToOneWithWhereWithoutMachinesInput } from "../inputs/ItemUpdateToOneWithWhereWithoutMachinesInput";
import { ItemUpsertWithoutMachinesInput } from "../inputs/ItemUpsertWithoutMachinesInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemUpdateOneRequiredWithoutMachinesNestedInput", {})
export class ItemUpdateOneRequiredWithoutMachinesNestedInput {
  @TypeGraphQL.Field(_type => ItemCreateWithoutMachinesInput, {
    nullable: true
  })
  create?: ItemCreateWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => ItemCreateOrConnectWithoutMachinesInput, {
    nullable: true
  })
  connectOrCreate?: ItemCreateOrConnectWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpsertWithoutMachinesInput, {
    nullable: true
  })
  upsert?: ItemUpsertWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateToOneWithWhereWithoutMachinesInput, {
    nullable: true
  })
  update?: ItemUpdateToOneWithWhereWithoutMachinesInput | undefined;
}
