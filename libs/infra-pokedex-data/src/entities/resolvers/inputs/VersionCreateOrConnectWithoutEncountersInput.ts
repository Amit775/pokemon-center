import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionCreateWithoutEncountersInput } from "../inputs/VersionCreateWithoutEncountersInput";
import { VersionWhereUniqueInput } from "../inputs/VersionWhereUniqueInput";

@TypeGraphQL.InputType("VersionCreateOrConnectWithoutEncountersInput", {})
export class VersionCreateOrConnectWithoutEncountersInput {
  @TypeGraphQL.Field(_type => VersionWhereUniqueInput, {
    nullable: false
  })
  where!: VersionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionCreateWithoutEncountersInput, {
    nullable: false
  })
  create!: VersionCreateWithoutEncountersInput;
}
