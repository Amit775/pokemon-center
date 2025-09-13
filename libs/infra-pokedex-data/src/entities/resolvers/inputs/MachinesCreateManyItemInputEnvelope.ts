import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesCreateManyItemInput } from "../inputs/MachinesCreateManyItemInput";

@TypeGraphQL.InputType("MachinesCreateManyItemInputEnvelope", {})
export class MachinesCreateManyItemInputEnvelope {
  @TypeGraphQL.Field(_type => [MachinesCreateManyItemInput], {
    nullable: false
  })
  data!: MachinesCreateManyItemInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
