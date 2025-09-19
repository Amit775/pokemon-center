import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineCreateManyVersionGroupInput } from "../inputs/MachineCreateManyVersionGroupInput";

@TypeGraphQL.InputType("MachineCreateManyVersionGroupInputEnvelope", {})
export class MachineCreateManyVersionGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [MachineCreateManyVersionGroupInput], {
    nullable: false
  })
  data!: MachineCreateManyVersionGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
