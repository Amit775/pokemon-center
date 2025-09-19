import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionCreateWithoutEncountersInput } from "../inputs/VersionCreateWithoutEncountersInput";
import { VersionUpdateWithoutEncountersInput } from "../inputs/VersionUpdateWithoutEncountersInput";
import { VersionWhereInput } from "../inputs/VersionWhereInput";

@TypeGraphQL.InputType("VersionUpsertWithoutEncountersInput", {})
export class VersionUpsertWithoutEncountersInput {
  @TypeGraphQL.Field(_type => VersionUpdateWithoutEncountersInput, {
    nullable: false
  })
  update!: VersionUpdateWithoutEncountersInput;

  @TypeGraphQL.Field(_type => VersionCreateWithoutEncountersInput, {
    nullable: false
  })
  create!: VersionCreateWithoutEncountersInput;

  @TypeGraphQL.Field(_type => VersionWhereInput, {
    nullable: true
  })
  where?: VersionWhereInput | undefined;
}
