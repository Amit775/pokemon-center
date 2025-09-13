import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesUpdateWithoutMoveInput } from "../inputs/MachinesUpdateWithoutMoveInput";
import { MachinesWhereUniqueInput } from "../inputs/MachinesWhereUniqueInput";

@TypeGraphQL.InputType("MachinesUpdateWithWhereUniqueWithoutMoveInput", {})
export class MachinesUpdateWithWhereUniqueWithoutMoveInput {
  @TypeGraphQL.Field(_type => MachinesWhereUniqueInput, {
    nullable: false
  })
  where!: MachinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MachinesUpdateWithoutMoveInput, {
    nullable: false
  })
  data!: MachinesUpdateWithoutMoveInput;
}
