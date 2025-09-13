import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsCreateOrConnectWithoutEncountersInput } from "../inputs/VersionsCreateOrConnectWithoutEncountersInput";
import { VersionsCreateWithoutEncountersInput } from "../inputs/VersionsCreateWithoutEncountersInput";
import { VersionsWhereUniqueInput } from "../inputs/VersionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionsCreateNestedOneWithoutEncountersInput", {})
export class VersionsCreateNestedOneWithoutEncountersInput {
  @TypeGraphQL.Field(_type => VersionsCreateWithoutEncountersInput, {
    nullable: true
  })
  create?: VersionsCreateWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => VersionsCreateOrConnectWithoutEncountersInput, {
    nullable: true
  })
  connectOrCreate?: VersionsCreateOrConnectWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => VersionsWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionsWhereUniqueInput | undefined;
}
