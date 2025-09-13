import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateOrConnectWithoutMachinesInput } from "../inputs/ItemsCreateOrConnectWithoutMachinesInput";
import { ItemsCreateWithoutMachinesInput } from "../inputs/ItemsCreateWithoutMachinesInput";
import { ItemsUpdateToOneWithWhereWithoutMachinesInput } from "../inputs/ItemsUpdateToOneWithWhereWithoutMachinesInput";
import { ItemsUpsertWithoutMachinesInput } from "../inputs/ItemsUpsertWithoutMachinesInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsUpdateOneRequiredWithoutMachinesNestedInput", {})
export class ItemsUpdateOneRequiredWithoutMachinesNestedInput {
  @TypeGraphQL.Field(_type => ItemsCreateWithoutMachinesInput, {
    nullable: true
  })
  create?: ItemsCreateWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => ItemsCreateOrConnectWithoutMachinesInput, {
    nullable: true
  })
  connectOrCreate?: ItemsCreateOrConnectWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpsertWithoutMachinesInput, {
    nullable: true
  })
  upsert?: ItemsUpsertWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateToOneWithWhereWithoutMachinesInput, {
    nullable: true
  })
  update?: ItemsUpdateToOneWithWhereWithoutMachinesInput | undefined;
}
