import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsCreateWithoutVersionGroupInput } from "../inputs/VersionsCreateWithoutVersionGroupInput";
import { VersionsUpdateWithoutVersionGroupInput } from "../inputs/VersionsUpdateWithoutVersionGroupInput";
import { VersionsWhereUniqueInput } from "../inputs/VersionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionsUpsertWithWhereUniqueWithoutVersionGroupInput", {})
export class VersionsUpsertWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => VersionsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionsUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  update!: VersionsUpdateWithoutVersionGroupInput;

  @TypeGraphQL.Field(_type => VersionsCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: VersionsCreateWithoutVersionGroupInput;
}
