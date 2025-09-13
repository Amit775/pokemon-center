import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesCreateManyMoveInput } from "../inputs/MachinesCreateManyMoveInput";

@TypeGraphQL.InputType("MachinesCreateManyMoveInputEnvelope", {})
export class MachinesCreateManyMoveInputEnvelope {
  @TypeGraphQL.Field(_type => [MachinesCreateManyMoveInput], {
    nullable: false
  })
  data!: MachinesCreateManyMoveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
