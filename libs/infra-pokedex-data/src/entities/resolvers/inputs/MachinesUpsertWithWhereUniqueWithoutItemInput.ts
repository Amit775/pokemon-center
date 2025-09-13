import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesCreateWithoutItemInput } from "../inputs/MachinesCreateWithoutItemInput";
import { MachinesUpdateWithoutItemInput } from "../inputs/MachinesUpdateWithoutItemInput";
import { MachinesWhereUniqueInput } from "../inputs/MachinesWhereUniqueInput";

@TypeGraphQL.InputType("MachinesUpsertWithWhereUniqueWithoutItemInput", {})
export class MachinesUpsertWithWhereUniqueWithoutItemInput {
  @TypeGraphQL.Field(_type => MachinesWhereUniqueInput, {
    nullable: false
  })
  where!: MachinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MachinesUpdateWithoutItemInput, {
    nullable: false
  })
  update!: MachinesUpdateWithoutItemInput;

  @TypeGraphQL.Field(_type => MachinesCreateWithoutItemInput, {
    nullable: false
  })
  create!: MachinesCreateWithoutItemInput;
}
