import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateOrConnectWithoutMachinesInput } from "../inputs/MoveCreateOrConnectWithoutMachinesInput";
import { MoveCreateWithoutMachinesInput } from "../inputs/MoveCreateWithoutMachinesInput";
import { MoveUpdateToOneWithWhereWithoutMachinesInput } from "../inputs/MoveUpdateToOneWithWhereWithoutMachinesInput";
import { MoveUpsertWithoutMachinesInput } from "../inputs/MoveUpsertWithoutMachinesInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateOneRequiredWithoutMachinesNestedInput", {})
export class MoveUpdateOneRequiredWithoutMachinesNestedInput {
  @TypeGraphQL.Field(_type => MoveCreateWithoutMachinesInput, {
    nullable: true
  })
  create?: MoveCreateWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => MoveCreateOrConnectWithoutMachinesInput, {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpsertWithoutMachinesInput, {
    nullable: true
  })
  upsert?: MoveUpsertWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateToOneWithWhereWithoutMachinesInput, {
    nullable: true
  })
  update?: MoveUpdateToOneWithWhereWithoutMachinesInput | undefined;
}
