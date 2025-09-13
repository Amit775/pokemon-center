import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesCreateWithoutVersionGroupInput } from "../inputs/MachinesCreateWithoutVersionGroupInput";
import { MachinesUpdateWithoutVersionGroupInput } from "../inputs/MachinesUpdateWithoutVersionGroupInput";
import { MachinesWhereUniqueInput } from "../inputs/MachinesWhereUniqueInput";

@TypeGraphQL.InputType("MachinesUpsertWithWhereUniqueWithoutVersionGroupInput", {})
export class MachinesUpsertWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => MachinesWhereUniqueInput, {
    nullable: false
  })
  where!: MachinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MachinesUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  update!: MachinesUpdateWithoutVersionGroupInput;

  @TypeGraphQL.Field(_type => MachinesCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: MachinesCreateWithoutVersionGroupInput;
}
