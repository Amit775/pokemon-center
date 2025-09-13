import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsCreateWithoutEncountersInput } from "../inputs/VersionsCreateWithoutEncountersInput";
import { VersionsUpdateWithoutEncountersInput } from "../inputs/VersionsUpdateWithoutEncountersInput";
import { VersionsWhereInput } from "../inputs/VersionsWhereInput";

@TypeGraphQL.InputType("VersionsUpsertWithoutEncountersInput", {})
export class VersionsUpsertWithoutEncountersInput {
  @TypeGraphQL.Field(_type => VersionsUpdateWithoutEncountersInput, {
    nullable: false
  })
  update!: VersionsUpdateWithoutEncountersInput;

  @TypeGraphQL.Field(_type => VersionsCreateWithoutEncountersInput, {
    nullable: false
  })
  create!: VersionsCreateWithoutEncountersInput;

  @TypeGraphQL.Field(_type => VersionsWhereInput, {
    nullable: true
  })
  where?: VersionsWhereInput | undefined;
}
