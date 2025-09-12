import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesUpdateWithoutItemInput } from "../inputs/MachinesUpdateWithoutItemInput";
import { MachinesWhereUniqueInput } from "../inputs/MachinesWhereUniqueInput";

@TypeGraphQL.InputType("MachinesUpdateWithWhereUniqueWithoutItemInput", {})
export class MachinesUpdateWithWhereUniqueWithoutItemInput {
  @TypeGraphQL.Field(_type => MachinesWhereUniqueInput, {
    nullable: false
  })
  where!: MachinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MachinesUpdateWithoutItemInput, {
    nullable: false
  })
  data!: MachinesUpdateWithoutItemInput;
}
