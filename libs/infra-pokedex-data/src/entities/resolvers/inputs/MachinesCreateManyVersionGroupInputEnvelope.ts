import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesCreateManyVersionGroupInput } from "../inputs/MachinesCreateManyVersionGroupInput";

@TypeGraphQL.InputType("MachinesCreateManyVersionGroupInputEnvelope", {})
export class MachinesCreateManyVersionGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [MachinesCreateManyVersionGroupInput], {
    nullable: false
  })
  data!: MachinesCreateManyVersionGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
