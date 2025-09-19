import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineCreateManyItemInput } from "../inputs/MachineCreateManyItemInput";

@TypeGraphQL.InputType("MachineCreateManyItemInputEnvelope", {})
export class MachineCreateManyItemInputEnvelope {
  @TypeGraphQL.Field(_type => [MachineCreateManyItemInput], {
    nullable: false
  })
  data!: MachineCreateManyItemInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
