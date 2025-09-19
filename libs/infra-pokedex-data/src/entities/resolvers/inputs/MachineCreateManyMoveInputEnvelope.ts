import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineCreateManyMoveInput } from "../inputs/MachineCreateManyMoveInput";

@TypeGraphQL.InputType("MachineCreateManyMoveInputEnvelope", {})
export class MachineCreateManyMoveInputEnvelope {
  @TypeGraphQL.Field(_type => [MachineCreateManyMoveInput], {
    nullable: false
  })
  data!: MachineCreateManyMoveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
