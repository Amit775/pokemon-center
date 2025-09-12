import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsCreateWithoutEncountersInput } from "../inputs/VersionsCreateWithoutEncountersInput";
import { VersionsWhereUniqueInput } from "../inputs/VersionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionsCreateOrConnectWithoutEncountersInput", {})
export class VersionsCreateOrConnectWithoutEncountersInput {
  @TypeGraphQL.Field(_type => VersionsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionsCreateWithoutEncountersInput, {
    nullable: false
  })
  create!: VersionsCreateWithoutEncountersInput;
}
