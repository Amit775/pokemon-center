import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateWithoutVersionInput } from "../inputs/EncountersCreateWithoutVersionInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersCreateOrConnectWithoutVersionInput", {})
export class EncountersCreateOrConnectWithoutVersionInput {
  @TypeGraphQL.Field(_type => EncountersWhereUniqueInput, {
    nullable: false
  })
  where!: EncountersWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncountersCreateWithoutVersionInput, {
    nullable: false
  })
  create!: EncountersCreateWithoutVersionInput;
}
