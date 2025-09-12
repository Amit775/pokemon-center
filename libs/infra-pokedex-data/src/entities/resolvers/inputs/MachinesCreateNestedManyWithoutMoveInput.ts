import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesCreateManyMoveInputEnvelope } from "../inputs/MachinesCreateManyMoveInputEnvelope";
import { MachinesCreateOrConnectWithoutMoveInput } from "../inputs/MachinesCreateOrConnectWithoutMoveInput";
import { MachinesCreateWithoutMoveInput } from "../inputs/MachinesCreateWithoutMoveInput";
import { MachinesWhereUniqueInput } from "../inputs/MachinesWhereUniqueInput";

@TypeGraphQL.InputType("MachinesCreateNestedManyWithoutMoveInput", {})
export class MachinesCreateNestedManyWithoutMoveInput {
  @TypeGraphQL.Field(_type => [MachinesCreateWithoutMoveInput], {
    nullable: true
  })
  create?: MachinesCreateWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesCreateOrConnectWithoutMoveInput], {
    nullable: true
  })
  connectOrCreate?: MachinesCreateOrConnectWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => MachinesCreateManyMoveInputEnvelope, {
    nullable: true
  })
  createMany?: MachinesCreateManyMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MachinesWhereUniqueInput], {
    nullable: true
  })
  connect?: MachinesWhereUniqueInput[] | undefined;
}
