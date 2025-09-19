import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineUpdateWithoutItemInput } from "../inputs/MachineUpdateWithoutItemInput";
import { MachineWhereUniqueInput } from "../inputs/MachineWhereUniqueInput";

@TypeGraphQL.InputType("MachineUpdateWithWhereUniqueWithoutItemInput", {})
export class MachineUpdateWithWhereUniqueWithoutItemInput {
  @TypeGraphQL.Field(_type => MachineWhereUniqueInput, {
    nullable: false
  })
  where!: MachineWhereUniqueInput;

  @TypeGraphQL.Field(_type => MachineUpdateWithoutItemInput, {
    nullable: false
  })
  data!: MachineUpdateWithoutItemInput;
}
