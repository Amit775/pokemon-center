import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineCreateManyItemInputEnvelope } from "../inputs/MachineCreateManyItemInputEnvelope";
import { MachineCreateOrConnectWithoutItemInput } from "../inputs/MachineCreateOrConnectWithoutItemInput";
import { MachineCreateWithoutItemInput } from "../inputs/MachineCreateWithoutItemInput";
import { MachineWhereUniqueInput } from "../inputs/MachineWhereUniqueInput";

@TypeGraphQL.InputType("MachineCreateNestedManyWithoutItemInput", {})
export class MachineCreateNestedManyWithoutItemInput {
  @TypeGraphQL.Field(_type => [MachineCreateWithoutItemInput], {
    nullable: true
  })
  create?: MachineCreateWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineCreateOrConnectWithoutItemInput], {
    nullable: true
  })
  connectOrCreate?: MachineCreateOrConnectWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => MachineCreateManyItemInputEnvelope, {
    nullable: true
  })
  createMany?: MachineCreateManyItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MachineWhereUniqueInput], {
    nullable: true
  })
  connect?: MachineWhereUniqueInput[] | undefined;
}
