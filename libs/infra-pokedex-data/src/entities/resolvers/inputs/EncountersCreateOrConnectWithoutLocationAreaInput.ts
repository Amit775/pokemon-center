import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateWithoutLocationAreaInput } from "../inputs/EncountersCreateWithoutLocationAreaInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersCreateOrConnectWithoutLocationAreaInput", {})
export class EncountersCreateOrConnectWithoutLocationAreaInput {
  @TypeGraphQL.Field(_type => EncountersWhereUniqueInput, {
    nullable: false
  })
  where!: EncountersWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncountersCreateWithoutLocationAreaInput, {
    nullable: false
  })
  create!: EncountersCreateWithoutLocationAreaInput;
}
