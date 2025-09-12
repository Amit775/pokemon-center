import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsUpdateWithoutEncountersInput } from "../inputs/VersionsUpdateWithoutEncountersInput";
import { VersionsWhereInput } from "../inputs/VersionsWhereInput";

@TypeGraphQL.InputType("VersionsUpdateToOneWithWhereWithoutEncountersInput", {})
export class VersionsUpdateToOneWithWhereWithoutEncountersInput {
  @TypeGraphQL.Field(_type => VersionsWhereInput, {
    nullable: true
  })
  where?: VersionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionsUpdateWithoutEncountersInput, {
    nullable: false
  })
  data!: VersionsUpdateWithoutEncountersInput;
}
