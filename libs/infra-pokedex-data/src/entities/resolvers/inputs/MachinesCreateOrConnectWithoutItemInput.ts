import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesCreateWithoutItemInput } from "../inputs/MachinesCreateWithoutItemInput";
import { MachinesWhereUniqueInput } from "../inputs/MachinesWhereUniqueInput";

@TypeGraphQL.InputType("MachinesCreateOrConnectWithoutItemInput", {})
export class MachinesCreateOrConnectWithoutItemInput {
  @TypeGraphQL.Field(_type => MachinesWhereUniqueInput, {
    nullable: false
  })
  where!: MachinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MachinesCreateWithoutItemInput, {
    nullable: false
  })
  create!: MachinesCreateWithoutItemInput;
}
