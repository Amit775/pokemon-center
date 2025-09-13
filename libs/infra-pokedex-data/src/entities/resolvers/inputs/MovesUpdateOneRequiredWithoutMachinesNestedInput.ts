import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateOrConnectWithoutMachinesInput } from "../inputs/MovesCreateOrConnectWithoutMachinesInput";
import { MovesCreateWithoutMachinesInput } from "../inputs/MovesCreateWithoutMachinesInput";
import { MovesUpdateToOneWithWhereWithoutMachinesInput } from "../inputs/MovesUpdateToOneWithWhereWithoutMachinesInput";
import { MovesUpsertWithoutMachinesInput } from "../inputs/MovesUpsertWithoutMachinesInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateOneRequiredWithoutMachinesNestedInput", {})
export class MovesUpdateOneRequiredWithoutMachinesNestedInput {
  @TypeGraphQL.Field(_type => MovesCreateWithoutMachinesInput, {
    nullable: true
  })
  create?: MovesCreateWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => MovesCreateOrConnectWithoutMachinesInput, {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpsertWithoutMachinesInput, {
    nullable: true
  })
  upsert?: MovesUpsertWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: true
  })
  connect?: MovesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateToOneWithWhereWithoutMachinesInput, {
    nullable: true
  })
  update?: MovesUpdateToOneWithWhereWithoutMachinesInput | undefined;
}
