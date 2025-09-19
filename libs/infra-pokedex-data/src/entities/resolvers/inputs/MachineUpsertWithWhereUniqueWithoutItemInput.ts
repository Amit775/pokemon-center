import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineCreateWithoutItemInput } from "../inputs/MachineCreateWithoutItemInput";
import { MachineUpdateWithoutItemInput } from "../inputs/MachineUpdateWithoutItemInput";
import { MachineWhereUniqueInput } from "../inputs/MachineWhereUniqueInput";

@TypeGraphQL.InputType("MachineUpsertWithWhereUniqueWithoutItemInput", {})
export class MachineUpsertWithWhereUniqueWithoutItemInput {
  @TypeGraphQL.Field(_type => MachineWhereUniqueInput, {
    nullable: false
  })
  where!: MachineWhereUniqueInput;

  @TypeGraphQL.Field(_type => MachineUpdateWithoutItemInput, {
    nullable: false
  })
  update!: MachineUpdateWithoutItemInput;

  @TypeGraphQL.Field(_type => MachineCreateWithoutItemInput, {
    nullable: false
  })
  create!: MachineCreateWithoutItemInput;
}
