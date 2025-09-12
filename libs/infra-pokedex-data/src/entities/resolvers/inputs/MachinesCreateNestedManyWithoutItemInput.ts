import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesCreateManyItemInputEnvelope } from "../inputs/MachinesCreateManyItemInputEnvelope";
import { MachinesCreateOrConnectWithoutItemInput } from "../inputs/MachinesCreateOrConnectWithoutItemInput";
import { MachinesCreateWithoutItemInput } from "../inputs/MachinesCreateWithoutItemInput";
import { MachinesWhereUniqueInput } from "../inputs/MachinesWhereUniqueInput";

@TypeGraphQL.InputType("MachinesCreateNestedManyWithoutItemInput", {})
export class MachinesCreateNestedManyWithoutItemInput {
  @TypeGraphQL.Field(_type => [MachinesCreateWithoutItemInput], {
    nullable: true
  })
  create?: MachinesCreateWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesCreateOrConnectWithoutItemInput], {
    nullable: true
  })
  connectOrCreate?: MachinesCreateOrConnectWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => MachinesCreateManyItemInputEnvelope, {
    nullable: true
  })
  createMany?: MachinesCreateManyItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MachinesWhereUniqueInput], {
    nullable: true
  })
  connect?: MachinesWhereUniqueInput[] | undefined;
}
